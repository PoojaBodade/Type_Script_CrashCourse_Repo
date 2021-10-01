import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myshape = new Shape(10,15);

let myCircle = new Circle(5,10,20);

let myrectangle = new Rectangle(0,0,45,44);
//declare array of shape that is initially empty
let theshape:Shape[]= [];

theshape.push(myshape);
theshape.push(myCircle);
theshape.push(myrectangle);



for(let tempShape of theshape){
    console.log(tempShape.getInfo());
}