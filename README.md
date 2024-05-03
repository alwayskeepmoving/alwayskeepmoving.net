## 引言

AlwaysKeepMoving 官方网站的 Git 存储库。

使用 [Vue.js](https://cn.vuejs.org/) 构建。

## 运行

> [!NOTE]
> 在运行 `npm run dev` 之前，请先使用 `npm install` 安装依赖。

> [!WARNING]
> 在 `package.json` 中，`scripts` 下的 `dev` 选项中已默认加入了 `--host 0.0.0.0` 参数，以允许通过 IP 地址访问。
> ```json
>   "scripts": {
>   "dev": "vite --host 0.0.0.0",
>   "build": "run-p type-check \"build-only {@}\" --",
>   "preview": "vite preview",
>   "build-only": "vite build",
>   "type-check": "vue-tsc --build --force"
> },
> ```


> 
`npm run dev`

## 构建

`npm run build`