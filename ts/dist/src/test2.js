var Interfacei1 = (function () {
    function Interfacei1() {
    }
    Interfacei1.prototype.sayHello = function () {
        console.log("hello! my name is ".concat(this.name));
    };
    return Interfacei1;
}());
