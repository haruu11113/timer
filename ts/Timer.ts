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
    public workTimer: NodeJS.Timer | null;

    constructor (minute: number) {
        this.startAt = new Date(); 
        this.finishAt = new Date(); 
        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);

        this.minute = minute;
        this.second = 0;
        this.workTimer = null;
    }
    
    // getClock(): string {
    //     return `${this.}:${this.minute}:${this.second}`;
    // }

    startWork(): void {
        this.workTimer = setInterval(() => {
            let timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            let timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            if (this.minute == 0 && this.second==0 ){
                console.log('ofawwaw');
                this.stopWork();
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

    stopWork(): void{
        if (this.workTimer) {
            clearInterval(this.workTimer);
        }
    }
}
