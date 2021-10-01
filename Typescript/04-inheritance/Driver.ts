import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myshape = new Shape(10,15);
console.log(myshape.getInfo());

let myCircle = new Circle(5,10,20);
    console.log(myCircle.getInfo());

let myrectangle = new Rectangle(0,0,45,44);
console.log(myrectangle.getInfo());
