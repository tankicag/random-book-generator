//Random Book Generator

const bookDisplay = document.querySelector(".book-title");
const button = document.querySelector(".button");
const descriptionDisplay = document.querySelector(".discriptionDisplay");
const descriptionButton = document.querySelector(".descriptionButton");
const authorDisplay = document.querySelector(".authorDisplay");
const authorButton = document.querySelector(".authorButton");
const bookcoverColor = document.querySelector(".bookcover");
const ratingDisplay = document.querySelector("#rating");
const starsButton = document.querySelector(".starsButton");
const websiteDisplay = document.querySelector(".websiteDisplay");
const buyButton = document.querySelector(".buyButton");

function getBook() {
  fetch("https://my-first-books-api.herokuapp.com/books/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      bookcoverColor.style.backgroundColor = "#" + randomColor;
      const randomNumber = Math.random() * data.length;
      const randomInteger = Math.floor(randomNumber);

      const title = data[randomInteger].title;

      console.log(title);
      bookDisplay.innerHTML = title;

      function getDescription() {
        const description = data[randomInteger].description;
        console.log(description);
        descriptionDisplay.innerHTML = description;
      }
      descriptionButton.addEventListener("click", getDescription);

      function getAuthor() {
        const author = data[randomInteger].author;
        console.log(author);
        authorDisplay.innerHTML = author;
      }
      authorButton.addEventListener("click", getAuthor);

      function getRating() {
        let rating = data[randomInteger].details[0].reviews;
        console.log(rating);
        $("#rating").append(
          `<div class="rateit" data-rateit-value="${rating}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>`
        );
        $(".rateit").rateit();
        $(".rateit").hover(
          function () {
            $(this).append($(`<sup> ${rating}</sup>`));
          },
          function () {
            $(this).find("sup").last().remove();
          }
        );
      }
      starsButton.addEventListener("click", getRating);

      function getWebsite() {
        const website = data[randomInteger].web;
        console.log(website);

        websiteDisplay.innerHTML =
          "Where to buy: " + `<a href=${website}>${website}</a>`;
      }
      return buyButton.addEventListener("click", getWebsite);
    });
}

button.addEventListener("click", getBook);
