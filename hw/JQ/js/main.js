
 
$("h1").html("Visit Panda base in China");

$(".btn").click(function(){
    $(".btn-text").slideDown("slow");
});

$(".nav li").mouseover(function(){
	$(this).css("background-color","#000");
	$(this).css("color","#fff");
});
$(".nav li").mouseleave(function(){
	$(this).css("background-color","#c7161e");
	$(this).css("color","#fff");
});


$(".nav li").click(function(){
	$(this).addclass('active');
})

$(".sc1-text").mousedown(function(){
	 $("strong").slideToggle();
})

$(".sc2 img").mouseover(function(){
	$(this).addClass('img');
})

$("h3").click(function(){
  $("ol").fadeOut()
 });