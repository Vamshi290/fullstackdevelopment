function greet(name,callback){
    const mes=`Hello, ${name}`
    return callback(mes)
}
function print(mes){
    console.log(mes)   
}
greet('Vamshi',print)