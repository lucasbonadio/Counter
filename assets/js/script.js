var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if(currentNumber <= 0) {
        return
    } else {
        currentNumber--;
    }    
    currentNumberWrapper.innerHTML = currentNumber;
}
