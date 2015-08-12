/**
 * 
 */

$(document).ready(function(){
	$('#apiModal').modal('show');
});

function validate(){
	$('#apiKey1').formValidation({
        framework: 'bootstrap',
        excluded: [':disabled'],
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            APIKey: {
                validators: {
                    notEmpty: {
                        message: 'API Key is required'
                    }
                }
            }
        }
    });
}