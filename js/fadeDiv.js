$(document).ready(function(){

 $(".abacus-row").click(function() {
    $(".abacus-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

 $(".percolate-row").click(function() {
    $(".percolate-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

  $(".designtalk-row").click(function() {
    $(".designtalk-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

  $(".shake-row").click(function() {
    $(".shake-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

  $(".turntable-row").click(function() {
    $(".turntable-expanded").fadeIn("fast");
    $("body").addClass("remove-overflow");
 });

 $(".close").click(function() {
    $(".abacus-expanded").fadeOut("fast");
    $(".percolate-expanded").fadeOut("fast");
    $(".designtalk-expanded").fadeOut("fast");
    $(".shake-expanded").fadeOut("fast");
    $(".turntable-expanded").fadeOut("fast");
    $("body").removeClass("remove-overflow");
 });

});