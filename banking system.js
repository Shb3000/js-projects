class BankAccount {
  #balance = 0; // private field: can't be changed from outside

  constructor(owner, initialDeposit = 0) {
    this.owner = owner;
    this.#balance = initialDeposit;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit must be positive.");
      return;
    }
    this.#balance += amount;
    this.transactions.push({ type: "deposit", amount });
    console.log(`${this.owner} deposited $${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.#balance -= amount;
    this.transactions.push({ type: "withdraw", amount });
    console.log(`${this.owner} withdrew $${amount}`);
  }

  get balance() {
    return this.#balance;
  }

  printStatement() {
    console.log(`--- Statement for ${this.owner} ---`);
    this.transactions.forEach((t, i) => {
      console.log(`${i + 1}. ${t.type}: $${t.amount}`);
    });
    console.log(`Balance: $${this.#balance}`);
  }
}

// Test it
const account = new BankAccount("Sara", 100);
account.deposit(50);
account.withdraw(30);
account.withdraw(500); // should fail
account.printStatement();
console.log(account.balance); // 120
// account.#balance = 999;  // SyntaxError: private field
