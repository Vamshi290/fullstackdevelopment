const product = {id: 101, name: 'Laptop', price: 1000, category: 
    'Electronics'}
function update(product){
    let {id,name}=product
    let c={id,name}
    return {...c,discount: 10, inStock: true}
}
console.log(update(product))