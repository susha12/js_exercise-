
const block_1 = document.querySelector('#block');
const unblock_1 = document.querySelector('#unblock');
const someText = document.querySelector('#some_text');
someText.onclick = ()=>{
    someText.value = "";
}
block_1.onclick = ()=>{
    someText.disabled = true;
    someText.value = 'Disabled';
}
unblock_1.onclick = ()=>{
    someText.disabled = false;
    someText.value = 'Enabled';

}
const someBox = document.querySelector('#some_box');
someBox.onmouseover = ()=>{
    alert("Приветь");

}