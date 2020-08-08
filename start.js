const { app, BrowserWindow } = require("electron");
const electronDl = require("electron-dl");

const path = require("path");
const url = require("url");

electronDl();
let mainWindow;

async function createWindow() {
  await app.whenReady();
  mainWindow = new BrowserWindow({
    icon: __dirname + "/build/vidLogo.ico",
    width: 900,
    minWidth: 780,
    minHeight: 698,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/build/index.html"),
        protocol: "file:",
        slashes: true,
      })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    require("electron").shell.openExternal(url);
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());

app.on("activate", () => mainWindow === null && createWindow());
