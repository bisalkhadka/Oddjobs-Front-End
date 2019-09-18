 
        $(document).ready(function () {  
          var Email;
          var Password;

         
          
          $('#btnlogin').click(function (e) {  
            e.preventDefault();

       
              Email = $("#Email").val();
              Password = $("#Password").val();
             
              data = {
              "Email" : Email,
              "Password" : Password 
              } 
              if(Email == "" || Password == "" ) {
                alert("Please Fill out the required fields!!");
              }
              else {
            

            $.ajax({  
              url: 'http://localhost:1111/login',
              type: 'post',  
              dataType: 'json',  
              data:data,  
              success: function (res, textStatus, xhr) {  
                if(res.token!=null){
                 localStorage.setItem('token', res.token); 
                if(res.userdata.usertype=="admin"){
              location.href="admin.html"
              alert("Welcome to admin panel")
                } else if(res.userdata.usertype=="user"){
                  location.href="userhome.html"
                  alert("Welcome to oddjobs")
                }
                }
                else{
                  alert("Invalid Login");  
                }          
              },  
              error: function (xhr, textStatus, errorThrown) {  
                alert("Invalid Login");
                console.log('Error in Operation');  
              }  
            }); 
              }
          }); 
        });  
      
