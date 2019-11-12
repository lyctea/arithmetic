var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
var user = new User('luo', 'yecong');
console.log(greeter(user));
