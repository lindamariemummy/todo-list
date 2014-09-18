$(document).ready(function() {
	$("#addButton").click( function() {
		var el = document.getElementById("userEntry").value;
		if (el == "") {
			$("#addButton").after("<div id='error'>Don't you want to type something?</div>");
		}
		else {
			$(".tableOfTodos").append("<tr><td><div class='todobox'>" + el + "</div></td></tr>");	

					
			$("#userEntry").val(""); //resets textbox
			$("#error").remove(); //removes error message
		}	
		$(".todobox").click(function() {
			$(this).remove();		
		});		
	});
});

