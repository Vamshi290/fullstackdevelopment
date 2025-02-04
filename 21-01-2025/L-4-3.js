function delayedMessage(message,delay,callback){
    setTimeout(()=>{
        console.log(message)
        callback()
    },delay)
}
function print(){
    console.log("message is printed")
}
delayedMessage("print hello after 2 sec",2000,print)
