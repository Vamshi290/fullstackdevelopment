function mul(num){
    return sub(num*2)
}
function sub(num){
    return add(num-3)
}
function add(num){
    return num+10
}
let res=mul(10)
console.log(res)