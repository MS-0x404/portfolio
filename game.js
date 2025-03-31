document.addEventListener("DOMContentLoaded", function() {
    const options = ["Crypt", "Decrypt"];

    const form = document.querySelector("#game");
    const inputText = document.querySelector("#cleartext");
    const inputKey = document.querySelector("#cipherkey");
    const outputText = document.querySelector("#ciphertext");

    const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for (const option of options) {
        const elemento = document.createElement('option');
        elemento.textContent = option;
        elemento.value = option;
        modeGame.append(elemento);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.dir(e)

        let clearText = inputText.value;
        let key = parseInt(inputKey.value);
        let mode = modeGame.value;

        if ( clearText === "" ) {
            outputText.textContent = "Errore: Devi inserire un testo!";
            return;
        }

        if (isNaN(key)) {
            outputText.textContent = "Errore: La chiave deve essere un numero.";
            return;
        }
        
        let cipherText = "";
        
        for (let i = 0; i < clearText.length; i++) {
            let char = clearText[i];
            if (char === " ") {
                cipherText += " ";
            } else {
                let upperChar = char.toUpperCase();
                let pos = alfa.indexOf(upperChar);
                
                if (pos !== -1) {
                    let newPos;
                    if (mode === "Crypt") {
                        newPos = (pos + key) % alfa.length;
                    } else { // Decrypt
                        newPos = (pos - key + alfa.length) % alfa.length;
                    }
                    cipherText += alfa[newPos];
                } else {
                    cipherText += char;
                }
            }
        }

        if ( mode === "Crypt" ) {
            outputText.textContent = `Testo Criptato: '${cipherText}'`;
        } else {
            outputText.textContent = `Testo Decifrato: '${cipherText}'`;
        }
    });

        

        

});



