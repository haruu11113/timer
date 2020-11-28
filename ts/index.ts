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
setInterval(() => {
    const timer: Timer = new Timer();
    const contentsElem: HTMLInputElement = <HTMLInputElement>document.getElementById('contents');
    contentsElem.innerText = `${timer.hour} ${timer.minute} ${timer.second}`;
},1000);
