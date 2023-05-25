async function getUsers(setUsers) {
  fetch('http://localhost:5000/api/entities')
  .then(response => response.json())
  .then((data) => {setUsers(data)
  console.log(data)})
  }

  export {
    getUsers
  }