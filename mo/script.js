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

        const li = document.createElement('div')
        li.classList.add('movie')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.Picturepath}">
        <div class="movie-info">
      <h3>${user.Name}</h3>
        </div>  
        `
        main.appendChild(li)

    })
}

function filterData(searchTerm) {
    listItems.filter(user => {
        const regex = new RegExp(`${searchTerm}`, 'gi');
        return user.reg.match(regex) || user.Name.match(regex) || user.School.match(regex);
    });

    if (user.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        user.classList.remove('movie')
    } else {
        user.classList.add('movie')
    }

};