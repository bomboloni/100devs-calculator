document.querySelector('#clears').addEventListener('click', clearDisplay)

// set up click events for each number
// those will call functions that push the digit to an array and puts it in the readout's innertext

//pushing an operator button will store the preceeding array, store the operator  in another variable and clear the display

//clicking equals will resolve  the equation and put the result into the display

function clearDisplay() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
