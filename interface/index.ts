interface IOne{
    id:number,
    set:(e:string)=>void
}

const IOne:IOne={
    id:1,
    set:(e)=>{
        console.log(e)
    }
}
IOne.set("2");


interface Counter{
    ():void,
    count:number
}

const getCounter = ():Counter =>{
    const c = ()=>{c.count++}
    c.count = 0;
    return c;
}
const counter:Counter = getCounter();
Array(5).fill(0).map(()=>{
    counter()
    console.log(counter.count)
})

