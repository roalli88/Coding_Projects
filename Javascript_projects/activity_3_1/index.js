import BankAccount  from "./bankAccount.js";

let customer1 = new BankAccount(143213, "Jane Doe", 100);
let customer2 = new BankAccount(123323, "Jack Doe", 200);

//Deposit money
customer1.deposit(200);
customer2.deposit(400);

//Withdraw money
customer1.withDraw(220);
customer2.withDraw(150);

//Check balance
customer1.checkBalance();
customer2.checkBalance();

//Check for withdrawing more than the available balance
customer1.withDraw(10000);
customer2.withDraw(4000);
