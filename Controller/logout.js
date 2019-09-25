$(document).ready(function () {  

  var tok=localStorage.getItem('token');
  $.ajax({
    type: 'get',
    url: 'http://localhost:1111/user/me',
    beforeSend: function(xhr) {
      if (tok) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
      }
    },
    success: function(data) {
       
        //location.href = "userhome.html"
    },
    error: function() {
      alert("Sorry, you are not logged in.");
      location.href = "login.html";
    }
  });

$("#logout").click(function(){
  
    $.ajax({
 type: 'post',
 url: 'http://localhost:1111/users/logout',
 beforeSend: function(xhr) {
   if (tok) {
     xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
   }
 },
 success: function(data) {
   alert("Logging Out");
   location.href="login.html";
                                 
    },
 error: function() {
  alert("Sorry, you are not logged in.");


 }
});
  }) 
});