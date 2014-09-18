$(document).ready(function() {
	
	$("#addButton").on("click", function() {
		$entry = $("#userEntry").val();
		
		if ($entry === "") {
			$("#error").text("Don't you want to type something?");
		}
		else {
			$(".tableOfTodos").append("<tr><td><div class='todobox'>" + $entry + "</div></td></tr>");					
			$("#userEntry").val(""); //resets textbox
			$("#error").text(""); //blanks out error message
		}	  
		
		$('.todobox').on("click", function() { //todo list items disappear when clicked
			$(this).fadeOut("fast");		
		});

	});	
});

