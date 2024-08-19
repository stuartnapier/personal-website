// animate the hero link arrow
$(".hero-link").on("mouseover", function(event){
    $(".hero-link svg").animate({paddingLeft: "10px"});
})

$(".hero-link").on("mouseleave", function(event){
    $(".hero-link svg").animate({paddingLeft: "0px"});
})




   	
// toggles the visibility of the burger drop down menu
$( ".burger-button" ).on( "click", function() {
    $( ".burger-dropdown" ).toggle();
  });