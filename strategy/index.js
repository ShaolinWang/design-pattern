function Checker() {
  this.checkList = [];
  // Object.defineProperty(this, "checkList", {
  //   set() {
  //     let todayYear = new Date().getFullYear();
  //     return todayYear;
  //   }
  // });
}
// some check conditions
Checker.checkAge = function (age) {
  return age > 18;
}

Checker.prototype = {
  add: function (checkName, value) {
    this.checkList.push({ checkName, value });
  },
  check: (function(){
    // 这里的this指向全局环境  eg：window or node
    return function () {
      return !this.checkList.some((ck) => !Checker[ck.checkName].call(this, ck.value));
    }
  })(),
};

var checker = new Checker();

checker.add('checkAge', 19);
checker.add('checkAge', 20);

checker.check();

console.log(checker.check())
