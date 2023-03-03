
let container = document.querySelector('.container')
let limit = 10
function getData() {
fetch(`https://hp-api.onrender.com/api/characters?`)
.then(res => res.json())
.then(res => {
    res.forEach(item => {
        item.image !== '' ? 
        container.innerHTML += `
        <div  class='card' key='${item.id}'>
        <h4 class = "title">${item.name}</h4>
        <img alt = "" height = "200px" width = "140px" src='${item.image}'>
        <h5 class = "gender" >${item.gender}</h5>
        <p class ="birth-day">${item.dateOfBirth}</p>
        <p lass = "actor">actor: ${item.actor}</p>
        </div>
        `:'<div></div>'
    })
})
}
getData()
