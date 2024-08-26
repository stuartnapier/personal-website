// animate the hero link arrow
// $(".hero-link").on("mouseover", function(event){
//     $(".hero-link svg").animate({paddingLeft: "10px"});
// })

$(".hero-link").on("mouseover", function(event){
    $(".hero-link svg").animate({left: "10px"});
})

$(".hero-link").on("mouseleave", function(event){
    $(".hero-link svg").animate({left: "0px"});
})




   	
// toggles the visibility of the burger drop down menu
$( ".burger-button" ).on( "click", function() {
    $( ".burger-dropdown" ).toggle();
  });

// without this the drop down would still be present when the window size was increased then decreased back
$(window).on('resize', function(){
    if ($(window).width() >= 992){
        $( ".burger-dropdown" ).hide();
    } 
});