let page = document.querySelector('body');

let button = document.querySelector('.myButton');
button.onclick = function() {
    console.log('detect');
    page.style["background-color"] = "hsl(182, 98%, 80%)";
};
let myButtonPink = document.querySelector('.myButtonPink');
myButtonPink.onclick = function() {
    console.log('detect');
    page.style["background-color"] = "hsl(318, 98%, 80%)";
};
let myButtonBack = document.querySelector('.myButtonBack');
myButtonBack.onclick = function() {
    console.log('detect');
    page.style["background-color"] = "white";
};
document.querySelector(".hello").addEventListener("click", function() {
    let message = document.getElementById("message").value
    alert("Здравствуй, " + message );
}, false);