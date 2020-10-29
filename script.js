// This function loads simpsonquotes data from the SimpsonQuotes API
function fetchSimpsonQuotesJSON() {
  // Feel free to download this HTML and edit it, to use another SimpsonQuotes ID
  // const simpsonquotesId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simpsonsQuotes) {
      console.log("data decoded from JSON:", simpsonsQuotes[0]);
      console.log("character:", simpsonsQuotes[0].character);

      // Build a block of HTML
      const simpsonsQuotesHtml = `
        <figure className="QuoteCard">
        <img
          src=${simpsonsQuotes[0].image}
          alt=${simpsonsQuotes[0].character}/>
        <figcaption>
          <blockquote>${simpsonsQuotes[0].quote}</blockquote>
          <cite>${simpsonsQuotes[0].character}</cite>
        </figcaption>
        </figure>`;

      document.querySelector("#simpsonsQuotes").innerHTML = simpsonsQuotesHtml;
    });
}

fetchSimpsonQuotesJSON();
