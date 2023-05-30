async function loginUser(usuario){
  return await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173'
    },
    body: JSON.stringify(usuario)
  }).then(res => {return res.json()})
  .then(data => {
    return(data)})
}

export {
  loginUser,
}