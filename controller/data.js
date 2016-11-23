"use strict"
const request = require('request');
const j = request.jar();
const reqwest = require('reqwest');
const path = require('path');

module.exports = {
  docConfig: function *(next){
    var poxyReq = new Promise(function(resolve, reject){
      let captureGoal = false ? 'http://127.0.0.1:9000/mock/zz.json' : 'http://127.0.0.1:9000/mock/all.json';
      let opt = {
        url: captureGoal,
        json: true,
        multipart: [ { 'content-type': 'application/json'
          ,  body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
          }
        , { body: 'I am an attachment' }
        ]
      }
      request.get(opt, function(err, res, body){
        if(err){
            console.log("***************[request error]*****************");
            console.log(err);
            console.log(body);
            resolve(err);
            return;
        }
        if(res && res.statusCode != 200){
            console.log("***************[response error]*****************");
            console.log(body);
            resolve(res);
            return;
        }
        resolve(body);
      })
    })

    let data = yield poxyReq

    this.render('data',{
      data: data
    })
    yield next
  },
  fieList: function *(next){
    var poxyReq = new Promise(function(resolve, reject){
      let captureGoal = 'http://127.0.0.1:9000/data/fieList.json';
      let opt = {
        url: captureGoal,
        json: true
      }
      request.get(opt, function(err, res, body){
        if(err){
            console.log("***************[request error]*****************");
            console.log(err);
            console.log(body);
            resolve(err);
            return;
        }
        if(res && res.statusCode != 200){
            console.log("***************[response error]*****************");
            console.log(body);
            resolve(res);
            return;
        }
        resolve(body);
      })
    })

    let data = yield poxyReq

    this.body = data;
    yield next
  },
  fieUpdate: function *(next){
    var poxyReq = new Promise(function(resolve, reject){
      let captureGoal = 'http://fie.alibaba.net/api/plugin-search.do?v2=1';
      let opt = {
        url: captureGoal,
        json: true
      }
      request.get(opt, function(err, res, body){
        if(err){
            console.log("***************[request error]*****************");
            console.log(err);
            console.log(body);
            resolve(err);
            return;
        }
        if(res && res.statusCode != 200){
            console.log("***************[response error]*****************");
            console.log(body);
            resolve(res);
            return;
        }
        resolve(body);
      })
    })

    let data = yield poxyReq

    this.body = data;
    yield next
  }
}
