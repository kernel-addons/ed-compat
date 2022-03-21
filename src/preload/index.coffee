import {ipcRenderer, contextBridge} from "electron";
import fs from "./fs";
import path from "path";

ipcRenderer.invoke "custom-devtools-warning";

contextBridge.exposeInMainWorld "__ED_NATIVE__", 
    fs: fs
    path: path,
    current: path.resolve __dirname, ".."