

const url = "http://localhost:5500/api"

function getUser() {
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

getUser()

const newUser = {
    name: 'Weslley Olli',
    avatar: "https://picsum.photos/200/300",
    city: "Campina grande"
}

addNewUser(newUser)