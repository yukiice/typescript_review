// class MOne{
//     x = 2;
//     y = 2;
//     constructor(x:number,y:number){
//         this.x = x;
//         this.y = y;
//         console.log(this.x,this.y);
//     }
//     getXAndY(){
//         return this.x + this.y;
//     }
//     static newMOne(){
//         return MOne.name;
//     }
//     set xValue(x:number){
//         this.x = x;
//     }
//     get xValue(){
//         return this.x;
//     }
// }
//
// const mOne = new MOne(1,1);
// console.log(mOne.getXAndY());
// console.log(mOne.xValue);
// mOne.xValue = 3;
// console.log(mOne.xValue);
// console.log(MOne.newMOne());



const func1 = Symbol('func2');
class MOne{
     x =2;
    constructor(){

    }
    [func1](){
        console.log('func1');
    }
    func2(){
        console.log('func2');
    }
}

const mOne = new MOne();
mOne[func1]()
mOne.func2()

class MTwo extends MOne{
    x:number = 0;
    constructor(){
        super();
        this.x = 1;
    }
    func3(){
        console.log(this.x)
        console.log('func3');
    }
}

const mTwo = new MTwo();
mTwo.func3();
