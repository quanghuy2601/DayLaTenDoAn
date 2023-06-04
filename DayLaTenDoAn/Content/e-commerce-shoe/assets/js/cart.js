const minusButtons = document.querySelectorAll(".quantity-count--minus");
const plusButtons = document.querySelectorAll(".quantity-count--add");
const inputFields = document.querySelectorAll(".quantity-number");

// Initialize quantities for each item
const quantities = Array.from(inputFields).map(() => 1);

// Set initial values for input fields
inputFields.forEach((input, index) => {
  input.value = quantities[index];
});

// Add click event listeners for minus buttons
minusButtons.forEach((minus, index) => {
  minus.addEventListener('click', () => {
    if (quantities[index] <= 1) {
      minus.disabled = true;
    }
    if (quantities[index] > 1) {
      quantities[index]--;
      inputFields[index].value = quantities[index];
    }
  });
});

// Add click event listeners for plus buttons
plusButtons.forEach((plus, index) => {
  plus.addEventListener('click', () => {
    quantities[index]++;
    inputFields[index].value = quantities[index];
    minusButtons[index].disabled = false;
  });
});
