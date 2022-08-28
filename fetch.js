function loadData1()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

  /*
    FETCH API: The Fetch API is a modern interface that allows you to make HTTP request to servers from web browsers.

    fetch()//get the data from the url
    .then( res=>reas.json()) // converts the data to JSON object.
    .then(data =>consoloe.log(data))// Displays the JSON object

  */
