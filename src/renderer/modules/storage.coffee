import CustomRequire from "../api/require";
import Logger from "./logger";

fs = CustomRequire "fs";
path = CustomRequire "path";

export default new class Storage
    cache: {};
    folder: path.resolve __ED_NATIVE__.current, "config";

    constructor: ->
        if not fs.existsSync(@folder)
            try fs.mkdirSync @folder;
            catch error then Logger.error "Storage", error;
    
    get: (id, def = {}) ->
        return if cache[id] isnt undefined;

        file = path.resolve @folder, "#{id}.json";
        data = try JSON.parse(fs.readFileSync file, "utf8");

        if data isnt undefined then cache[id] = data;
        else return def;
        
        return data; 
    
    set: (id, data) ->
        cache[id] = data;

        file = path.resolve @folder, "#{id}.json";
        
        try fs.writeFileSync file, JSON.stringify(data, null, "\t"), "utf8";
        catch error 
            Logger.error "Failed to save data #{id}:", error; 