$(document).ready(function() {


 $('#click-me').click(function() {
  
  $('#code-punch').animate({
    height: "toggle",
    width:"toggle",
  }, 300, function() {
      });

  })


    $("#content").find("[id^='tab']").hide(); // Hide all content
    $("#tabs li:first").attr("id","current"); // Activate the first tab
    $("#content #tab1").fadeIn(); // Show first tab's content
    
    $('#tabs a').click(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ //detect for current tab
         return;       
        }
        else{             
          $("#content").find("[id^='tab']").hide(); // Hide all content
          $("#tabs li").attr("id",""); //Reset id's
          $(this).parent().attr("id","current"); // Activate this
          $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
	        }
	    });
	});

    $(function () {
      $('[data-typer-targets]').typer();
    });