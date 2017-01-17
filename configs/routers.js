"use strict";
const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);

  //创建文件
  router.post('/file/create', ctrl.file.create);

  //配置拉取
  router.get('/data/docConfig', ctrl.data.docConfig);

  return router.middleware();
}
