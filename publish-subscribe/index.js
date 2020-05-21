function EventEmitter() {
  this.callbacks = {};
}

EventEmitter.prototype={
  on: function(event, callback){
    if(!this.callbacks[event]){
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(callback);
  },
  trigger: function(event){
    if(this.callbacks[event]){
      this.callbacks[event].forEach((callback)=>{
        callback();
      })
    }
  }
}


var ele = new EventEmitter();
ele.on('success',()=>{
  console.log('success')
})
ele.on('success',()=>{
  console.log('success2')
})
ele.on('fail',()=>{
  console.log('fail')
})
console.log('trigger success');
ele.trigger('success');

console.log('trigger fail');
ele.trigger('fail');
