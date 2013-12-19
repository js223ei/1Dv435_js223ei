


function omvandlare (inneholl) {



	var dollar = 7.5;
	 var euro = 9.8;
 
	 var Dollarresultat;
	 var Euroresultat;
 
 		var resultat = document.getElementById ("resultat");
 
 	if(isNaN(inneholl)) {
 
 		resultat.innerHTML = "<p> Endast siffror tack !</p>"+ resultat.innerHTML; alert("sdf");
 }
 	
 	else if (inneholl >0) {
		
		Dollarresultat = Math.round((inneholl/dollar)*100)/100;
		Euroresultat = Math.round((inneholl/euro)*100)/100;
	
	
		var summa = inneholl + "svenska kronor " + Dollarresultat + " Dollar " + Euroresultat + " Euro ";
		resultat.innerHTML = "<p>" + summa + "</p>" + resultat.innerHTML;
	}

	else { resultat.innerHTML = "<p> Skriv ett tal i rutan </p>" + resultat.innerHTML;
	
	}



}


 
 
