
$(document).ready(function () {
  var idas;
  var tok = localStorage.getItem('token');


  var urlparams = new URLSearchParams(window.location.search);
  var id = urlparams.get("id");

  var lat = "";
  var log = "";

  $.ajax({
    type: 'get',
    url: 'http://localhost:1111/user/me',
    beforeSend: function (xhr) {
      if (tok) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
      }
    },
    success: function (data) {
      idas = data._id;
      console.log(idas)
      $('#ratetable').append(

        '<tr><td><form>' + '<select class="ratingscar ' + idas + '">' + '<option value="1">1</option>' + '<option value="2">2</option>'
        + ' <option value="3">3</option>' + '<option value="4">4</option>' + '<option value="5">5</option>' + '</select>' + '</form>' + '</td><td>' +
        "<Button class=' btn btn-success rate' btnrate= '"+ idas +"'>Rate</Button></br></td></tr>"
      );

    },
    error: function () {
      alert("Sorry, you are not logged in.");
    }
  });

  $.getJSON('http://localhost:1111/jobdetails/' + id, function (res) {

    $.each(res.add, function (index) {

      alert(res.add[index].userid);
      alert(idas)
      if (res.add[index].userid == idas) {


        $('#tablea').append(
          "<img src='http://localhost:1111/" + res.add[index].fileToUpload + "' height ='400px' width =  '100%'>" +
          "<br>"

          + res.add[index].Title + "<br>" + res.add[index].Description + "<br>"
          + res.add[index].Category +
          "<br>" + res.add[index].Type + res.add[index].Location + "<br>"
          + res.add[index].JobDt + "<br>" + res.add[index].Email + "<br>"

          + "</br>"


        );
        log = res.add[index].Longitude;
        lat = res.add[index].Latitude;

        L.mapbox.accessToken = 'pk.eyJ1IjoieXVtYXNub3IiLCJhIjoiY2p4a3A5Zmc0MDQ0bjNub3Vwcjc2dmtpYyJ9.KF1z3_YMdvlCciM2whLPaw';
        var map = L.mapbox.map('map')

          .setView([lat, log], 9)
          .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
        L.marker([lat, log]).addTo(map);

      }
      else if (res.add[index].userid != idas) {


        $('#tablea').append(
          "<img src='http://localhost:1111/" + res.add[index].fileToUpload + "' height ='400px' width =  '100%'>" +
          "<br>"

          + res.add[index].Title + "<br>" + res.add[index].Description + "<br>"
          + res.add[index].Category +
          "<br>" + res.add[index].Type + res.add[index].Location + "<br>"
          + res.add[index].JobDt + "<br>" + res.add[index].Email + "<br>"

          +
          "<a href='upload.html?id=" + res.add[index]._id + "' class='btn btn-success'>Apply now</a>" + "</br>"


        );
        log = res.add[index].Longitude;
        lat = res.add[index].Latitude;

        L.mapbox.accessToken = 'pk.eyJ1IjoieXVtYXNub3IiLCJhIjoiY2p4a3A5Zmc0MDQ0bjNub3Vwcjc2dmtpYyJ9.KF1z3_YMdvlCciM2whLPaw';
        var map = L.mapbox.map('map')

          .setView([lat, log], 9)
          .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
        L.marker([lat, log]).addTo(map);

      }
    });
  });





  $('#ratetable').on('click', '.rate', function () {
    id = $(this).attr('btnrate');
    rate = $('.' + id).val();
    data = {

      jid: id,
      rating: rate,
      userid: idas

    }
    console.log(data)

    alert('success')

    $.ajax({
      url: 'http://localhost:1111/jobrating',
      type: 'post',
      dataType: 'json',
      data: data,
      beforeSend: function (xhr) {
        if (tok) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
        }
      },
      success: function (data, textStatus, xhr) {

        alert("success");

      },
      error: function (xhr, textStatus, errorThrown) {
        console.log('Error in Operation');
      }
    });

  });
  $('#comment').click(function (e) {

    e.preventDefault();
    var review = $('#com').val();
    // username = $("#Username").val();
    var data = {
      'JobID': id,
      'User': idas,
      'Review': review
    };
    console.log(data);


    $.ajax({
      type: 'POST',
      url: 'http://localhost:1111/comments',
      data: data,
      success: function (res) {

        location.href = 'jobview.html?id=' + id;
      },
      error: function () {
        alert("Sorry, you are not logged in.");
      }
    });
  });

});
