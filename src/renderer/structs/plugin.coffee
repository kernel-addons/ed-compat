import EDApi from "../api/ed";

export default class Plugin
    color: "orange";
    author: "<unknown>";

    constructor: (options = {}) ->
        Object.assign @, options;

        Object.defineProperty @, "settings",
            get: => EDApi.loadPluginSettings(@id)
            set: => EDApi.savePluginSettings(@id)
        

    load: -> undefined;
    unload: -> undefined;

    reload: -> undefined;

    log: (...message) ->
        console.log "%c[EnhancedDiscord] %c[#{@name}]", "color: red", "color: #{this.color}", ...message;

    info: (...message) ->
        console.info "%c[EnhancedDiscord] %c[#{@name}]", "color: red", "color: #{this.color}", ...message;

    warn: (...message) ->
        console.log "%c[EnhancedDiscord] %c[#{@name}]", "color: red", "color: #{this.color}", ...message;

    error: (...message) ->
        console.log "%c[EnhancedDiscord] %c[#{@name}]", "color: red", "color: #{this.color}", ...message;

    sleep: (ms) -> 
        new Promise (resolve) -> 
            setTimeout(resolve, ms);
    
    getSetting: (key) -> 
        EDApi.loadData @id, key;
    
    setSetting: (key, data) ->
        EDApi.saveData @id, key, data;
