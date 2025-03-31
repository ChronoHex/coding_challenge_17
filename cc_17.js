// task 1
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// example customer
const customer1 = new Customer("Richard Biggs", "Biggs@gmail.com");
customer1.addPurchase(120);
customer1.addPurchase(80);
console.log(`New customer: ${customer1.name}, Total spent: $${customer1.getTotalSpent()}`);