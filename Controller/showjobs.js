
$(document).ready(function () {
    var tok=localStorage.getItem("token");
    
$.ajax({
    type: 'get',
    url: 'http://localhost:1111/showjobs',
    beforeSend: function(xhr) {
    if (tok) {
    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
             }
                                },
    success: function(data) {
                $.each(data,function(index){
                console.log(data[index].fileToUpload);
                if(data[index].status=="approved"){
                $("#job_detail").append(
				 
				"<div class='col-md-4' id='job_detail' >"+
                    
                    // $('#imageid').attr('src',"http://localhost:1111/"+data.fileToUpload);
                    "<img src='http://localhost:1111/"+data[index].fileToUpload + "' height ='300px' width = '100%'>"+ 
					
                  
                
					"<h5>Title" + ":" + data[index].Title +" </h5>"+
                    "<h5>Category" + ":" + data[index].Category +" </h5>"+
                    "<a href='jobview.html?id="+ data[index]._id + "' class='btn btn-pill btn-dark btn-block'>Detail</a>"+
				
                    "</div>"
                    
				
                )
                
                }}); 
                },
                error: function() {
            
                alert("Sorry, you are not logged in.");
                }
                });
   });