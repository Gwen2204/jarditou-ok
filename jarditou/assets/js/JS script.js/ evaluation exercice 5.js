document.querySelector('#nom').oninput = function () {
    fnom()
}

document.querySelector('#prénom').oninput = function () {
    fprénom()
}

document.querySelector('#cp').oninput = function () {
    fcp()
}

document.querySelector('#adr').oninput = function () {
    fadr()
}

document.querySelector('#ville').oninput = function () {
    fville()
}

document.querySelector('#email').oninput = function () {
    femail()
}

document.querySelector('#controle').oninput = function () {
    fcontrole()
}

document.querySelector('#question').oninput = function () {
    fquestion()
}

// Entrer un nom obligatoirement avec les caractères autorisés 
function fnom(e) {
    var nom = document.getElementById('nom').value
    var regnom = new RegExp("^[a-zA-Z-'çéè]{1,}$")
    var valide = regnom.test(nom)

    var spannom = document.querySelector("#ernom")

    if (valide == false) {
        spannom.innerHTML = "Entrez des lettres uniquement"
        e.preventDefault()
    } else {
        spannom.innerHTML = ""
    }

}

// Entrer un prénom obligatoirement avec les caractères autorisés 
function fprénom(e) {
    var prénom = document.getElementById('prénom').value
    var regprénom = new RegExp("^[a-zA-Z-çéè]{1,}$")
    var valide = regprénom.test(prénom)

    var spanprénom = document.querySelector("#erprénom")

    if (valide == false) {
        spanprénom.innerHTML = "Entrez des lettres uniquement"
        e.preventDefault()
    } else {
        spanprénom.innerHTML = ""
    }

}

// Un seul choix possible obligatoirement, impossible de sélectionner les deux
function fsexe(e) {

    var fem = document.getElementById("fem").checked
    var hom = document.getElementById("hom").checked

    var spansexe = document.querySelector("#ersexe")


    if (fem == false && hom == false) {
        spansexe.innerHTML = "Choisir une option"
        e.preventDefault()
    } else {
        spansexe.innerHTML = ""
    }

}

// mettre une date valide obligatoirement
function fdate(e) {
    var date = document.getElementById('date').value
    var spandate = document.querySelector("#erdate")

    if (date == "") {
        spandate.innerHTML = "Entrez votre date de naissance"
        e.preventDefault()
    } else {
        spandate.innerHTML = ""
    }

}

// Entrer un code postal avec 5 chiffres obligatoirement
function fcp(e) {
    var cp = document.getElementById('cp').value
    var regcp = new RegExp("^[0-9]{5,5}$")
    var valide = regcp.test(cp)

    var spancp = document.querySelector("#ercp")

    if (valide == false) {
        spancp.innerHTML = "Entrer 5 chiffres uniquement"
        e.preventDefault()
    } else {
        spancp.innerHTML = ""
    }

}

// Entrer une adresse valide avec les caractères autorisés, saisie non obligatoire
function fadr(e) {
    var adr = document.getElementById('adr').value
    var regadr = new RegExp("^[a-zA-Z0-9- éè'ç]{0,}$")
    var valide = regadr.test(adr)

    var spanadr = document.querySelector("#eradr")

    if (valide == false) {
        spanadr.innerHTML = "Entrer votre adresse"
        e.preventDefault()
    } else {
        spanadr.innerHTML = ""
    }

}

// Entrer une ville valide avec les caractères autorisés, saisie non obligatoire
function fville(e) {
    var ville = document.getElementById('ville').value
    var regville = new RegExp("^[a-zA-Z-éè']{0,}$")
    var valide = regville.test(ville)

    var spanville = document.querySelector("#erville")

    if (valide == false) {
        spanville.innerHTML = "Entrez votre ville"
        e.preventDefault()
    } else {
        spanville.innerHTML = ""
    }

}

// Entrer une adresse mail valide, avec les caractères autorisés obligatoirement
function femail(e) {
    var email = document.getElementById('email').value
    var regemail = new RegExp("^[a-zA-Z-éè'@._]{1,}$")
    var valide = regemail.test(email)

    var spanemail = document.querySelector("#eremail")

    if (valide == false) {
        spanemail.innerHTML = "Entrez une adresse mail valide"
        e.preventDefault()
    } else {
        spanemail.innerHTML = ""
    }

}

// Confirmer l'adresse mail obligatoirement
function fcontrole(e) {
    var controle = document.getElementById('controle').value
    var regcontrole = new RegExp("^[a-zA-Z-éè'@._]{1,}$")
    var valide = regcontrole.test(controle)

    var spancontrole = document.querySelector("#ercontrole")

    if (valide == false) {
        spancontrole.innerHTML = "Entrez une adresse mail valide"
        e.preventDefault()
    } else {
        spancontrole.innerHTML = ""
    }

}

// Choisir un seul et unique sujet dans la liste obligatoirement
function fsujet(e) {

    var sujet = document.getElementById('sujet').value
    var spansujet = document.querySelector("#ersujet")

    if (sujet == "Veuillez sélectionner un sujet") {
        spansujet.innerHTML = "Veuillez sélectionner un sujet"
        e.preventDefault()
    } else {
        spansujet.innerHTML = ""
    }

}

// Posez une question avec les caractères autorisés obligatoirement
function fquestion(e) {
    var question = document.getElementById('question').value
    var regquestion = new RegExp("^[a-zA-Z0-9 -!?,.;:éèà@()'$£€&°çê]{1,}$")
    var valide = regquestion.test(question)

    var spanquestion = document.querySelector("#erquestion")

    if (valide == false) {
        spanquestion.innerHTML = "Entrez votre question"
        e.preventDefault()
    } else {
        spanquestion.innerHTML = ""
    }

}

// Cochez la case obligatoirement avant envoie du formulaire
function fcheck(e) {


    var check = document.getElementById('check').checked

    var spancheck = document.querySelector("#ercheck")


    if (check == false) {
        spancheck.innerHTML = "Veuillez cocher la case"
        e.preventDefault()
    } else {
        spancheck.innerHTML = ""
    }

}
function verif(e) {
    fnom(e)
    fprénom(e)
    fsexe(e)
    fdate(e)
    fcp(e)
    fadr(e)
    fville(e)
    femail(e)
    fcontrole(e)
    fsujet(e)
    fquestion(e)
    fcheck(e)
}

document.getElementById("submit").addEventListener("click", verif); 