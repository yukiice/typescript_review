class Person<T>{
    private readonly _name: T;
    constructor(name:T) {
        this._name = name;    // constructor内定义的方法和属性是实例对象自己的
    }
    public static say(){
        console.log("什么啊")  // 静态方法不需要童工实例对象，可以直接通过类来调用的方法，其中this指向类本身
    }
    public sayTwo(){
        console.log("?")      // 而constructor外定义的方法阿和属性是所有实例对象都可以共享的
    }
    set name(val:T){
        console.log(val)
    }
    get name(){
        return this._name
    }
}

console.log(typeof Person)
console.log(Person.prototype.constructor === Person)

let json = new Person("花花");
console.log(json.hasOwnProperty("_name"))
console.log(json.hasOwnProperty("say"))
console.log(json.hasOwnProperty("sayTwo"))
json.sayTwo()
json.name = "20"
console.log(json.name)


class NewPerson{
    protected name: string;
    constructor(name:string) {
        this.name = name;
    }
    private static getName(){
        console.log(this.name)
    }
}

class NewPersonOne extends NewPerson{
    constructor(name:string) {
        super(name);
        this.name = name;
    }
}

const newPTwo = new NewPersonOne("yukiice")
