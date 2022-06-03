

const stockageDepense=JSON.parse(localStorage.getItem("decaissement"));
const stockageRevenu=JSON.parse(localStorage.getItem("gain"));
// if ((stockageDepense!=null )|| (stockageRevenu!=null)){
//     content.style.display="none";
// }
if (stockageRevenu!=null){
    salair.textContent=stockageRevenu["typeRevenu"] ;
    montantSalaire.textContent=stockageRevenu["montant"]  ;
    transport.textContent=stockageRevenu["typeRevenu"]
    montantTransport.textContent=stockageRevenu["montant"] 

}


decaisser.onclick = () =>{
    const decaissement={
         categorie:categorie.value,
         typeDepense:depenses.value,
         montant:montant.value
    }
    localStorage.setItem("decaissement",JSON.stringify(decaissement))
}
benefice.onclick = () =>{
    const gain={
         categorie:categorie.value,
         typeRevenu:revenu.value,
         montant:montant.value
    }
    
    localStorage.setItem("gain",JSON.stringify(gain))
}