 
      $(document).ready(function () {  
            
var tok = localStorage.getItem('token');
alert(tok)
       var id;
   
        $.ajax({
     type: 'get',
     url: 'http://localhost:1111/user/me',
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
       }
     },
     success: function(data) {

        $('#ID_user').val(data._id);
        $('#Firstname').val(data.Firstname); 
        $('#Lastname').val(data.Lastname);
        $('#Username').val(data.Username);
         $('#Email').val(data.Email);  
          $('#Address').val(data.Address); 
          $('#Phone').val(data.Phone); 
          $('#Password').val(data.Password);
          $('#Confpassword').val(data.Confpassword);
          id = data._id;   
          console.log(id);                                                                           
     },
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   });
 
   $("#update").click(function (e) {
                e.preventDefault();

                Firstname = $("#Firstname").val();
                Lastname = $("#Lastname").val();
                Username = $("#Username").val();
                Email = $("#Email").val();
                Address = $("#Address").val();
                Phone = $("#Phone").val(); 
                Password = $("#Password").val();
                Confpassword = $("#Confpassword").val();                                       
                
                data1 = {
                    'id' :id,
                    'Firstname': Firstname,
                    'Lastname': Lastname,
                    'Username': Username,
                    'Email': Email,
                    'Address': Address,
                    'Phone' : Phone,
                    'Password': Password,
                    'Confpassword': Confpassword
                    
                }
                console.log(data1);

                $.ajax({
                    type: "PUT",
                    url: "http://localhost:1111/profileupdate",
                    data: data1,
                    success: function (result) {
                        alert(result);
                    },
                    beforeSend: function (xhr) {
                    if (tok) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                    }
                },
                });

            });
    }); 
