$(".menu").click(function() {
	$(".menu-overlay").css("transform","scale(1,1)")
})
$(".close").click(function() {
	$(".menu-overlay").css("transform","scale(0,0)")
})
$(".tutup").click(function() {
	$(".robot-overlay-clicked").css("transform","scale(0,0)")
})
$(".overlay-robot-content div").click(function() {
	$(".robot-overlay-clicked").css("transform","scale(1,1)")
})
$(".tutup2").click(function() {
	$(".popup").css("top","100%")
})
$(".own-btn-4").click(function() {
	$(".popup").css("top","0")	
})