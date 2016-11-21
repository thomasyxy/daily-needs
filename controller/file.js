"use strict"
const path = require('path');
const fs = require('fs');
const parse = require('co-body');

module.exports = {
  create: function *(next){
    let post = yield parse(this.request);
    let filePath = path.resolve(__dirname, '../static/result') + '/' + post.type + '/' + post.name + '.' + post.type;
    let content = post.content;
    fs.open(filePath, 'w', function(err, fd){
      console.log(filePath)
      if(err){
        console.log(err)
        return
      }
      var writeBuffer = new Buffer(content),
          len = writeBuffer.length,
          offset = 0,
          filePosition = null;

      fs.writeSync(fd, writeBuffer, offset, len, filePosition, function(err, readByte){
        console.log('写数据总数：' + readByte + ' bytes');
      })
    })
    this.body = {
      success: post.name + '：上传成功'
    }
    yield next
  }
}
