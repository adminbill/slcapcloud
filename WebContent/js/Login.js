/**
 * 
 */

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
	$('#login1').on('click', function() {
		$('#loginform1').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				username: {
					message: 'The username is not valid',
					validators: {
						notEmpty: {
							message: 'The username cannot be empty'
						},
					}
				},
			}
		})
	})
});

$(function () {
	$('#signup1').on('click', function() {
		$('#signupform1').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				fname: {
					message: 'First Name is not valid',
					validators: {
						notEmpty: {
							message: 'First Name cannot be empty'
						},
					}
				},
				lname: {
					message: 'Last Name is not valid',
					validators: {
						notEmpty: {
							message: 'Last Name cannot be empty'
						},
					}
				},
				username: {
					message: 'The username is not valid',
					validators: {
						notEmpty: {
							message: 'The username cannot be empty'
						},
					}
				},
				passwd: {
					message: 'Password is not valid',
					validators: {
						notEmpty: {
							message: 'Password cannot be empty'
						},
					}
				},
				key: {
					message: 'Key is not valid',
					validators: {
						notEmpty: {
							message: 'Key cannot be empty'
						},
					}
				},
			}
		})
	})
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
