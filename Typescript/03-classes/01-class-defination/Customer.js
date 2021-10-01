var Customer = /** @class */ (function () {
    function Customer(thefirst, thelast) {
        this.firstname = thefirst;
        this.lastname = thelast;
    }
    return Customer;
}());
//lets creste instance of that class
var mycustomer = new Customer("Martin", "Dixon");
console.log(mycustomer.firstname);
console.log(mycustomer.lastname);
