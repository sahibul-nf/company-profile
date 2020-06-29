function animasiIntro(){
	$("#text span").velocity("transition.slideLeftIn",{stagger: 150,});
}

$(document).ready(function(){
    animasiIntro();
});