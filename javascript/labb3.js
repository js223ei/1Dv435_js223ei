// JavaScript Document


 
 	
	
	
 	var bilder = ['../../../Grafiska/mot/1.png', '../../../Grafiska/mot/2.png', '../../../Grafiska/mot/3.png', '../../../Grafiska/mot/4.png', '../../../Grafiska/mot/5.png', '../../../Grafiska/mot/6.png', '../../../Grafiska/mot/7.png', '../../../Grafiska/mot/8.png', '../../../Grafiska/mot/9.png', '../../../Grafiska/mot/10.png', '../../../Grafiska/mot/11.png', '../../../Grafiska/mot/12.png', '../../../Grafiska/mot/13.png', '../../../Grafiska/mot/14.png', '../../../Grafiska/mot/15.png', '../../../Grafiska/mot/16.png' ]
	
	var counter = 0;
	
	setInterval (function() {changeimage()},60);
	function changeimage(){var image = document.querySelector("#bario");
	image.setAttribute('src', bilder[counter]);
	counter ++;
	if (counter > 15){
		counter = 0; }
}