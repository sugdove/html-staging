function fn(a) {
    return a;
}
var result = fn(1);
var result2 = fn('2');
function fn2(a, b) {
    console.log(b);
    return a;
}
var result3 = fn2(1, '2');
function fn3(a) {
    return a.age;
}
var result4 = fn3({ name: 'suge', age: 20 });
var Myclass = (function () {
    function Myclass(name) {
        this.name = name;
    }
    return Myclass;
}());
var mn = new Myclass('suge');
console.log(mn);
