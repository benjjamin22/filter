const search = document.getElementById('search');
const main = document.getElementById('main');
const form = document.getElementById('form')
url = 'https://mydatabase.com.ng/css/database.notes.json'

const listItems = []

getData()

search.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(url)

    const { nuasa } = await res.json()

    // Clear result
    main.innerHTML = ''

    nuasa.forEach(user => {
        const div = document.createElement('div')
        listItems.push(div)
        div.innerHTML = `
        <div class="movie">
        <img src="${user.Picturepath}">
        <div class="movie-info">
      <h3>${user.Name}</h3>
      <span>${user.Validity}</span>
        </div></div> 
        `
        main.appendChild(div)

    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}