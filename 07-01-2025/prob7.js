const person = {name: 'Alice', address: {street: '123 Main St',
    city: 'Los Angeles', zip: '90001'}, age: 25};
let{address:{street,city}}=person
console.log(street,city)
