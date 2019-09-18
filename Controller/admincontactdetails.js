
        $(document).ready(function () {
        $.getJSON('http://localhost:1111/contactdetails', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                    $('#tablea').append("<tr><td>"+res[index].Name+"</td><td>" +
                        res[index].Email+"</td><td>" +
                        res[index].Phone+"</td><td>" +
                        res[index].Message+"</td></tr>" 
                );
            });
        });
      });
 