// 通过指定的静态方法生成单例
// 不用闭包
function Single (name){
  this.name = name;
}

  Single.prototype.getName = function(){
    return this.name;
  }
  Single.getInstance = function(name){
    if(!this.instance){
      this.instance = new Single(name);
    }
    return this.instance;
  }


var lee = Single.getInstance('lee');
var alis = Single.getInstance('alis');
console.log(lee.getName())
console.log(alis.getName())