function addTodisplay(value){
    document.getElementById("display").value += value
}
function cleardisplay() {
    document.getElementById("display").value=""
}
function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression)
    document.getElementById("display").value = result
}