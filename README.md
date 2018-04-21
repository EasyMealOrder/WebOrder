# easy-meal-order

> 该项目的前端实现

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 依赖安装
没把node_module git 上来，请先安装依赖(如果npm太慢可以换用cnpm)
```bash
npm install
```
该项目使用webpack-simple的，请自行安装vue-router
```bash
npm install vue-router -D
```
该项目使用了[element UI](http://element-cn.eleme.io/#/zh-CN),请先安装element UI
```bash
npm i element-ui -S
```
由于webpack的loader和elementUI之间存在一些冲突,先更改了配置文件中的rule（仓库中的已经更改）然后安装一下两个包
```bash
npm install --save-dev style-loader
npm install --save-dev url-loader
```
## 备注
上面说到的更改是指在webpack.config.js中rule加入如下配置
```javascript
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: '[name].[ext]'
    }
}
```