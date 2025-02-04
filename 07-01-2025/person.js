var person={
    name:"vamshi",
    age:25,
    greet:function(){
        return `Hello welcome ${this.name}`
    },
    isAdult:function(){
        if(this.age>=18){
            return `Adult`
        }
        else{
            return `Not Adult`
        }
    }
}
console.log(person.name)
console.log(person.age)
console.log(person.greet())
console.log(person.isAdult())