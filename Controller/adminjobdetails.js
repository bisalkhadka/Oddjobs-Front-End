
        $(document).ready(function () {
        $.getJSON('http://localhost:1111/addjobs', function (res) {
        console.log(res)

                   $.each(res, function (index) {
                    $('#tablea').append("<tr><td>"+res[index].Title+"</td><td>" +
                        res[index].Description+"</td><td>" +
                        res[index].Category+"</td><td>" +
                        res[index].Type+"</td><td>" +
                        res[index].Location+"</td><td>" +
                        res[index].JobDt+"</td><td>" +
                        res[index].Email+"</td></tr>" 
                );
            });
        });
      });
 