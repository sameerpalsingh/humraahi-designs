$(document).ready(function(){

	$('#price-range-submit').hide();

	$("#min_price2,#max_price2").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price2").val());

	  var max_price_range = parseInt($("#max_price2").val());

	  if (min_price_range > max_price_range) {
		$('#max_price2').val(min_price_range);
	  }

	  $("#slider-range2").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$("#min_price2,#max_price2").on("paste keyup", function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price2").val());

	  var max_price_range = parseInt($("#max_price2").val());

	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;

			$("#min_price2").val(min_price_range);
			$("#max_price2").val(max_price_range);
	  }

	  $("#slider-range2").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range2").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max:50000,
		values: [0, 50000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }

		  $("#min_price2").val(ui.values[0]);
		  $("#max_price2").val(ui.values[1]);
		}
	  });

	  $("#min_price2").val($("#slider-range2").slider("values", 0));
	  $("#max_price2").val($("#slider-range2").slider("values", 50000));

	});

	$("#slider-range2,#price-range-submit").click(function () {

	  var min_price = $('#min_price2').val();
	  var max_price = $('#max_price2').val();

	  /*$("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");*/
	});

});




$(document).ready(function(){

	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$("#min_price,#max_price").on("paste keyup", function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
		if(!max_price_range){
			max_price_range=7;
		}
		if(!min_price_range){
			min_price_range=4;
		}

	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 0.1;

			$("#min_price").val(min_price_range);
			$("#max_price").val(max_price_range);
	  }else if(min_price_range<4 || min_price_range>7){
			min_price_range=4;
			max_price_range=7;
			$("#min_price").val(min_price_range);
			$("#max_price").val(max_price_range);
		}else if (max_price_range>7 || max_price_range<4 ) {
			min_price_range=4;
			max_price_range=7;
			$("#min_price").val(min_price_range);
			$("#max_price").val(max_price_range);
		}

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 4.0,
		max: 7.0,
		values: [4.0, 7.0],
		step: 0.1,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }

			$("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 4.0));
	  $("#max_price").val($("#slider-range").slider("values", 7.0));

	});

	$("#slider-range,#price-range-submit").click(function () {

	  var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();

	  /*$("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");*/
	});

});




$(document).ready(function(){

	$('#price-range-submit').hide();

	$("#min_price3,#max_price3").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price3").val());

	  var max_price_range = parseInt($("#max_price3").val());

	  if (min_price_range > max_price_range) {
		$('#max_price3').val(min_price_range);
	  }

	  $("#slider-range3").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$("#min_price3,#max_price3").on("paste keyup", function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price3").val());

	  var max_price_range = parseInt($("#max_price3").val());

	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;

			$("#min_price3").val(min_price_range);
			$("#max_price3").val(max_price_range);
	  }

	  $("#slider-range3").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range3").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max:50000,
		values: [0, 50000],
		step: 10,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }

		  $("#min_price3").val(ui.values[0]);
		  $("#max_price3").val(ui.values[1]);
		}
	  });

	  $("#min_price3").val($("#slider-range3").slider("values", 0));
	  $("#max_price3").val($("#slider-range3").slider("values", 50000));

	});

	$("#slider-range2,#price-range-submit").click(function () {

	  var min_price = $('#min_price3').val();
	  var max_price = $('#max_price3').val();

	  /*$("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");*/
	});

});