
         $(document).ready(function () { 

           $('#Submit').click(function (e) { 
        e.preventDefault();

        Name = $("#Name").val();
        Email = $("#Email").val();
        Phone= $("#Phone").val();
        Message= $("#Message").val();
        data = {
        "Name" : Name,
        "Email" : Email,
        "Phone" : Phone,
        "Message":Message
        }
        console.log(data);
    
                        
                 $.ajax({  
                     url: 'http://localhost:1111/contact',
                     type: 'post',  
                     dataType: 'json',  
                     data:data,  
                     success: function (res, textStatus, xhr) {  
                             alert('Your message has been sent. We will respond to you soon');          
                    location.href="contact.html";            
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                     }  
                 });  
             });


             }); 
