var altflag = 0;

$(document).ready(function(){
	//on ready event registrations
	//For Contact us Table
	$("#btnAdd").on("click", AddRow);
	$("#contactTable td").not(".deleteDiv").on("click", getInputArea);
	$(".delete").on("click", deleteRow);
	$("#contactTable td").not(".deleteDiv").on({
	    mouseenter: mouseEntr,
	    mouseleave: mouseOut
	});
	
	$(document).on('keydown', function(e) {
	   	if(e.keyCode == 18)
	   	{
	   		altflag = 1;
		}
		//chain 3 animate events on "A" keydown
		if(e.keyCode == 65)
		{
			$("#chain_anim1").animate({opacity: '0.5'}, function(){
				$("#chain_anim2").animate({height: '150px'}, function(){
					$("#chain_anim2").animate({height: '400px'});
				});
			});
		}
	});
	
	$(document).on('keyup', function(e) {
	   	if(e.keyCode == 18)
	   	{
	   		altflag = 0;
			$("#contactTable td").not(".deleteDiv").css({"background-color":"white", "color" : "#5A5A5A"});
		}
	});

	//Click
	$("#showElement").on("click", showElement);
	$("#hideElement").on("click", hideElement);
	$("#toggleElement").on("click", toggleElement);
	//Double Click
	$("#fadeInElement").on("dblclick", fadeInElement);
	$("#colafadeOut").on("dblclick", colafadeOut);
	$("#fadeToButton").on("dblclick", pringlesAction);
	$("#fadeToggleAll").on("dblclick", fadeToggleAll);
	//MouseEnter, MouseLeave
	$("#donutDesc").mouseenter(function(){
		$(this).css({"background-color":"orange","color":"white"});
		$(this).fadeTo("slow", 0.5, mouseEntrLeaveCallback);
	});
	$("#donutDesc").mouseleave(function(){
		$(this).css({"background-color":"white","color":"black"});
		$(this).fadeTo("slow", 1, mouseEntrLeaveCallback);
	});
	//chain fade on "F" key pressed
	$(document).on("keypress", function(e){
		if(e.keyCode == 102)
		{
			$("#chain_fade1").fadeTo("slow", 0.15, function(){
				$("#chain_fade2").fadeTo("slow", 0.15, function(){
					$("#chain_fade3").fadeTo("slow", 0.15);
				});
			});
		}
	});
	
});

function getInputArea(){
	var old_text = $(this).text();
	$(this).empty();
	$(this).append('<input type="text" id="editCell">');
	$(this).unbind();
	$("#editCell").val(old_text);
	$("#editCell").focus();
	$("#editCell").blur(saveText);
}

function saveText(){  
	$(this).parent().css({"background-color":"white", "color" : "#5A5A5A"});
	//binding old events as we had unbind it
	$(this).parent().on({
	    mouseenter: mouseEntr,
	    mouseleave: mouseOut
	});
	$(this).parent().on("click", getInputArea);
	$(this).parent().html($(this).val());

}

function AddRow(){
	$("#contactTable tbody").append("<tr><td></td><td></td><td></td><td></td><td class='deleteDiv'><button class = 'btn btn-danger delete' type='button'>Delete</button></td></tr>");
	// register events on newly added rows
	$("#contactTable td").not(".deleteDiv").on("click", getInputArea);	
	$(".delete").on("click", deleteRow);
	$("#contactTable td").not(".deleteDiv").on({
	    mouseenter: mouseEntr,
	    mouseleave: mouseOut
	});
}
  
function deleteRow () {
 	$(this).parent().parent().remove();
}

function hideElement(){
	$("#colaHide").hide(1000);
}

function showElement(){
	$("#donutShow").show(1000);
}

function toggleElement(){
	$("#pringlesToggle").toggle(1000);
}

function fadeInElement(){
	$("#donutFadeIn").fadeIn(3000);
}

function colafadeOut(){
	$("#colaFadeOut").fadeOut(3000);
}

function pringlesAction(){
	$("#pringImage").fadeTo("slow", 0.15);
}

function fadeToggleAll(){
	$("#ftoggleall").fadeToggle("slow");
}

function mouseEntr(evt){
	if(altflag == 1)
	$(this).css({"background-color":"LightSkyBlue", "color" : "red"});
}

function mouseOut(){
	$(this).css({"background-color":"white", "color" : "#5A5A5A"});
}

function mouseEntrLeaveCallback(){
	alert("Animation Done!!");
}
