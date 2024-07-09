// Function to append clicked button value to display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
  let input = document.getElementById('display').value;
  
  try {
    let result = eval(input);
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Invalid input');
  }
}
