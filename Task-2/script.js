function press(value){
    let prev = document.getElementById("display")
    prev.value+=value
    console.log(prev.value)
}
function calculate() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}
function clearDisplay(){
    let prev = document.getElementById("display")
    prev.value = ""
}