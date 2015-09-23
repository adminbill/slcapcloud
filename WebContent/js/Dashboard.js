/**
 * 
 */

$(document).ready(function(){
	createDashboard();
});

function createDashboard(){
	var sessions = new Array(
	        {"Category": "Low", "Avg CPU Usage": "50"},
	        {"Category": "Medium", "Avg CPU Usage": "50"},
	        {"Category": "High", "Avg CPU Usage": "50"}
	 );
	      
	 // create the table header
	 var thead = d3.select("thead").selectAll("th")
	.data(d3.keys(sessions[0]))
	.enter().append("th").text(function(d){return d});
	// fill the table
	// create rows
	var tr = d3.select("tbody").selectAll("tr")
	.data(sessions).enter().append("tr")
	// cells
	var td = tr.selectAll("td")
	  .data(function(d){return d3.values(d)})
	  .enter().append("td")
	  .text(function(d) {return d})
}

$(function () {
	$('#addCloud1').on('click', function(){
			var options = ["Softlayer","AWS","Azure","Google Cloud"];
			for(opt in options){
				var option = document.createElement("option");
				option.setAttribute("id", "options");
				option.innerHTML = options[opt];
				document.getElementById("sel1").appendChild(option);
			}
	})
});

$(function () {
	$('#addCloudModal1').on('show.bs.modal', function(){
		
	})
})

$(function () {
	$('#addCloudModal1').on('hidden.bs.modal', function(){
		while(document.getElementById("sel1").hasChildNodes())
			document.getElementById("sel1").removeChild(document.getElementById("sel1").childNodes[0]);
	})
})

$(function () {
	$('#addCloud1').on('click', function() {
		$('#addCloudForm1').bootstrapValidator({
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
				password: {
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