async function submitHandler(e) {
  e.preventDefault()
  const url = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
  const result = await fetch(url)
  const data = await result.json()
  console.log(data)
}