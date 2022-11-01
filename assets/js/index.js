const searchTextBox = document.querySelector("#search_term")
const formatDropdown = document.querySelector("#format")
const submitButton = document.querySelector("button")

submitButton.addEventListener("click", submitHandler)

function submitHandler(e) {
  e.preventDefault()
  const searchTerm = searchTextBox.value.trim()
  console.log(searchTerm)
}
