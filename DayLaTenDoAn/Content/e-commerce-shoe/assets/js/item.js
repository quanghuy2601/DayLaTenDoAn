// Show alert "Add Success" when user click btn Add to Cart
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//  
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