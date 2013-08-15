$(document).ready(function(){

	$(".boxes").on("mouseenter", function(){

		$("#general-info").hide();
		
		if (this.id == "basecamp")
		   $("#basecamp-info").addClass("visible-headline");

		else if (this.id == "highrise")
			$("#highrise-info").addClass("visible-headline");

		else if (this.id == "campfire")
			$("#campfire-info").addClass("visible-headline");
	})

	$(".boxes").on("mouseleave", function(){
		$("#general-info").show();
		$(".products").removeClass("visible-headline");

	})
})
