var Person = (function () {
    function Person() {
        this.name = '孙悟空';
        this.age = 18;
    }
    Person.prototype.sayHello = function () {
        console.log("hello, my name is ".concat(this.name));
    };
    Person.sex = '男';
    return Person;
}());
var p = new Person();
console.log(p.name);
console.log(p.age);
console.log(Person.sex);
p.sayHello();
var Person2 = (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.sayHello = function () {
        console.log("hello, my name is ".concat(this.name));
    };
    Person2.sex = '男';
    return Person2;
}());
var p2 = new Person2('suge', 18);
console.log(p2.name);
console.log(p2.age);
console.log(Person2.sex);
p2.sayHello();
