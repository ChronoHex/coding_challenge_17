// task 1
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    } // constructor for customer class

    addPurchase(amount) {
        this.purchaseHistory.push(amount); // add purchase to purchase history
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // calculate total spent by customer
    }
}

// example customer for task 1
const customer1 = new Customer("Richard Biggs", "Biggs@gmail.com");
customer1.addPurchase(120);
customer1.addPurchase(80);
console.log(`New customer: ${customer1.name}, Total spent: $${customer1.getTotalSpent()}`);

// task 2
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    } // constructor for sales rep class

    addClient(customer) {
        this.clients.push(customer); // adding clients to sales rep
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name); // find client by name
        return client ? client.getTotalSpent() : 0; // return total spent by client
    }
}

// example for task 2
const salesRep1 = new SalesRep("Geraldine Smith");
salesRep1.addClient(customer1);

console.log(`Sales rep: ${salesRep1.name}, Client: ${customer1.name}, Total spent: $${salesRep1.getClientTotal("Richard Biggs")}`);

// task 3
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; // VIP level of customer
    }; // constructor for VIP customer class

    getTotalSpent() {
        const totalSpent = super.getTotalSpent(); // get total spent from parent class
        return totalSpent + (totalSpent * 0.10); // 10% loyalty bonus
    }
}

// Example usage of VIPCustomer:
const vipCustomer = new VIPCustomer("Joe Smoe", "joe@gmail.com", "Platinum");
vipCustomer.addPurchase(200);
vipCustomer.addPurchase(300);
console.log(`VIP customer: ${vipCustomer.name}, Total spent with bonus: $${vipCustomer.getTotalSpent()}`);

// task 4
const customer2 = new Customer("Emma Brown", "emma@gmail.com");
customer2.addPurchase(600);
customer2.addPurchase(100);

const customer3 = new VIPCustomer("Mark Taylor", "mark@gmail.com", "Gold");
customer3.addPurchase(400);

salesRep1.addClient(customer2);
salesRep1.addClient(customer3);

const allCustomers = [customer1, customer2, customer3, vipCustomer];

// Total revenue from all customers
const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total revenue: $${totalRevenue}`);

// Customers who spent over $500
const highSpendingCustomers = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-spending customers:", highSpendingCustomers.map(c => c.name));

// Array of customer names and their total spent
const customerSummary = allCustomers.map(customer => ({
    name: customer.name,
    totalSpent: customer.getTotalSpent()
}));
console.log("Customer Summary:", customerSummary);