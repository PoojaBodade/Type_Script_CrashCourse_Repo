class Customer{

    firstname:string;
    lastname:string;


    constructor(thefirst:string,thelast:string){
        this.firstname = thefirst;
        this.lastname = thelast;
    }

}


//lets creste instance of that class
let mycustomer = new Customer("Martin","Dixon");


console.log(mycustomer.firstname);
console.log(mycustomer.lastname);