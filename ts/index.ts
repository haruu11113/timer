// import UUID from "uuid";
import { Timer } from "./Timer";

// const contentsElem = document.getElementById('contents');

// function showClock(): void {
//     if(!!contentsElem) {
//         contentsElem.innerText = `${timer.hour} ${timer.minute} ${timer.second}`;
//     }
// }

// HTMLエレメントを取得 キャストすることで、入力補完が効く
// const saibanButton = document.getElementById('timer') as HTMLButtonElement;
// const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
// ボタンのクリックイベントを追加
// saibanButton.onclick = (e) => {
//     uuidSpan.innerText = UUID.v4();
// }


// const timer: Timer = new Timer();
// const contentsElem: HTMLInputElement = <HTMLInputElement>document.getElementById('contents');
// setInterval(() => {
//     let timer: Timer = new Timer();
//     let contentsElem: HTMLInputElement = <HTMLInputElement>document.getElementById('clock');
//     contentsElem.innerText = timer.getClock(); 
// },1000);


var startbutton: HTMLInputElement = <HTMLInputElement>document.getElementById("start");
startbutton.addEventListener('click', () => {
    let timerElem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');
    let minuteFormElem: HTMLInputElement = <HTMLInputElement>document.getElementById('workMinute');
    let timer: Timer = new Timer(parseInt(minuteFormElem.value));
    timer.startWork();
    timerElem.innerText = String(timer.finishAt.getHours()) + ' : ' + String(timer.finishAt.getMinutes()) + ' : ' + String(timer.finishAt.getSeconds());

});

