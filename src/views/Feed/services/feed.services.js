async function addPost(post){
  await fetch('http://localhost:5000/api/addPost', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
  .then(data => {console.log(data)})
}

export {
  addPost,
}