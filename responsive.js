function loadData() {
  const requestURL = "https://api.nasa.gov/planetary/apod?api_key=alvT7Q4UeeW7A0ExC8RmubJTfOCNL3dROynshEeu";
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var response = request.response;
    document.getElementById("space_image").src = response['hdurl'];
    document.getElementById("title").innerHTML = response['title'];
    document.getElementById("date").innerHTML = response['date'];
    document.getElementById("explanation").innerHTML = response['explanation'];
  }
}

function redirect() {
  window.location.href = "https://apod.nasa.gov/apod/astropix.html";
}
