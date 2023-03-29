const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
         apiResult.textContent =  JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, )
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function updateUser(id) {
    axios.put(url, id)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}
updateUser(3)

getUsers()

const newUser = {
    name: 'Weslley Olli',
    avatar: "https://picsum.photos/200/300",
    city: "Campina grande"
}

//addNewUser(newUser)