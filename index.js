//document.getElementById("count-el").innerText = 5;


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;
//listen for clicks on the increment button in html
//increment the count variable when the button is clicked (also log it out)
function increment() {
    count++;
    //now we can manipulate the element stored in countEl
    //change the count-el in the HTML to reflect the new count
    //countEl.innerText = count; 
    //using textContent as an alternative to innerText
    countEl.textContent = count;
}


function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    //also set the counter to zero when we hit save 
    count = 0;
    countEl.textContent = 0;
}
