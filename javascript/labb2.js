// JavaScript Document


var hide = document.getElementById ("hide");
	
function action() {
	
	if (hide.className == ("show")) {
		hide.setAttribute ("class", "hide");
			
		}
		
	
	

	


	else { hide.setAttribute ("class", "show");
	}
}

var knapp = document.getElementById ("knapp")

knapp.addEventListener("click", action)