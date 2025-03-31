document.addEventListener("DOMContentLoaded", function() {
    const maiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusc = "abcdefghijklmnopqrstuvwxyz";
    const special = "!?_&%$£";
    const numbers = "0123456789";

    const form = document.querySelector("#game2");
    const inputKey = document.querySelector("#lenghtpass");
    const outputText = document.querySelector("#passgen");
    const chkSpecial = document.querySelector("#chkSpecial");
    const chkNumbers = document.querySelector("#chkNumbers");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.dir(e)

        let key = parseInt(inputKey.value);
        
        if (isNaN(key)) {
            outputText.textContent = "Errore: La chiave deve essere un numero.";
            return;
        }
        if ( key < 1 || key > 18 ) {
            outputText.textContent = "Errore: Prova con un numero tra 1-18";
            return;
        }


        
        let availableChars = maiusc + minusc;
        if (chkSpecial.checked) availableChars += special;
        if (chkNumbers.checked) availableChars += numbers;
        
        let password = "";
        for (let i = 0; i < key; i++) {
            let randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }
        
        outputText.textContent = `Password: '${password}'`;
    });

        

        

});



