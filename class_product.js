// Class

class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }

    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price.toFixed(2)} euros`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.19

const product1 = new Product("gucci shirt",150)
const product2 = new Product("pants",25.5)
const product3 = new Product("underwear",60)

product1.displayProduct()   // product: gucci shirt
                            // price: 150.00 euros

product2.displayProduct()   // product: pants
                            // price: 25.50 euros

product3.displayProduct()   // product: underwear
                            // price: 60.00 euros

const total = product1.calculateTotal(salesTax)
console.log(`total price (with tax): ${total.toFixed(2)} euros`)    // total price (with tax): 178.50 euros
