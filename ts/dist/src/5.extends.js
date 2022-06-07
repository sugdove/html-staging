var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.barking = function () {
        console.log("\u52A8\u7269\u5728\u53EB~");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, sex) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = sex;
        return _this;
    }
    Dog.prototype.barking = function () {
        console.log("\u6C6A\u6C6A\u6C6A~");
    };
    return Dog;
}(Animal));
var animal = new Animal('动物', 5);
var dog = new Dog('小白', 5, '男');
animal.barking();
dog.barking();
console.log(animal);
console.log(dog);
