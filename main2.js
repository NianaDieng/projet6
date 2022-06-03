var stockageDepense=JSON.parse(localStorage.getItem("decaissement"));
var stockageRevenu=JSON.parse(localStorage.getItem("gain"));

// if (stockageDepense!=null){
   
    
    
// }

decaisser.onclick = () =>{
    var decaissement={
         categorie:categorie.value,
         typeDepense:depenses.value,
         montant:montant.value
    }
   
    localStorage.setItem("decaissement",JSON.stringify(decaissement))
    var tabDepense=[]
    tabDepense.push(decaissement)
    localStorage.setItem("tabDepense",JSON.stringify(tabDepense))
    document.location.reload();

}
benefice.onclick = () =>{
    const gain={
         categorie:categorie.value,
         typeRevenu:revenu.value,
         montant:montant.value
    }
    
    localStorage.setItem("gain",JSON.stringify(gain))
    var tabRevenue=[]
    tabRevenue.push(gain)
    
    localStorage.getItem("tabRevenue",JSON.stringify(tabRevenue))

}
