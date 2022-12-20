let n:number = 10
const s:string = 'Lorem' 
const tf:boolean = true
const nul:null = null
let undef: undefined | null | number

let st:"lorem" | "Ipsum" | "Ammet" = "lorem"
const arr:(number | string)[] = [1, 2 , 3, 4, 'Lorem']
const tp:[string, number, string] = ['Lorem', 1, 'Ipsum']
enum venum{
    q, w, i = 'i'
}
console.log(venum)
let a:any
function func(c:number, b:string): string{
return c + b
}
console.log(func(1, 'lorem'))