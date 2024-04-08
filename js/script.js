document.getElementById('bashButton').addEventListener('click', function() {
    // Calculer les dégâts (utilisation d'un nombre aléatoire pour l'exemple)
    var damage = Math.floor(Math.random() * 10) + 1; // Dégâts aléatoires entre 1 et 10

    // Afficher les dégâts dans la boîte de dialogue
    var dialogueBox = document.getElementById('dialogueBox');
    dialogueBox.innerHTML = '<div class="boite-dialogue" id="dialogueBox">vous avez infligé' + damage +'</div>'
});