export class Timer {
    // public age: number;
    // public familyName: string;
    // public givenName: string;
    // constructor (familyName: string, givenName: string, age: number) {
    //     this.age = age;
    //     this.familyName = familyName;
    //     this.givenName = givenName;
    // }

    public startAt: Date;
    public finishAt: Date;
    public minute: number;
    public second: number;

    constructor (minute: number) {
        this.startAt = new Date(); 
        this.finishAt = new Date(); 
        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);

        this.minute = minute;
        this.second = 0;
    }
    
    // getClock(): string {
    //     return `${this.}:${this.minute}:${this.second}`;
    // }

    start(): void {
        setInterval(() => {
            let timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            let timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            // let now: Date = new Date();
            // timerMinuteElem.innerText = String(this.finishAt.getMinutes() - now.getMinutes());
            // timerSecondElem.innerText = String(this.finishAt.getSeconds() - now.getSeconds());
            if (this.minute == 0 && this.second==0 ){
                console.log('ofawwaw');
            } else if (this.second == 0){
                this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }

            timerMinuteElem.innerText = String(this.minute);
            timerSecondElem.innerText = String(this.second);
        },1000);
    }
}
