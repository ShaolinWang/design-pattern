// 通过new关键字法生成单例
function CreateSingle(name) {
  this.name = name;
}
CreateSingle.prototype.getName = function(){
  return this.name;
}
// 闭包将instance属性私有化
// 不用闭包？
// instance在全局命名空间容易被污染
var Single = (function(){
  var instance = null;
  return function(name){
    if(!instance){
      instance = new CreateSingle(name);
    }
    return instance;
  }
})();
var lee = new Single('lee');
var alis = new Single('alis');
console.log(lee.getName())
console.log(alis.getName())

console.log(Single('121').getName())