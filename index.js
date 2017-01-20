//index.js
'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let listenRadio = 'http://listenradio.jp/';

function createMainWindow(){
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      plugins: true
    }
  });
  mainWindow.loadURL(listenRadio);
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/PepperFlash/pepflashplayer.dll');
app.commandLine.appendSwitch('ppapi-flash-version', '24.0.0.194');
app.on('ready', function(){
  createMainWindow();
});
app.on('window-all-closed', function(){
  if (process.p-latform !== 'darwin'){
    app.quit();
  }
});
app.on('activate', function(){
  if (mainWindow === null){
    createMainWindow();
  }
});