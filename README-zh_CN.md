# Electron Forge Publisher OSS

Electron Forge Publisher OSS，将可分发的 Electron 应用程序发布到阿里云对象存储服务（OSS）。

[English](./README.md)  | 简体中文

## ✨ 功能

- ⚙️ Electron Forge 打包发布到 OSS。
- ⚙️ Electron 自动更新。

## 🖥 平台

- macOS 和 Windows

## 📦 安装

```bash
npm install electron-forge-publisher-oss --save
```

```bash
yarn add electron-forge-publisher-oss
```

## 🔨 用法

### publishers 配置

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

其中 `basePath` 为基础路径，其它参数与 OSS 参数一致。

### 自动更新配置

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

[了解更多 >>](https://www.yuque.com/zouyong/blog/cr8gko)

## 📋 更新日志

### 1.0.0

`2022-11-07`
- 🆕 Electron Forge 打包发布到 OSS。
- 🆕 Electron 自动更新。
