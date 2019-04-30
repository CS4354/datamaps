$(function () {
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    $("#selectedYear").change(function () {
      $.each($(".form-control option:selected"), function () {
        $.ajax({
          url: Url,
          type: "GET",
          success: function (result) {
            // Conerting it to JSON string
            var data = JSON.stringify(result);
            // Convert it back to object type
            var data = JSON.parse(data);
            // bubbles require [] and radius, lat, lng
            for (let i = 0; i < data.length; i++) {
              data[i].radius = 10;
              data[i].latitude = 31.96;
              data[i].longitude = -99.90;
              data[i].name = "testing";
            }
  
            // console.log(data[1]);
            // const dataArray = Object.values(data);
            map.bubbles(data, {
              bubblesConfig: {
                popupOnHover: true,
                popupTemplate: function (geo, data) {
                  return ['<div class="hoverinfo"><strong>' + data.id + '</strong>',
                    '<br/>Payload: ' + data.name + ' kilotons',
                    '<br/>Country: ' + data.title + '',
                    '</div>'
                  ].join('');
                }
              }
            });
          },
          error: function (error) {
            console.log('Error: ' + error)
          }
        })
      })
    })
  });