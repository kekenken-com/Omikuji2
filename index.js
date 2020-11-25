// 1.配列を利用
const results = ['大厄災','凶','吉','小吉','中吉','大吉'];

// 2.if文を利用したやり方
const $button = document.getElementById('js-button');  

const resultsLength = results.length;
let rnd = Math.floor(Math.random() * resultsLength);
function js_alert() {

    // 1.配列を活用
    alert(results[rnd]);
    $button.textContent = results[rnd];

    // 2.if文活用

    // if (rnd === 0) {
    //     alert('大厄災')
    // } else if (rnd === 1) {
    //     alert('凶')
    // } else if (rnd === 2) {
    //     alert('吉')
    // } else if (rnd === 3) {
    //     alert('小吉')
    // } else if (rnd === 4) {
    //     alert('中吉')
    // } else if (rnd === 5) {
    //     alert('大吉')
    // }
}

