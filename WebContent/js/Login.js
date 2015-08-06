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
	var options = ["Softlayer","AWS","Azure","Google Cloud"];
	for(opt in options){
		var option = document.createElement("option");
		option.innerHTML = options[opt];
		document.getElementById("sel1").appendChild(option);
	}
});