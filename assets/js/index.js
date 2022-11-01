const searchTextBox = document.querySelector("#search_term")
const formatDropdown = document.querySelector("#format")
const submitButton = document.querySelector("button")

submitButton.addEventListener("click", submitHandler)

function submitHandler(e) {
  e.preventDefault()
  const searchTerm = searchTextBox.value.trim()
  const format = formatDropdown.value
  window.location = `./search-results.html?q=${searchTerm}&format=${format}`
}
