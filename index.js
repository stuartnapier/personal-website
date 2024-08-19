// animate the hero link arrow
$(".hero-link").on("mouseover", function(event){
    $(".hero-link svg").animate({paddingLeft: "10px"});
})

$(".hero-link").on("mouseleave", function(event){
    $(".hero-link svg").animate({paddingLeft: "0px"});
})




   	

$( ".burger-button" ).on( "click", function() {
    $( ".burger-dropdown" ).toggle();
  });