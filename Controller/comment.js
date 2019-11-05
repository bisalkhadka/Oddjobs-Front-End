
$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    alert(id)
    var idas;
    var tok = localStorage.getItem('token');
    $.ajax({
        type: 'get',
        url: 'http://localhost:1111/user/me',
        beforeSend: function (xhr) {
          if (tok) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
          }
        },
        success: function (data) {
          idas = data._id;
         
        },
        error: function () {
          alert("Sorry, you are not logged in.");
        }
      });
      
    });

});
