"use strict"
const request = require('request');
const j = request.jar();
const reqwest = require('reqwest');
const path = require('path');

module.exports = {
  index: function *(next){

    this.render('index',{
      data: 'test'
    })
    yield next
  }
}
