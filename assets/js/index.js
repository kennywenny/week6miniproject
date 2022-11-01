const searchTextBox = document.querySelector("#search_term")
const formatDropdown = document.querySelector("#format")
const submitButton = document.querySelector("button")

submitButton.addEventListener("click", submitHandler)

async function submitHandler(e) {
  e.preventDefault()
  const searchTerm = searchTextBox.value.trim()
  const format = formatDropdown.value
  const url = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
  const result = await fetch(url)
  const data = await result.json()
  console.log(data)
}
