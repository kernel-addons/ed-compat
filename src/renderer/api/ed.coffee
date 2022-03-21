import DOM from "../modules/dom";
import Storage from "../modules/storage";
import Logger from "../modules/logger";

sleep = (ms) -> 
    new Promise (resolve) -> 
        setTimeout resolve, ms;

waitForWebpack = ->
    while not window._
        await sleep(100);
    return;

export default new class EDApi
    constructor: ->
        waitForWebpack().then () =>
            chunk = [
                [Symbol "ED"],
                {},
                (require) -> require 
            ];
            @req = webpackChunkdiscord_app.push chunk;
            webpackChunkdiscord_app.pop();

        Object.defineProperty @, "React", 
            get: =>
                if @_react then return @_react;
        
                @_react = @findModuleByProps "createElement";
            set: -> undefined;

        Object.defineProperty @, "ReactDOM",
            get: => 
                if @_react_dom then return @_react_dom;

                @_react_dom = @findModuleByProps "findDOMNode";
            set: -> undefined;

    findModule: (filter, silent = yes, all = no, raw = no) =>
        result = [];
        wrappedFilter = (module) ->
            try return filter(module);

            return no;

        push = (id) ->
            if raw then modules.push @req.c[id];
            else modules.push @req.c[id].exports;  

        for id of @req.c
            module = @req.c[id]?.exports;

            continue if not module;

            if wrappedFilter module
                if all then push id;
                else return module;
            else if module.default and wrappedFilter module.default
                if all then push id;
                else return module.default;
        
        return result;

    findAllModules: (filter, silent = yes) => 
        @findModule filter, silent, yes;

    findRawModule: (filter, silent) => 
        @findModule filter, silent, no, yes;

    findModuleByProps: (...props) => 
        @findModule (module) ->
            module and props.every (prop) => 
                module[prop] isnt undefined;

    findModuleByDisplayName: (displayName) =>
        @findModule (module) ->
            module.displayName is displayName;

    injectCSS: (id, css) ->
        DOM.injectCSS id, css;

    clearCSS: (id, css) ->
        DOM.clearCSS id, css;

    escapeID: (id) -> id.replace /^[^a-z]+|[^\w-]+/gi, "";

    suppressErrors: (func, description) -> () ->
        try Reflect.apply func, this, arguments;
        catch error
            Logger.error "Suppression", description;

    loadPluginSettings: (pluginName) -> 
        Storage.get pluginName, undefined;
    
    loadData: (pluginName, key) -> 
        data = Storage.get pluginName;
        return unless data;

        return data[key];

    savePluginSettings: (pluginName, data) -> 
        Storage.set pluginName, data;

    saveData: (pluginName, key, newData) -> 
        data = Storage.get pluginName || {};
        data[key] = newData;

        Storage.set pluginName, data;

    getData: -> Reflect.apply @loadData, this, arguments;

    setData: -> Reflect.appy @saveData, this, arguments;

    getInternalInstance: (node) ->
        return unless node;

        return node.__reactFiber$;

    monkeyPatch: (module, method, options) ->
        if typeof options is "function"
            options = 
                instead: options
                silent: true

        {before, after, instead, once = no, force = no} = options;
        displayName = options.displayName or module.displayName or module.name or module.constructor?.name or module.constructor?.displayName or null;

        if not module[method]
            if force then module[method] = () -> undefined;
            else return Logger.warn "Modules", "Method #{method} doesn't exist in #{displayName}. Cancelling.";

        originalMethod = module[method];
        cancel = () -> module[method] = originalMethod;

        module[method] = () ->
            data =
                thisObject: this
                methodArguments: arguments
                cancelPatch: cancel
                originalMethod: originalMethod
                callOriginalMethod: () -> 
                    data.returnValue = Reflect.apply data.originalMethod, data.thisObject, data.methodArguments;

            if typeof instead is "function"
                do ->
                    tempRet = EDApi.suppressErrors(instead, "'instead' callback of #{displayName}") data;
                    if tempRet isnt undefined then data.returnValue = tempRet;
            else 
                if typeof before is "function" then EDApi.suppressErrors(before, "'before' callback of #{displayName}") data;
                data.callOriginalMethod();
                if typeof after is "function" then EDApi.suppressErrors(before, "'after' callback of #{displayName}") data;

            if once then data.cancel();
            return data.returnValue;
        
        module[method].__monkeyPatched = yes;
        module[method].unpatch = cancel;
        Object.assign module[method], originalMethod;

        return cancel;

    testJSON: (data) -> 
        try JSON.parse data;
        catch error then Logger.error "EDApi.testJSON", "Failed to parse JSON:", error;
    
    formatString: (string, values) ->
        for key of values
            string = string.replace new RegExp("\\{\\{#{key}\\}\\}", "g"), values[key];
        return string;