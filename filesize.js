$(document).ready(function() {
 $(form).on('submit', function(sub){
   event.stopPropagation();
	 event.preventDefault();
   $(this).ajaxSubmit({
     error: function(xhr) {
       alert("Error: " + xhr.status)
     }
     success: function(response) {
       console.log(response)
       alert("Success, file size is: " + response.size)
     }
   })
   return false
 })
};
