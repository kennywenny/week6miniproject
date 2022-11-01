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

search(searchTerm, format)

async function search(searchTerm, format) {
  const url = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
  const result = await fetch(url)
  const data = await result.json()
  console.log(data)
  const results = data.results
  for (let i = 0; i < results.length; i++) {
    const result = results[i]
    const listElement = document.createElement('ul')
    Object.keys(result)
      .map(it => {
        const listItemElement = document.createElement('li')
        listItemElement.textContent = `${it}: ${results[it]}`
        listElement.appendChild(listItemElement)
      })
    document.querySelector('#cards').appendChild(listElement)
  }
}

/*
  {
      "image": "/static/collections/rochambeau-maps/images/ar110600.jpg",
      "title": "Plan de New-York et des environs, levé par Montrésor, ingénieur en 1775.",
      "url": "/item/gm71000988"
    },
  */