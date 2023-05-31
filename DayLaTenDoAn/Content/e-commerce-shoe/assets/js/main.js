
// Search
const clearInput = () => {
    const input = document.querySelector(".input-search")[0];
    input.value = "";
  }
  
  const clearBtn = document.querySelector("#clear-btn");
  // clearBtn.addEventListener("click", clearInput);


// Sort by
const sortBtn = document.querySelector("#sortButton")
const icon = document.querySelector("#sortIcon")

sortBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (icon.classList.contains("bi-chevron-down")) {
    icon.classList.remove("bi-chevron-down")
    icon.classList.add("bi-chevron-up")
  }
  else {
    icon.classList.remove("bi-chevron-up")
    icon.classList.add("bi-chevron-down")
  }
})

function updateSortOption (option) {
  sortBtn.innerHTML = 'Sort By: ' + option
}


// Click choose color
const colorFilter = document.querySelectorAll(".color-filter")
colorFilter.forEach(i => {
  i.addEventListener('click', e => {
    e.preventDefault();
    if(i.classList.contains("selected"))
      i.classList.remove("selected");
    else
      i.classList.add("selected");
  })
})