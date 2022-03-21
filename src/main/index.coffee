import {ipcMain} from "electron";

ipcMain.handle "custom-devtools-warning", ({sender: webContents}) ->
    webContents.removeAllListeners "devtools-opened";
    webContents.on "devtools-opened", () ->
        webContents.executeJavaScript """
            console.log("%cHold Up!", "color: #FF5200; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
            console.log("%cIf you're reading this, you're probably smarter than most Discord developers.", "font-size: 16px;");
            console.log("%cPasting anything in here could actually improve the Discord client.", "font-size: 18px; font-weight: bold; color: red;");
            console.log("%cUnless you understand exactly what you're doing, keep this window open to browse our bad code.", "font-size: 16px;");
            console.log("%cIf you don't understand exactly what you're doing, you should come work with us: https://discordapp.com/jobs", "font-size: 16px;");
        """;
    return true;