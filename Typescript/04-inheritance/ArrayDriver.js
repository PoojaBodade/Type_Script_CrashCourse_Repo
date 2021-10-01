"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myshape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myrectangle = new Rectangle_1.Rectangle(0, 0, 45, 44);
//declare array of shape that is initially empty
var theshape = [];
theshape.push(myshape);
theshape.push(myCircle);
theshape.push(myrectangle);
for (var _i = 0, theshape_1 = theshape; _i < theshape_1.length; _i++) {
    var tempShape = theshape_1[_i];
    console.log(tempShape.getInfo());
}
