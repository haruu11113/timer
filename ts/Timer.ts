export class Timer {
    // public startAt: Date;
    public finishAt: Date;
    public minute: number;
    public second: number;
    public timerInterval: NodeJS.Timer | null;

    constructor (minute: number) {
        // this.startAt = new Date(); 
        this.finishAt = new Date(); 
        this.finishAt.setMinutes(this.finishAt.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
        this.timerInterval = null;
    }

    updateFinishAt(minute: number): void{
        let now: Date = new Date();
        this.finishAt.setMinutes(now.getMinutes() + minute);
        this.minute = minute;
        this.second = 0;
    }

    startWork(): void {
        this.timerInterval = setInterval(() => {
            let timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            let timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            if (this.minute == 0 && this.second==0 ){
                this.stopTimer();
                alert('Break!!!')
            } else if (this.second == 0){
                this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }

            timerMinuteElem.innerText = String(this.minute);
            timerSecondElem.innerText = ' : ' + String(this.second);
        },1000);
    }

    startBreak(): void {
        this.timerInterval = setInterval(() => {
            let timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
            let timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');

            if (this.minute == 0 && this.second==0 ){
                this.stopTimer();
                alert('Break!!!')
            } else if (this.second == 0){
                this.minute -= 1;
                this.second = 59;
            }else {
                this.second -= 1;
            }

            timerMinuteElem.innerText = String(this.minute);
            timerSecondElem.innerText = ' : ' + String(this.second);
        },1000);

    }

    stopTimer(): void{
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    setTimer(minute: number, stateName: string): void {
        console.log('settimer');
        let startButtonElem: HTMLElement = <HTMLElement>document.getElementById('startButton');
        startButtonElem.innerText = stateName;

        this.updateFinishAt(minute);

        let timerElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');
        timerElem.innerText = String(this.finishAt.getHours()) + ' : ' + String(this.finishAt.getMinutes()) + ' : ' + String(this.finishAt.getSeconds());

        let timerMinuteElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerMinute');
        let timerSecondElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timerSecond');
        timerMinuteElem.innerText = String(this.minute);
        timerSecondElem.innerText = ' : ' + String(this.second);
    }
}
