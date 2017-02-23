$(function(){

$(document).ready(function(){                             
   $('#image1').mouseenter(function(){
     $(this).removeClass('nohover');
     $(this).addClass('hover');
   });
   $('#image1').mouseleave(function(){
     $(this).removeClass('hover'); 
     $(this).addClass('nohover');
   });						
});


$(document).ready(function(){                             
   $('#image2').mouseenter(function(){
     $(this).removeClass('nohover');
     $(this).addClass('hover');
   });
   $('#image2').mouseleave(function(){
     $(this).removeClass('hover'); 
     $(this).addClass('nohover');
   });						
});

$(document).ready(function(){                             
   $('#image3').mouseenter(function(){
     $(this).removeClass('nohover');
     $(this).addClass('hover');
   });
   $('#image3').mouseleave(function(){
     $(this).removeClass('hover'); 
     $(this).addClass('nohover');
   });						
});

$('#button1').click(function (e) {
	 e.stopPropagation();
    $('#image1').show();
});

$('#button2').click(function (e) {
	 e.stopPropagation();
    $('#image2').show();
});

$('#button3').click(function (e) {
	 e.stopPropagation();
    $('#image3').show();
});

 $("#button4").click(function(){
          $(this).css({"background-color":"pink"}); 
});
 

$("#button5").on("click", function(){
    $(this).hide();
});

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });
});

$(document).ready(
  function () {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true 
    });
});

$(document).ready(function(){
        $("#button6").click(function(){
        	var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
                alert("You have entered that you are a " + radioValue);
            }
        });		
    });	

$( function() {
    $( "#draggable" ).draggable();
});	
	});