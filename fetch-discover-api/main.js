const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data =>  renderApiResult.textContent = JSON.stringify(data))
        .catch(err => console.log(err))
}

function getUser() {
    fetch(`${url}/18`)
        .then(response => response.json())
        .then(data =>  {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(err => console.log(err))
}

function addUser (newUser) {
    fetch(url, {
        method:"POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err => console.error(err))
}

function updateUser() {
    fetch(`${url}/1`, {
        method:"PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err => console.error(err))
}

const newUser = {
    name: "Gael Oliveira",
    avatar: "http://lorempixel.com/400/200",
    city: "Campina Grande"
}

const updatedUser = {
    name: "Weslley Olli",
    avatar: "https://picsum.photos/200/300",
    city: "Campina Grande" 
}

updateUser(updatedUser)

addUser(newUser)

 getUser()
 getUsers() 