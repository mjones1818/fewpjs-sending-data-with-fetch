// Add your code here
let fetchUrl = 'http://localhost:3000/users'

function submitData (name,email) {
  let formData = {
    name: name,
    email: email
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  fetchUsers(configObj);
}

function fetchUsers (configObj) {
  fetch(fetchUrl, configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    return object
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  .catch(function (error){
    document.body.innerHTML = error.message
  })
}

