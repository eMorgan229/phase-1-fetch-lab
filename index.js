function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  //include a fetch request to GOT API
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json()) //returned response is converted in JSON
  .then((json) =>    renderBooks(json)); //prints new JSON to console and WE CHANGE THIS TO APPEND TO DOM??
  

  //then it should call the second function, renderBooks and pass in the JSON-ified data as the argument
  //return fetch() in order for the test to pass
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
