let symbolOne = Symbol("name");
const infoOne = {
    [symbolOne]:"yukiice",
    name:'haha',
    age:18
}
console.log(infoOne[symbolOne])

infoOne[symbolOne] = "guagua"
console.log(infoOne[symbolOne]); 

for(const key in infoOne){
    console.log(key);
}


const a1 = Symbol.for("hauhua")
console.log(Symbol.keyFor(a1))

const a2 = {
    [Symbol.hasInstance] (obj:any){
        console.log(obj);
        
    }
}
const a3  ={a:"a"}
console.log(a3 instanceof <any>a2);


const a4 = ["1",'2',"3"]

const a5:any = [1,2,3]

console.log(a5[Symbol.isConcatSpreadable] )
// @ts-ignore
a5[Symbol.isConcatSpreadable] = false;
console.log(a5.concat(a4))

console.log(a5[Symbol.isConcatSpreadable] )

console.log('---------')

class a6 extends Array{
    constructor(arrayLength: number, number: number, number2: number) {
        super();
    }
    static  get [Symbol.species](){
        return Array
    }
}

const a7 = new a6(1,2,3);
const a77 = a7.map(a=>a*a)
console.log(a77 instanceof  a6)
console.log(a77 instanceof  Array)


const a8 = {
    [Symbol.match](string:string){
        console.log(string.length)
    },
    [Symbol.split](sting:string){
        console.log("split",sting.length)
    }
}

"abcdf".match(<RegExp>a8)
"abcdf".split(<any>a8)

console.log('--1--')
const a9 = {
    name:"花花",
    age:22,
    [Symbol.iterator]:function*(){
        yield this.name;
        yield this.age
    }
}




