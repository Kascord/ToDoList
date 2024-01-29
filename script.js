function ajouterElement() {
    // Récupérer la valeur de l'input
    var nouvelElement = document.getElementById("inputItem").value;

    // Vérifier si la valeur n'est pas vide
    if (nouvelElement.trim() !== "") {
        // Créer un nouvel élément de liste
        var nouvelleListe = document.createElement("li");

        // Créer une checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                traiterElement(nouvelleListe);
            }
        });

        // Ajouter la checkbox à l'élément de liste
        nouvelleListe.appendChild(checkbox);

        // Ajouter la valeur de l'input à l'élément de liste
        var spanElement = document.createElement("span");
        spanElement.innerText = nouvelElement;
        nouvelleListe.appendChild(spanElement);

        // Ajouter l'élément de liste à la liste existante
        document.getElementById("elementList").appendChild(nouvelleListe);

        // Effacer le contenu de l'input
        document.getElementById("inputItem").value = "";
    }
}

function traiterElement(element) {
    // Ajouter une classe pour déclencher l'animation de trait
    element.classList.add("trait-animation");

    // Suppression de l'élément après l'animation
    setTimeout(function() {
        element.remove();
    }, 300); // Ajustez la durée de l'animation ici si nécessaire
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker enregistré avec succès:', registration);
      })
      .catch(function(error) {
        console.error('Erreur lors de l enregistrement du Service Worker:', error);
      });
  }
  
