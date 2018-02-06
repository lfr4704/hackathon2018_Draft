//
//
// $("#animateUp").click(function(){
//     alert("Animate Up");
//     $("#black-menu").animate({height: '10vw'}, 5, 'in-out')
// });
// Makes the menu move when clicked
// Toggle for simplicity
// var animateVar = true
document.getElementById("animateUp").addEventListener("click", function() {
    // var elementToSlide = document.getElementById("mymenu");
    $( "#mymenu" ).fadeToggle( "slow", "linear" );
    document.getElementById("black-menu").classList.toggle("is-active");
    // $('li').style
});
