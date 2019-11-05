
         $(document).ready(function () { 
            var tok = localStorage.getItem('token');
            var ids;
            $.ajax({
                type: 'get',
                url: 'http://localhost:1111/user/me',
                beforeSend: function(xhr) {
                  if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                  }
                },
                success: function(data) {
    
                     ids = data._id;   
                     alert(ids);                                    
                },
                error: function() {
                  alert("Sorry, you are not logged in.");
                }
              });

    let imageFile = '';
    $("#fileToUpload").on('change', function () {
        let formData = new FormData();
        let files = $("#fileToUpload").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:1111/uploadImg',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFile = data.filename;
                // $("#add-hero").prop("disabled", false);
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });

           $('#Submit').click(function (e) { 
        e.preventDefault();

        Title = $("#Title").val();
        Description = $("#Description").val();
        Category= $("#Category").val();
        Type= $("#Type").val();
        Location= $("#Location").val();
        Latitude = $("#Latitude").val();
        Longitude = $("#Longitude").val();
        JobDt= $("#JobDt").val();
        Email= $("#Email").val();
        data = {
        "fileToUpload" : imageFile,
        "Title" : Title,
        "Description" : Description,
        "Category" : Category,
        "Type" : Type,
        "Location" : Location,
        "Latitude" : Latitude,
        "Longitude" : Longitude,
        "JobDt" : JobDt,
        "Email" : Email,
        "userid":ids
        }
        console.log(data);
    
                        
        if(imageFile == "" || Title == "" || Description == "" ||Category == "" || Type == "" || Location == "" || JobDt == "" || Email == "") {
            alert("Please Fill out the required fields!!");
          }
          
          else {
                 $.ajax({  
                     url: 'http://localhost:1111/addjobs',
                     type: 'post',  
                     dataType: 'json',  
                     data:data,  
                     success: function (res, textStatus, xhr) {  
                             alert('Your job specification is posted');          
                    location.href="showjobs.html";            
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                     }  
                 });  
                }
             });

            
             }); 
