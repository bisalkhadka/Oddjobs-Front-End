
        $(document).ready(function () {

          

        // $.getJSON('http://localhost:1111/cv/'+id, function (res) {
        // console.log(res)

        //            $.each(res.cv, function (index) {
        //             $('#tablea').append("<tr><td>"+res.cv[index].Email+"</td><td>" +
        //            res.cv[index].Username+"</td><td>" +
        //            res.cv[index].fileToUpload+"</td><td>" +
        //            "<Button class='details' det_id="+res[index]._id+"> Details</Button></br></td><td>"+
        //             "<Button class='delete' del_id="+res[index]._id+"> Delete</Button></br></td></tr>"
        //         );
        //     });
        // });

        $.getJSON('http://localhost:1111/cv', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                    $('#tablea').append("<tr><td>"
                    
                    +
                   
                    res[index].Email+"</td><td>" +
                   res[index].Username+"</td><td>" +
                   res[index].Education+"</td><td>" +
                   
                   res[index].Qualifications+"</td><td>" +
                   res[index].Experience+"</td><td>"
                   + res[index].jid.Category+"</td><td></td></tr>"
                );
            });
        });



         $('#tablea').on('click','.details',function(){
              id=$(this).attr('det_id');
                $.ajax({
                  url:'http://localhost:1111/cv/'+id,
                  type:'get',
                  success:function(files){
                      if(files.message=="success"){
                        location.href="pdf.html"
                      }
                  $('#fileToUpload').attr('src',"http://localhost:4444/"+files.fileToUpload); 
             },           

     error: function(a) {
       alert("Sorry, you are not logged in.");
     }
   });
              });
         //    $('#tablea').on('click','.delete',function(){
         //        id=$(this).attr('del_id');
         //        $.ajax({
         //          url:'http://localhost:4444/cvdelete/'+id,
         //          type:'delete',
         //          success:function(res){
         //            alert('CV deleted Successfully');
         //              if(res.message=="success"){
         //                location.href="cvinbox.html"
         //              }
         //          },
         //          error: function(xhr){

         //          }
         //        })



         //    })
        });
 