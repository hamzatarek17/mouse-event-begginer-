const mybox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "OUCH! 🤕";
}

myButton.addEventListener("click", changeColor);

myButton.addEventListener("mouseover", event => {
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don`t do it 😮";
});
myButton.addEventListener ("mouseout", event => {
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Click me 😃";
})