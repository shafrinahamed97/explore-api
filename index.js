function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers2(data))
}

function displayUsers2(data)
{
//   for (const user of data){
//     console.log(user);
//   }
  const ul = document.getElementById('users-list');
  for(const user of data){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

/*
     PUT VS POST VS PATCH

     PUT: Create a new resource or replace if the resource exists.

     POST: Create a new resources.

     PATCH: Partially update an existing resource.

*/

/*
       HTTP STASUS CODE
      
      Code---------Message
      200          ok
      301          Moved Permenetly
      302          Moved Temparetely
      404          Not Found
      500          Internal Server Error
      503          Service Unavailable

       

*/