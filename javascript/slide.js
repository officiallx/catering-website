
	var i = 0; // Start point
	var images = [];
	var time = 2000;

	// Image List
	images[0] = '../images/items/modern/19985148_473168439716099_3808348905817505792_n.jpg.jpg';
	images[1] = '../images/items/modern/20180995_157299451504827_2844734995384238080_n.jpg.jpg';
	images[2] = '../images/items/modern/20225971_478988215786352_2391526223789424640_n.jpg.jpg';
	images[3] = '../images/items/modern/20633996_263926397427920_7567017894857408512_n.jpg.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;