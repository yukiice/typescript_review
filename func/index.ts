// type FuncOne = <T>(x:T)=>T[]
// interface ValueLength{
//     length:number
// }
// const funcOne:FuncOne =<T extends ValueLength>(x:T)=>{
//     if (typeof x === "string"){
//         return x.split('')
//     }else{
//         return  (x as number).toString().split("").map((item:string)=>Number(item))
//     }
// }
// console.log(funcOne<string>('123'))


type GetArray = <T>(arg:T,times:number)=>T[]  // type写法
interface GetArrayTwo{
    <T>(arg:T,times:number):T[]
} // 接口写法

let getArray:GetArrayTwo = <T>(arg:T, times:number)=>{
    return new Array(times).fill(arg)
}

console.log(getArray<number>(3,10))

