var mainObj = pageData.option.properties;
var mainKeys = Object.keys(mainObj);

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
};

var DeleteProp = function DeleteProp(obj){
  this.obj = obj;
  if('descriptionCN' in obj){
    delete obj.descriptionCN;
  }
  for(tar in obj){
    if(isObject(obj[tar])){
      if(obj[tar] === 'data'){
        console.log(1)
      }
      this.deepDeleteProp(obj[tar])
    }
  }
};

DeleteProp.prototype.deepDeleteProp = function deepDeleteProp (obj) {
  // var keys = Object.keys(obj);
  // for(key in keys){
  //   if(keys[key] === 'data'){
  //     console.log(1)
  //   }
  //   deleteProp(obj[keys[key]]);
  // }
    deleteProp(obj);
};

function deleteProp(obj){
  if(isObject(obj)){
    new DeleteProp(obj)
  }
};

function updata(name, content, type){
  $.ajax({
    method: 'POST',
    url: "http://127.0.0.1:9000/file/create",
    data: {
      type: type || 'json',
      name: 'a',
      content: JSON.stringify('123')
    }
  }).done(function(res){
    console.log(res.success);
  })
};
updata();

mainKeys.map(function(key){
  deleteProp(mainObj[key]);
  // updata(key, mainObj[key]);
})
// deleteProp(mainObj['angleAxis']);
// updata('angleAxis', mainObj['angleAxis']);
