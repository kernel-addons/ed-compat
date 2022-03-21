import EDApi from "./api/ed";
import Logger from "./modules/logger";
import PluginsManager from "./modules/plugins";
import Require from "./api/require";

export default new class EDCompat
    version: "2.0.0";

    start: ->
        window.EDApi = EDApi;
        window.findModule = EDApi.findModule;
        window.findModules = EDApi.findAllModules;
        window.findRawModule = EDApi.findRawModule;
        window.ed_require = Require;

        window.ED =
            version: @version

        Object.defineProperty ED, "plugins",
            get: -> PluginsManager.getPlugins(),
            set: -> undefined;

        Logger.log null, "v#{@version} is running. Validating plugins...";

    stop: -> 
        console.log "stopped.";