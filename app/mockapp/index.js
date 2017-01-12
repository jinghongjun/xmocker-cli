'use strict'
const Koa = require('koa');
const app = new Koa()
const fs = require('fs');
const http = require('http');
const path = require('path')
const minimist = require('minimist');
const sendFile = require('../util/file-server.js');
// 全局变量定义区，待后续可改为配置
var args = minimist(process.argv.slice(2));

const apiPORT = args.port || 6000;
const projectDir = args.path;

// passport认证

app.proxy = true
// sessions

// body parser
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 调用路由
// 静态服务器 添加默认为Index.html
app.use(async function(ctx, next){
  return next().then(sendFile(ctx, ctx.path, {root: projectDir,index: 'index.html'}));
})

app.use(require('./router.js').routes())



// 建立是的监听及server
const httpServer = http.createServer(app.callback());

httpServer.listen(apiPORT, function() {
    process.stdout.write('cmd:finished');
});

module.exports = httpServer;

process.stdin.on('data', function(data){
    var signal = data.toString();
    if(signal === 'kill')
        process.exit(1)
});