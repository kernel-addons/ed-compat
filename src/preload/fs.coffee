import fs from "fs";

keys = Object.keys fs;
ignore = ["promises"];

noop = (value) -> value;

handleStat = (ret) -> {
    ...ret
    isFile: ret.isFile.bind ret
    isDirectory: ret.isDirectory.bind ret
};

overrides = 
    stat: handleStat
    statSync: handleStat

export default Object.fromEntries(
    for key in keys 
        continue if key in ignore;
        do ->
            original = fs[key];
            type = typeof original;
            override = overrides[key] || noop;

            if type is "number" or type is "object" or type is "undefined" then [key, original];
            else if type is "function" then [
                key, 
                (...args) -> 
                    override(Reflect.apply original, this, args); 
            ];
);