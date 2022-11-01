const queryVariables = window.location.search.substring(1)
const querySplit = queryVariables.split('&')
let format
let searchTerm
for (let i = 0; i < querySplit.length; i++) {
  const splitAgain = querySplit[i].split('=')
  if (splitAgain[0] === 'q') {
    searchTerm = splitAgain[1]
  }
  if (splitAgain[0] === 'format') {
    format = splitAgain[1]
  }
}
console.log("Format", format)
console.log("Search term", searchTerm)

async function submitHandler(e) {
  e.preventDefault()
  const url = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
  const result = await fetch(url)
  const data = await result.json()
  console.log(data)
}