let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
function increment(){
    console.log("The button was clicked");
    count = count + 1;
    countEl.innerText = count;
}
function save(){
    let CountStr = count + " - "
    saveEl.textContent += CountStr; 
    countEl.textContent = 0;
    count = 0;
}
