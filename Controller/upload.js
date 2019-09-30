
         $(document).ready(function () { 
           
            var tok = localStorage.getItem('token');
            var idas;
            var urlparams=new URLSearchParams(window.location.search);
            var jobid=urlparams.get("id");
           // alert(tok);
            $.ajax({
                type: 'get',
                url: 'http://localhost:1111/user/me',
                beforeSend: function (xhr) {
                  if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                  }
                },
                success: function (data) {
                  
                  $('#Username').val(data.Username);
                 $('#Email').val(data.Email);  
                 idas = data._id;   
                              alert(idas); 
                
                },
                error: function () {
                  alert("Sorry, you are not logged in.");
                }
              });
    
              $('#Submit').click(function (e) { 
                e.preventDefault();
           
                Username = $("#Username").val();
               Email = $("#Email").val();
                Education = $("#Education").val();
            Qualifications = $("#Qualifications").val();
          Experience = $("#Experience").val();
              
                data = {
               "Username" : Username,
               "Email" : Email,
                "Education" : Education,
                "Qualifications" : Qualifications,
                "Experience" : Experience,
                "jid":jobid,
                "userid":idas
        
               
                }
                console.log(data);
                            
        if(Education == "" || Qualifications == "" || Experience == "") {
          alert("Please Fill out the required fields!!");
        }
        
        else {
                                
                         $.ajax({  
                             url: 'http://localhost:1111/addcv',
                             type: 'post',  
                             dataType: 'json',  
                             data:data,  
                             success: function (res, textStatus, xhr) {  
                               
                                     alert('Your personal details along with CV has been received.');          
                            location.href="showjobs.html";            
                             },  
                             error: function (xhr, textStatus, errorThrown) {  
                                 console.log('Error in Operation');  
                             }  
                         });
                        }  
                     });
    });

        



