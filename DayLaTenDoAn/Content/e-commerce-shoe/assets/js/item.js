// Show alert "Add Success" when user click btn Add to Cart
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//Click button color
const btnColors = document.querySelectorAll('.btn-clicked');

btnColors.forEach(function(button) {
  button.addEventListener('click', function() {
    const isActive = this.classList.contains('btn-clicked');

    if (isActive) {
      this.classList.remove('btn-clicked');
      this.classList.add('border-dark');
    }
    else {
      this.classList.remove('border-dark');
      this.classList.add('btn-clicked');
    }
  });
});


//Click button size
const btnSizes = document.querySelectorAll('.btn-size-clicked');

btnSizes.forEach(function(button) {
  button.addEventListener('click', function() {
    const isActive = this.classList.contains('btn-size-clicked');

    if (isActive) {
      this.classList.remove('btn-size-clicked');
      this.classList.add('bg-dark', 'text-white');
    }
    else {
      this.classList.remove('bg-dark', 'text-white');
      this.classList.add('btn-size-clicked');
    }
  });
});



//Quantity button
const minus = document.querySelector("#quantity-count--minus")
const plus = document.querySelector("#quantity-count--add")
const input = document.querySelector(".quantity-number")

let quantity = 1
input.value = quantity

minus.addEventListener('click', () => {
    if(quantity <= 1) {
        minus.disabled = true
    }
    if(quantity > 1) {
        quantity--
        input.value = quantity
    }
})

plus.addEventListener('click', () => {
    quantity ++
    input.value = quantity
})