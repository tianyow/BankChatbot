$(function () {

	// Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // File Upload label
  $('input[type="file"]').change(function(e){
  	var fileName = e.target.files[0].name;
  	$('.custom-file-label').html(fileName);
  });
  
})