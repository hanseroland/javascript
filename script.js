 
var tabNumeros = ["770000001","770000002", "770000003", "770000004","770000005"];
var tabSoldes = [5000000, 1000000, 20000,3000000, 5000000];
var tabCodes = ["0001","0002","0003","0004","0005"];
var numCourant;

 function menu() {
   var textMenu = ""+
    "1 : Solde du compte\n"+
    "2 : Transfert d'argent\n"+
    "3 : Paiement facture\n"+
    "4 : Option";
    
    var rep = window.prompt(textMenu);
    return rep;

 }




    function etapeSuivant() {
        var textRep = "Voulez vous continuez ?\n"+
        "1 : OUI\n"+
        "2 : NON";

        var rep = window.prompt(textRep);
        if(rep == "1"){
            main();
        }else{
            alert("Au revoir!")
        }
    }

    function fonctionIndisponible() {
        alert("Cette fonction est indisponible");
        etapeSuivant();
    }

    function afficheSolde(num) {
        var indice = tabNumeros.indexOf(num);
       // console.log(num);
        if(indice != -1){
            var code = window.prompt("Donnez votre code: ");
            if(code==tabCodes[indice]){
                let msg = "Votre solde est de : "+tabSoldes[indice];
                alert(msg);
                etapeSuivant();              
            }
        }else{
              let msg = "Votre numéro  n'existe pas!";
              alert(msg);
              etapeSuivant();
        }
    }

    function afficheSolde(num) {
        var indice = tabNumeros.indexOf(num);
       // console.log(num);
        if(indice != -1){
            var code = window.prompt("Donnez votre code: ");
            if(code==tabCodes[indice]){
                let msg = "Votre solde est de : "+tabSoldes[indice];
                alert(msg);
                etapeSuivant();              
            }
        }else{
              let msg = "Votre numéro  n'existe pas!";
              alert(msg);
              etapeSuivant();
        }
    }

    function transfert(num){
        var indice = tabNumeros.indexOf(num);
        if(indice != -1){
            var code = window.prompt("Donnez votre code: ");
            if(code==tabCodes[indice]){
                var numDestinataire = window.prompt("Entrer le numéro du destinataire");
                if(numDestinataire.length > 9 || numDestinataire.length < 9){
                    alert("Ce numéro n'est pas valide");
                    etapeSuivant();
               }else{
                   let debit = window.prompt("Entrer le montant de transfert");
                   let newDebit = parseInt(debit);
                   let solde = tabSoldes[indice];

                    if(newDebit > solde ){
                        alert("Votre solde est insuffisant");
                        etapeSuivant();
                    }else{
        
                        let newSolde = solde - newDebit;
                        tabSoldes.splice(indice,1, newSolde);
                        let text = "Vous avez transféré "+debit+" au "+numDestinataire+"\n"+
                                    "Votre nouveau solde est de : "+tabSoldes[indice];
                        alert(text);
                        etapeSuivant();    
                    }

               }
                             
            }

        }else{
            let msg = "Votre numéro  n'existe pas!";
            alert(msg);
            etapeSuivant();
        }


    }



 function main(){
     var rep = menu();
     var numCourant = document.getElementById("num").value;
     switch(rep){
        case "1":
            afficheSolde(numCourant);
            break;
        case "2":
            transfert(numCourant);
            break;
        case "3":
            fonctionIndisponible();
            break;
        case "4":
            fonctionIndisponible();
            break;
     }
 }



