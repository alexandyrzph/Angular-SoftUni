var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " say hello!");
    };
    return User;
}());
var user = new User('John Doe');
console.log(user.sayHello());
