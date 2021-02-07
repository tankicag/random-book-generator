//Random Book Generator

const bookDisplay = document.querySelector(".book-title");
const button = document.querySelector(".button");

function getBook() {
  fetch("https://my-first-books-api.herokuapp.com/books/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const randomNumber = Math.random() * data.length;
      const randomInteger = Math.floor(randomNumber);

      const title = data[randomInteger].title;
      console.log(title);
      bookDisplay.innerHTML = title;
    });
}

button.addEventListener("click", getBook);
