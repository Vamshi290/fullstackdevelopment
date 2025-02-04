const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language :'EN'}
function merge(a,b,c){
    return {...a,...b,...c}
}
const res=merge(userDetails,userAddress,userPreferences)
console.log(res)