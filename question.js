'use strict';

class  Question{
  constructor(content){
    this.content = content
  }

save(){
  this.constructor._All.push(this)
}

static All(){
  return this._All;
}
  
}