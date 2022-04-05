let text;
let randIndex;
let randElement;
let passwordFinale = [];
let stringaPasswordFinale;
let lunghezzaPassword;
//catturo pulsante genera
let genera = document.querySelector(".button-container :first-child");
let reset = document.querySelector(".button-container :last-child");
//catturo checkbox
let numeri = document.getElementById("numeri");
let maiuscole = document.getElementById("maiuscole");
let minuscole = document.getElementById("minuscole");
let simboli = document.getElementById("simboli");

//catturo span

let span = document.querySelector("span");

// contenuto testo span

let spanText = document.querySelector("span").textContent;

//catturo icona

let icona = document.querySelector("i");


//password generale

let mainPassword = [];

//creo array vuoto per il numero massimo di caratteri che formerà la password

let maxNumber = [];

//creo array per la lista dei tipi di caratteri che formeranno la password in charcode e valori trasformati
let elencoNumeri = [];
let elencoMaiuscoleCharcode = [];
let elencoMaiuscole = [];
let elencoMinuscoleCharcode = [];
let elencoMinuscole = [];
let elencoSimboliCharcode = [];
let elencoSimboli = [];


//creo range tra 1 e 20 e popolo l'array maxNumber, il massimo numero di caratteri che formano la password
for (let i = 1; i <= 20; i++) {
    maxNumber.push(i)
}

//recupero i numeri tra 0 e 9

for (let i = 0; i <= 9; i++) {
    elencoNumeri.push(i);
}

//recupero le lettere maiuscole dalla tabella character set e ottengo le maiuscole
for (let i = 65; i <= 90; i++) {
    elencoMaiuscoleCharcode.push(i)
}
for (let i of elencoMaiuscoleCharcode) {
    elencoMaiuscole.push(String.fromCharCode(i));
}

//recuper le lettere minuscole dalla tabella character set e ottengo le minuscole

for (let i = 97; i <= 122; i++) {
    elencoMinuscoleCharcode.push(i)
}
for (let i of elencoMinuscoleCharcode) {
    elencoMinuscole.push(String.fromCharCode(i));
}

//recuper i simboli dalla tabella character set e ottengo i simboli

for (let i = 33; i <= 47; i++) {
    elencoSimboliCharcode.push(i)
}

for (let i = 58; i <= 63; i++) {
    elencoSimboliCharcode.push(i)
}
for (let i of elencoSimboliCharcode) {
    elencoSimboli.push(String.fromCharCode(i));
}



//controllo quali checkbox sono spuntati



//creo funzione che genera password casuale

function generaPassword() {
    if (numeri.checked == true) {
        for (let i of elencoNumeri) {
            mainPassword.push(i);
        }
    }
    if (maiuscole.checked == true) {
        for (let i of elencoMaiuscole) {
            mainPassword.push(i);
        }
    }
    if (minuscole.checked == true) {
        for (let i of elencoMinuscole) {
            mainPassword.push(i);
        }
    }
    if (simboli.checked == true) {
        for (let i of elencoSimboli) {
            mainPassword.push(i);
        }
    }
    if (mainPassword.length == 0) {
        alert("Seleziona almeno una casella!");
    }
}

//creo funzione pulisci password





//aggiungo listener al pulsante genera catturando il numero di caratteri inseriti
genera.addEventListener("click", function(e) {
    //e.preventDefault();
    span.textContent = stringaPasswordFinale;
    text = document.querySelector("#caratteri").value;
    text = Number(text);
    if (!maxNumber.includes(text)) {
        alert("Inserisci un numero tra 1 e 20!");
    } else {
        lunghezzaPassword = text;
        generaPassword();
        for (let i = 1; i <= lunghezzaPassword; i++) {
            randIndex = Math.floor(Math.random() * mainPassword.length);
            randElement = mainPassword[randIndex];
            passwordFinale.push(randElement);

        }
        //converto array passwordfinale in stringa
        stringaPasswordFinale = passwordFinale.join('');
        passwordFinale = [];
        span.textContent = stringaPasswordFinale;
        stringaPasswordFinale = "";


    }

});

//aggiungo listener al pulsante reset

reset.addEventListener("click", function() {
    location.reload();
})


// la funzione select funziona solo con textarea o text input quindi creo una textarea temporanea 

function copyPassword() {
    let textArea = document.createElement("textarea");
    textArea.value = span.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

// aggiungo listener ad icona per copiare clipboard
icona.addEventListener("click", function() {
    copyPassword();
    alert("Password Copiata!");
})