
        $(document).ready(function () {
        $.getJSON('http://localhost:1111/addjobs', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                     if(res[index].status=="approved"){
                    $('#tablea').append("<tr><td>"+res[index].Title+"</td><td>" +
                        res[index].Description+"</td><td>" +
                        res[index].Category+"</td><td>" +
                        res[index].Type+"</td><td>" +
                        "</td><td>"
						+
						
                       "<Button class='delete' del_id='"+res[index]._id+"'>Cancel</Button></br>    </td></tr>" 
						
                );
        }else{
          $('#tablea').append("<tr><td>"+res[index].Title+"</td><td>" +
          res[index].Description+"</td><td>" +
          res[index].Category+"</td><td>" +
          res[index].Type+"</td><td>" +
          "<Button class='approve' approve_id='"+res[index]._id+"'>Approve</Button></br>" +"</td><td>"
+

         "<Button class='delete' del_id='"+res[index]._id+"'>Cancel</Button></br>    </td></tr>" 

  );
          
        }
      
      });
        });

          $('#tablea').on('click','.delete',function(){
                id=$(this).attr('del_id');
                $.ajax({
                  url:'http://localhost:1111/jobdelete/'+id,
                  type:'delete',
                  success:function(res){
                    alert('Job Cancelled');
                      if(res.message=="success"){
                        location.href="adminjobdetails.html"
                      }
                  },
                  error: function(xhr){

                  }
                })
            })
			
			
			
			
			 $('#tablea').on('click','.approve',function(){
                id=$(this).attr('approve_id');
                $.ajax({
                  url:'http://localhost:1111/approvejobs/'+id,
                  type:'post',
                  success:function(res){
                    alert('Approved');
                      if(res.message=="success"){
                        location.href="adminjobdetails.html"
                      }
                  },
                  error: function(xhr){

                  }
                })
            })
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			

      });
 