var Person3 = (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    Person3.prototype.getAge = function () {
        return this.age;
    };
    Person3.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return Person3;
}());
var p3 = new Person3('suge', 28);
p3.setAge(-12);
console.log(p3.getAge());
