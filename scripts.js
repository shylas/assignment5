"use strict";

var infoArray = [];

$('#add-info').on('click', getInfo);

$('#infoSubmit').on('click', showForm);

function getInfo(){
	var name = $('#info-name').val();
	var age = $('#info-age').val();
    var country = $('#info-country').val();

	
	var newObject = {name: name, age: age, country: country};
  
  infoArray.push(newObject);
  
  showTable();
  
  infoArray.forEach(buildTable);
	
	$('#info-name').val('');
    $('#info-age').val('');
    $('#info-country').val('');
  
  
	event.preventDefault();
}

function buildTable() {
  $("#demo-info").empty();
  for (var i = 0; i < infoArray.length; i++) {
     $("#demo-info").append("<tr><td>" + infoArray[i].name + "</td><td>" + infoArray[i].age + "</td><td>" + infoArray[i].country + "</td></tr>");
  }
   
}

function showForm() {
  $('#infoSubmit').hide();
  $('#demographics').hide();
  $('#item-form').show();
}

function showTable(){
  $('#infoSubmit').show();
  $('#demographics').show();
  $('#item-form').hide();
}