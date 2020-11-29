import { Timer } from "./Timer";

export enum stateList {
    INIT,
    WORKING,
    WORKED,
    BREAKING,
    BREAKED
}

export class State {
    public state: number;
    public timer: Timer;
    constructor () {
        this.state = stateList.INIT;
        this.timer = new Timer(25);
        this.updateView();
    }
    
    initState(): void {
        this.state = stateList.INIT;
        this.updateView();
    }
    
    updateState(): void {
        if (this.state == stateList.BREAKED) {
            this.state = stateList.WORKING;
        } else {
            this.state += 1
        }
        this.updateView();
    }

    private updateView(): void {
        this.timer.stopTimer();
        if (this.state == stateList.INIT){
            let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');
        } else if (this.state == stateList.WORKING) {
            let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');
            this.timer.startWork();

        } else if (this.state == stateList.WORKED) { 
            let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start break');

        } else if (this.state == stateList.BREAKING) {
            let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('breakMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'stop');
            this.timer.startBreak();

        } else if (this.state == stateList.BREAKED) {
            let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
            this.timer.setTimer(parseInt(minuteFormElem.value), 'start work');

        } else {
            console.log('は?');
        } 

        console.log(this.state);
    }
}
