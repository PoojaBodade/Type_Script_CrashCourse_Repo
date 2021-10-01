class Customer
{

   private _firstname:string;
    private _lastname:string;


    constructor(thefirst:string,thelast:string)
    {
        this._firstname = thefirst;
        this._lastname = thelast;
    }

    public get firstname(): string
    {

        return this._firstname;
    }

    public set firstname(value:string)
    {//no return type not even "void"
        this._firstname = value;
    }

    public get lastname(): string
    {
        return this._lastname;
    }

    public set lastname(value:string)
    {
        this._lastname = value;
    }
  

}
  //lets creste instance of that class
  let myCustomer = new Customer("Martin","Dixon");


  console.log(myCustomer.firstname);
  console.log(myCustomer.lastname);

  