let nombres = ("")
let messageText = ("")
let tentativeUt = 10

function nombresAleatoire(){
    nombres = Math.floor(Math.random()*101)
    console.log(nombres)
}

function affichageNombres(){
    const afficheNombres = document.getElementById("affichageNombres")
    afficheNombres.innerText = nombres
}

function messagesUtIndice(){
    let messages = document.getElementById("message");
    messages.innerText = messageText;
}

const boutons = document.querySelector("button")
const input = document.querySelector('input')


function lancerJeu(){    

    input.value = ""
    
    nombresAleatoire();

    let nombreCache = document.getElementById("affichageNombres")
    nombreCache.innerText = "* * *"

    document.addEventListener("keydown", function(event){
        if (event.key === "Enter"){            
            gameLogic()            
            console.log(tentativeUt)
        }
    })
    
    boutons.addEventListener("click" ,function(){
        gameLogic();        
        console.log(tentativeUt)
    })


    function gameLogic (){

        if (tentativeUt <= 1) {
            setTimeout(() => window.location.href = "index.html",3000)
            messageText = "Dommage tu a epuiser tes ressources, Recommence !"
            messagesUtIndice()
            return           
        }

        if (isNaN(input.value) || input.value == "") { 

            input.value = ""
            messageText = `Ecris un Nombre ! Tentative restante : ${tentativeUt}`             

        } else if (nombres < input.value) {

            tentativeUt --
            input.value = ""
            messageText = `Plus Bas ! Tentative restante : ${tentativeUt}`


        } else if (nombres > input.value){
            
            tentativeUt --
            input.value = ""
            messageText = `Plus haut ! Tentative restante : ${tentativeUt}`  

        } else { 

            let messageBoom = document.getElementById("message"); 
            let affichageBoom = document.getElementById("affichageNombres")         
            
            messageBoom.classList.add("boom"); 
            affichageBoom.classList.add("boom")
            
            messageText = "Bravo tu a réussi !"                
             
            
            affichageNombres()
        }

        messagesUtIndice()        
        
    }    
}
 
lancerJeu();
