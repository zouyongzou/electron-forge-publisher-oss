# Electron Forge Publisher OSS

Electron Forge Publisher OSS that publish your distributable Electron app artifacts to Aliyun Object Storage Service (OSS).

English | [简体中文](./README-zh_CN.md) 

## ✨ Features

- ⚙️ Electron Forge publish to OSS.
- ⚙️ Electron auto update.

## 🖥 Platform

- macOS and Windows

## 📦 Install

```bash
npm install electron-forge-publisher-oss --save
```

```bash
yarn add electron-forge-publisher-oss
```

## 🔨 Usage

### publishers config

```javascript
// forge.config.js

module.exports = {
  // ...
  publishers: [
    {
      name: 'electron-forge-publisher-oss',
      config: {
        basePath: '/desktop',
        region: 'oss-cn-hangzhou',
        bucket: 'my-bucket',
        accessKeyId: 'xxx',
        accessKeySecret: 'xxx',
      }
    }
  ]
}
```

The `basePath` is the base path, and other parameters are the same as the OSS parameters.

### auto update config

```javascript
// main.js

import { autoUpdater } from 'electron'
import fetch from 'node-fetch'

const baseUrl = `https://my-bucket.oss-cn-zhangjiakou.aliyuncs.com/desktop/${platform}`

const release = await fetch(`${baseUrl}/release.json`)
const { currentRelease } = release

let url

if (process.platform === 'darwin') {
  url = `${baseUrl}/release.json`
} else {
  url = `${baseUrl}/${currentRelease}`
}

autoUpdater.setFeedURL({
  url,
  serverType: 'json'
})

autoUpdater.checkForUpdates()
```

[See more >>](https://www.yuque.com/zouyong/blog/cr8gko)

## 📋 Change Log

## 1.0.0

`2022-11-07`
- 🆕 Electron Forge publish to OSS.
- 🆕 Electron auto update.
