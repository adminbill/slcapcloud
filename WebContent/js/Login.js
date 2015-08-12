/**
 * 
 */

function showLoginPanel(email){
	function validateEmail(email) 
	{
	    var re = /\S+@\S+\.\S+/;
	    return re.test(email);
	}
}

$(document).ready(function(){
	$('#loginPanel1').hide();
	$('#registerPanel1').hide();
	var options = ["Softlayer","AWS","Azure","Google Cloud"];
	for(opt in options){
		var option = document.createElement("option");
		option.innerHTML = options[opt];
		document.getElementById("sel1").appendChild(option);
		var option2 = document.createElement("option");
		option2.innerHTML = options[opt];
		document.getElementById("sel2").appendChild(option2);
	}
});


$(function () {
	$('#logIn1').on('click', function(){
		$('#registerPanel1').hide();
		$('#loginPanel1').slideToggle();
	})
})

$(function () {
	$('#signUp1').on('click', function(){
		$('#loginPanel1').hide();
		$('#registerPanel1').slideToggle();
	})
})

$(document).click(function(event) { 
    if(!$(event.target).closest('#loginPanel1').length && !$(event.target).closest('#logIn1').length) {
        if($('#loginPanel1').is(":visible")) {
            $('#loginPanel1').slideToggle();
        }
    }      
    if(!$(event.target).closest('#registerPanel1').length && !$(event.target).closest('#signUp1').length) {
        if($('#registerPanel1').is(":visible")) {
            $('#registerPanel1').slideToggle();
        }
    }  
})
