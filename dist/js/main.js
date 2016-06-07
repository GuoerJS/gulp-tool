"use strict";

function dog() {
    this.type = "SaMoye";
    this.name = "HH";
    this.color = "white";

    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
}
var a = 1;
var b = 2;
var myDog = new dog();
myDog.setColor("white");
console.log(myDog.getColor());