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

//Increase quantity
// const quantityInput = (function () {
//     const quantityInput = $(".quantity-input")
//     if(!quantityInput.length) {
//         return;
//     }

//     const inputs = quantityInput.find(".quantity-number")
//     const countBtn = quantityInput.find(".quantity-count")
//     const quantityMin = parseInt(inputs.attr("min"))
//     const quantityMax = parseInt(inputs.attr("max"))

//     inputs.change( function() {
//         const _this = $(this)
//         const minusBtn = _this.siblings(".quantity-count--minus")
//         const addBtn = _this.siblings(".quantity-count--add")
//         const quantity = parseInt(_this.val())

//         if (isNaN(quantity) || quantity <= quantityMin) {
//             _this.val(quantityMin)
//             minusBtn.attr("disabled", true)
//         }
//         else {
//             minusBtn.attr("disabled", false)

//             if(quantity >= quantityMax) {
//                 _this.val(quantityMax)
//                 addBtn.attr("disabled", true)
//             }
//             else {
//                 _this.val(quantity)
//                 addBtn.attr("disabled", false)
//             }
//         }
//     })

//     countBtn.click(function() {
//         const operator = this.dataset.action
//         const _this = $(this)
//         const inputs = _this.siblings(".quantity-number")
//         const quantity = parseInt(inputs.val())

//         if (operator == "add") {
//             quantity += 1
//             if(quantity >= quantityMin + 1) {
//                 _this.siblings(".quantity-count--minus").attr("disabled", false)
//             }
//             if(quantity >= quantityMax) {
//                 _this.attr("disabled", true)
//             }
//             else {
//                 quantity = quantity <= quantityMin ? quantityMin : (quantity - 1)
//                 if(quantity == quantityMin) {
//                     _this.attr("disabled", true)
//                 }
//                 if(quantity < quantityMax) {
//                     _this.siblings("quantity--count--add").attr("disabled", false)
//                 }
//             }
//             inputs.val(quantity)

//         }
//     })
// })

// ()