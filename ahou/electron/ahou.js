import { app } from 'electron'
import './ipc/ipc.js';
import {createWindow} from "./windows/windows.js";



app.whenReady().then(() => {
  createWindow.launchPage();
})
