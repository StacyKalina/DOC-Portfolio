const siteHeader = document.getElementById("site-header");
console.log(siteHeader);

// fetch("./components/header.html").then((response) => {
//   console.log(response);
// });

const request = fetch("./components/header.html");

console.log(request);

request
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    siteHeader.innerHTML = html;
    initHeader();
    console.log(html);
  });
