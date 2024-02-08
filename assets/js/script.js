document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide-loader");
    }, 10000);

    // Gestionnaire d'événements pour le bouton
    document.getElementById("hide-loader-btn").addEventListener("click", () => {
        let loader = document.getElementById("loader");
        
        // Transition douce de l'opacité de 1 vers 0
        loader.style.opacity = 0;
        
        // Après la transition, changer le display à none pour masquer complètement l'élément
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Durée de la transition (0.5s) en millisecondes

        // Lancer la musique
        document.getElementById("music").play(); 
    });
});
