/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.acc = balance;
  this.min = 1;
  this.max = balance.length + 1;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (
    account1 >= this.min &&
    account1 <= this.max &&
    account2 >= this.min &&
    account2 <= this.max
  ) {
    if (this.acc[account1 - 1] >= money) {
      this.acc[account1 - 1] = this.acc[account1 - 1] - money;
      this.acc[account2 - 1] = this.acc[account2 - 1] + money;
      return true;
    }

    return false;
  }
  return false;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (account >= this.min && account <= this.max) {
    this.acc[account - 1] = this.acc[account - 1] + money;
    return true;
  }
  return false;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (account >= this.min && account <= this.max) {
    if (this.acc[account - 1] >= money) {
      this.acc[account - 1] = this.acc[account - 1] - money;
      return true;
    }
    return false;
  }
  return false;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
