"use strict";
const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);

  //创建文件
  router.post('/file/create', ctrl.file.create);

  //fie 测试插件列表数据
  router.get('/data/fieList', ctrl.data.fieList);

  //配置拉取
  router.get('/data/docConfig', ctrl.data.docConfig);

  return router.middleware();
}
