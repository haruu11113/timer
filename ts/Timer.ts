export class Timer {
    // public age: number;
    // public familyName: string;
    // public givenName: string;
    // constructor (familyName: string, givenName: string, age: number) {
    //     this.age = age;
    //     this.familyName = familyName;
    //     this.givenName = givenName;
    // }

    public today:Date;
    public month:number;
    public date:number;
    public hour:number;
    public minute:number;
    public second:number;

    constructor () {
        this.today = new Date(); 
        this.month = this.today.getMonth();
        this.date = this.today.getDate();
        this.hour = this.today.getHours();
        this.minute = this.today.getMinutes();
        this.second = this.today.getSeconds();
    }
    
    showClock(): void {
        let contentsElem: HTMLInputElement = <HTMLInputElement>document.getElementById('contents');
        contentsElem.innerText = `${this.hour} ${this.minute} ${this.second}`;
    }
    // function getTime(): number {
    //     return this.date;
    // }
}
