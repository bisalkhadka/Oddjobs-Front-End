
        $(document).ready(function () {
        $.getJSON('http://localhost:1111/contactdetails', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                    $('#tablea').append("<tr><td>"+res[index].Name+"</td><td>" +
                        res[index].Email+"</td><td>" +
                        res[index].Phone+"</td><td>" +
                        res[index].Message+"</td><td>" +
                        "<Button class='delete' del_id='"+res[index]._id+"'>Delete</Button></br></td></tr>"
                );
            });
        });
      $('#tablea').on('click','.delete',function(){
                id=$(this).attr('del_id');
                $.ajax({
                  url:'http://localhost:1111/contactdelete/'+id,
                  type:'delete',
                  success:function(res){
                    alert('Contact message deleted Successfully');
                      if(res.message=="success"){
                        location.href="admincontactdetails.html"
                      }
                  },
                  error: function(xhr){

                  }
                })
            })


      });
 