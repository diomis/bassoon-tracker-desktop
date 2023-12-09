const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        icon: process.platform !== 'darwin' ? 'icons/icon.ico' : 'icons/icon.icns'
    })

    win.loadFile('index.html')
    // win.loadFile('dev.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
