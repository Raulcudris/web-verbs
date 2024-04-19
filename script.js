document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById("generateButton");
  const verbDisplay = document.getElementById("verbDisplay");

  generateButton.addEventListener("click", function() {
    fetch("./verbs.json") // Reemplaza "ruta/al/archivo/verbs.json" con la ruta real de tu archivo JSON
      .then(response => response.json())
      .then(data => {
        const verbs = data.verbs;
        const randomVerb = getRandomVerb(verbs);
        displayVerb(randomVerb);
      })
      .catch(error => console.error("Error fetching verbs:", error));
  });

  function getRandomVerb(verbs) {
    return verbs[Math.floor(Math.random() * verbs.length)];
  }

  function displayVerb(verb) {
    verbDisplay.textContent = `${verb.TYPE} - ${verb.SIMPLE_FORM} -${verb.GERUND}`;
  }
});
