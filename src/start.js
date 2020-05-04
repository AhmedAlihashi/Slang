const { app, BrowserWindow } = require("electron");
const electronDl = require("electron-dl");

const path = require("path");
const url = require("url");

electronDl();
let mainWindow;

async function createWindow() {
  await app.whenReady();
  mainWindow = new BrowserWindow({
    width: 1080,
    minHeight: "30vw",
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/../public/index.html"),
        protocol: "file:",
        slashes: true,
      })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
