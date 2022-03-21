import Plugin from "../structs/plugin";

export default require = (mod) ->
    switch mod 
        when "../plugin" then return Plugin;
        when "fs" then return __ED_NATIVE__.fs;
        when "path" then return __ED_NATIVE__.path;