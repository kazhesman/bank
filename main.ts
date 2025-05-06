// type Arr = [];

class bankAccount {
    private balance: number;
    private name: string;
    // private transferHistory: Object = {
    //     history: []
    // };
    private transferHistory: { history: string[] } = { history: [] };
    constructor(startBalance: number, name: string) {
        this.name = name;
        if(startBalance) {
            this.balance = startBalance;
        }
        else this.balance = 0;
        
    }
    public transferMoney(user: any, value: number): void {
        if ((this.balance - value) >= 0) {
            this.balance -= value;
            user.takeMoney(value);
            const logMessage = this.name + " has send " + value + "$ to " + user.getName();
            console.log(logMessage);
            this.transferHistory.history.push(logMessage);

    }
}
    private takeMoney(value: number): void {
        this.balance += value;
}
    public showMoney(): void {
        console.log(this.name +" has " + this.balance + "$");

    }
    public getName(): string {
        return this.name;
    }
    private pushHistory (value: string): void {
    //    this.transferHistory.push(value); //Argument of type 'string' is not assignable to parameter of type 'never'
    }
    /**
     * getInfo
     */
    public getInfo(): any[] {
        return [this.name, this.balance, this.transferHistory];
        
    }
    public getLast(): [string, number, string] {
        return [this.name, this.balance, this.transferHistory.history.slice(-1)[0]]
    }
}
class vipcard extends bankAccount {
    
}
const user1 = new bankAccount(1000, "user1");
const user2 = new bankAccount(0, "progamer33");
user1.showMoney();
user2.showMoney();
user1.transferMoney(user2, 700);
user1.showMoney();
user2.showMoney();

const userdata: readonly string[] = user2.getInfo();
console.log(userdata);


let ourTuple: readonly [string, number, string];
ourTuple = user1.getLast();
console.log(ourTuple.join(' '));
// ourTuple = ["name",600,"g1 to g2 600$"];
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
// let json: string = JSON.parse("55");

// console.log(typeof json);
