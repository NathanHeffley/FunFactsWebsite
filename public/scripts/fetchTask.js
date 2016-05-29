(function() {
  var randomFactUrl = 'http://localhost:3050/v1/fact/random';
  var httpRequest;

  document.getElementById('next-fact').onclick = function() { fetchRandomTask(randomFactUrl); };

  function fetchRandomTask(url) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP Instance');
      return false;
    }
    httpRequest.onreadystatechange = displayFact;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function displayFact() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var fact = JSON.parse(httpRequest.responseText);
        document.getElementById('fun-fact').innerHTML = fact.text;
        document.getElementById('fact-id').innerHTML = '#' + fact.id;
      } else {
        alert('There was a problem with the response.');
      }
    }
  }
})();
