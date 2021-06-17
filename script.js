const table = document.getElementsByTagName('table')

function makeRow () {
  const tr = document.createElement('tr')
  table[0].appendChild(tr)
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td')
    tr.appendChild(td)
  }
}

const button = document.getElementById('add-row')

button.addEventListener('click', makeRow)

