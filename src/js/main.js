function dog(){
    this.type = "SaMoye";
    this.name = "HH";
    this.color = "white";

    this.getName = function(){
        return this.name;
    };
    this.setName = function(name){
        this.name = name;
    };
   
}
let a = 1;
const b  =2;
var myDog = new dog();
myDog.setColor("white");
console.log(myDog.getColor());
