"use strict";
const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);

  //fie 测试插件列表数据
  router.post('/file/create', ctrl.file.create);

  return router.middleware();
}
