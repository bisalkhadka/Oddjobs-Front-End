
        $(document).ready(function () {
        $.getJSON('http://localhost:1111/users', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                    $('#tablea').append("<tr><td>"+res[index].Firstname+"</td><td>" +
                        res[index].Lastname+"</td><td>" +
                        res[index].Email+"</td><td>" +
                        res[index].Username+"</td><td>" +
                        res[index].Address+"</td><td>" +
                        res[index].Phone+"</td><td>" +
                        res[index].usertype+"</td><td>" +
                        "<Button class='delete' del_id='"+res[index]._id+"'>Delete</Button></br></td></tr>"
                );
            });
        });

          $('#tablea').on('click','.delete',function(){
                id=$(this).attr('del_id');
                $.ajax({
                  url:'http://localhost:1111/userdelete/'+id,
                  type:'delete',
                  success:function(res){
                    alert('User deleted Successfully');
                      if(res.message=="success"){
                        location.href="adminuserdetails.html"
                      }
                  },
                  error: function(xhr){

                  }
                })
            })

      });
 