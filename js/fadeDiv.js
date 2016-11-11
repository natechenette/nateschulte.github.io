$(document).ready(function(){

 $(".abacus-row").click(function() {
    $(".abacus-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

 $(".close").click(function() {
    $(".abacus-expanded").fadeOut("fast");
    $("body").removeClass("remove-overflow");
 });

});