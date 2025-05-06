// type Arr = [];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bankAccount = /** @class */ (function () {
    function bankAccount(startBalance, name) {
        // private transferHistory: Object = {
        //     history: []
        // };
        this.transferHistory = { history: [] };
        this.name = name;
        if (startBalance) {
            this.balance = startBalance;
        }
        else
            this.balance = 0;
    }
    bankAccount.prototype.transferMoney = function (user, value) {
        if ((this.balance - value) >= 0) {
            this.balance -= value;
            user.takeMoney(value);
            var logMessage = this.name + " has send " + value + "$ to " + user.getName();
            console.log(logMessage);
            this.transferHistory.history.push(logMessage);
        }
    };
    bankAccount.prototype.takeMoney = function (value) {
        this.balance += value;
    };
    bankAccount.prototype.showMoney = function () {
        console.log(this.name + " has " + this.balance + "$");
    };
    bankAccount.prototype.getName = function () {
        return this.name;
    };
    bankAccount.prototype.pushHistory = function (value) {
        //    this.transferHistory.push(value); //Argument of type 'string' is not assignable to parameter of type 'never'
    };
    /**
     * getInfo
     */
    bankAccount.prototype.getInfo = function () {
        return [this.name, this.balance, this.transferHistory];
    };
    bankAccount.prototype.getLast = function () {
        return [this.name, this.balance, this.transferHistory.history.slice(-1)[0]];
    };
    return bankAccount;
}());
var vipcard = /** @class */ (function (_super) {
    __extends(vipcard, _super);
    function vipcard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return vipcard;
}(bankAccount));
var user1 = new bankAccount(1000, "user1");
var user2 = new bankAccount(0, "progamer33");
user1.showMoney();
user2.showMoney();
user1.transferMoney(user2, 700);
user1.showMoney();
user2.showMoney();
var userdata = user2.getInfo();
console.log(userdata);
var ourTuple;
ourTuple = user1.getLast();
console.log(ourTuple.join(' '));
// ourTuple = ["name",600,"g1 to g2 600$"];
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
// let json: string = JSON.parse("55");
// console.log(typeof json);
