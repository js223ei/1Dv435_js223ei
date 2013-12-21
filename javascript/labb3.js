// JavaScript Document


 
 	
	
	
 	var bilder = ['pages/pics/1.png','pages/pics/2.png', 'pages/pics/3.png', 'pages/pics/4.png', 'pages/pics/5.png', 'pages/pics/6.png', 'pages/pics/7.png', 'pages/pics/8.png', 'pages/pics/9.png', 'pages/pics/10.png', 'pages/pics/11.png', 'pages/pics/12.png', 'pages/pics/13.png', 'pages/pics/14.png', 'pages/pics/15.png', 'pages/pics/16.png'  ]
	
	var counter = 0;
	
	setInterval (function() {changeimage()},60);
	function changeimage(){var image = document.querySelector("#bario");
	image.setAttribute('src', bilder[counter]);
	counter ++;
	if (counter > 15){
		counter = 0; }
}