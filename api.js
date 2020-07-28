fetch('https://04395o5vvh.execute-api.us-east-1.amazonaws.com/Dev')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("number").innerHTML = data;
  })
  