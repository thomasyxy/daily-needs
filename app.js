
const koa = require('koa')
const router = require('koa-router')
const Jade = require('koa-jade')
const reqwest = require('reqwest')
const path = require('path')
const staticCache = require('koa-static-cache')

const app = koa()


//静态资源文件
app.use(staticCache('./static', {
    maxAge: 0
}));

const jade = new Jade({
  viewPath: __dirname + "/views",
  debug: true,
  pretty: true,
  compileDebug: false,
  app: app
})

//路由
app.use(require('./configs/routers')())

/**
 * 监听端口
 */
module.exports = app.listen(9000, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log('> listening at http://127.0.0.1:' + 9000)
})
