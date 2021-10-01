class gettersetter{

    private _firstname:string;
    private _lastname:string;

constructor(thefirst:string,thelast:string){
    this._firstname =thefirst;
    this._lastname = thelast;
}


public get firstname(): string{

   return this._firstname;
}

public set firstname(thefirst:string){

    this._firstname = thefirst;

}

public get latname(): string{

    return this._lastname;
 }
 
 public set lastname(thefirst:string){
 
     this._lastname = thefirst;
 
 }
 

}