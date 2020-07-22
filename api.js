fetch('/sample.txt')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("number").innerHTML = data;
  })