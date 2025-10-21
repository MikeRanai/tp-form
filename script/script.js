function verifBirthDay() {
    let dateNaissance = document.getElementById("birthDay").value;
    
    // Vérifier si le champ date est vide
    if (!dateNaissance) {
        console.log("Erreur : Veuillez entrer une date de naissance.");
        return;
    }

    // Convertir la chaîne de date en objet Date
    let birthDate = new Date(dateNaissance);
    let dateToday = new Date(); // Date actuelle

    // Vérifier si la date de naissance est valide et antérieure à aujourd'hui
    if (birthDate < dateToday) {
        console.log("Date de naissance valide");
    } else {
        console.log("Erreur : La date de naissance doit être antérieure à aujourd'hui.");
    }
}