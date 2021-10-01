"use strict";
var Customer = /** @class */ (function () {
    function Customer(thefirst, thelast) {
        this._firstname = thefirst;
        this._lastname = thelast;
    }
    Object.defineProperty(Customer.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//lets creste instance of that class
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
