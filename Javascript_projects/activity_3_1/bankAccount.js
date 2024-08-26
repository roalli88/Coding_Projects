class BankAccount{
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amt){
        this.balance += amt;
        console.log(`${this.accountHolder} deposited £${amt}. Current balance is ${this.balance}`);
    }
    withDraw(amt){
        //Check that there is sufficient funds in the account before any withdrawal
        if (amt > this.balance) {
            console.log(`${this.accountHolder} has insufficient funds.`);
        }
        else{
            this.balance -= amt;
            console.log(`${this.accountHolder} withdrew £${amt}. Current balance is £${this.balance}`);
        }
    }
    checkBalance(){
        console.log(`${this.accountHolder}'s current balance is £${this.balance}`);
    }
}


export default BankAccount;

