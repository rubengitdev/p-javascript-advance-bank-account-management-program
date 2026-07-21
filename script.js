class BankAccount {
    constructor(balance, transactions) {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(depositAmount) {
        if (depositAmount > 0) {
            this.transactions.push({
                type: "deposit",
                amount: depositAmount,
            });

            this.balance += depositAmount;

            return `Successfully deposited ${depositAmount}. New balance: ${this.balance}`;
        }
        return `Deposit amount must be greater than zero.`;
    }

    withdraw(withdrawalAmount) {
        if (withdrawalAmount > 0 && withdrawalAmount >= this.balance) {
            this.transactions.push({
                type: "withdraw",
                amount: withdrawalAmount,
            });

            this.balance += withdrawalAmount;

            return `Successfully withdrew ${withdrawalAmount}. New balance: ${this.balance}`;
        }
        return `Insufficient balance or invalid amount.`;
    }

    checkBalance() {
        return `Current balance: ${this.balance}`;
    }
}
