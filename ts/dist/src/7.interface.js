var test = {
    name: 'test',
    age: 11,
    sex: '男',
    sayHello: function () {
        console.log('hello');
    }
};
var InterfaceClass = (function () {
    function InterfaceClass() {
    }
    InterfaceClass.prototype.sayHello = function () {
        console.log('hello');
    };
    return InterfaceClass;
}());
