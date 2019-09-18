
         $(document).ready(function () {  
     
    
        $('#register').on('click', function (e) { 
        e.preventDefault();

        Firstname = $("#Firstname").val();
        Lastname = $("#Lastname").val();
        Email= $("#Email").val();
        Username = $("#Username").val(); 
        Address= $("#Address").val();
        Phone= $("#Phone").val();
        Password= $("#Password").val();
        Confpassword= $("#Confpassword").val();
        data = {
        "Firstname" : Firstname,
        "Lastname" : Lastname,
        "Email":Email,
        "Username" : Username,
        "Address":Address,
        "Phone":Phone,
        "Password":Password,
        "Confpassword":Confpassword
        }
        console.log(data);
        if(Firstname == "" || Lastname == "" || Email == "" ||Username == "" || Address == "" || Phone == "" || Password == "" || Confpassword == "") {
          alert("Please Fill out the required fields!!");
        }
        else if(Password !== Confpassword){
            alert('Password and Confirm password do not match.');
        }
        else {
    
                        
                 $.ajax({  
                    
                     url: 'http://localhost:1111/register',
                    type: 'post', 
                     dataType: 'json',  
                     data:data,  
                     success: function (res, textStatus, xhr) {  
                        console.log('Success');
                             alert('User Registered Successfully');          
                    location.href="login.html";            
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                     }  
                 });  
               }
             });
    });
             
 