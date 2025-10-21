
function verifBirthDay(){
    let dateNaissance = document.getElementById("birthDay").value; 
    let dateToday = Date.now();
    if (dateNaissance<dateToday){
        console.log("Date de naissance valide")
    }else{
        console.log("error")
    }
}

