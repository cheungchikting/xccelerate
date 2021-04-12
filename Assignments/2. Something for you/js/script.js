$(function () {

  $("#btn").on("click", function (e) {

    e.preventDefault();
    let d = $("#d").val()
    let vtype = $("#vtype").val()
    console.log(vtype)
    let allDetail = $.get(`https://api.data.gov.hk/v1/carpark-info-vacancy?data=%3Cparam%3E&vehicleTypes=${vtype}&carparkIds=%3Cparam%3E&extent=%3Cparam%3E&lang=%3Cparam%3E`);
    let vacan = $.get(`https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy&vehicleTypes=${vtype}&carparkIds=%3Cparam%3E&extent=%3Cparam%3E&lang=%3Cparam%3E`);
    let combine = $.when(allDetail, vacan);
    combine.done(function (x, y) {
        let dist = x[0].results.filter(eachItem => eachItem.district == `${d}`)
        let parkId = y[0].results.map(item => item.park_Id)
        let distvacan = dist.filter(each => parkId.indexOf(each.park_Id) !== -1)


        $("form").append(`${distvacan.length} results have been found`)
        if (distvacan.length > 0) {
          for (let each of distvacan) {
            for (let item of y[0].results) {
              if(each.park_Id == item.park_Id) {
                $("#result").append(
                `<div class='card'>
                <div class='card-body'>
                <h4 class='card-title'>${each.name}</h4>
                <p class='card-text'><strong>Address:</strong> ${each.displayAddress}<br> </p>
                <p class='card-text'><strong>Vacancy:</strong> ${item[vtype][0].vacancy}<br> </p>
                <a href="${each.website}" target="_blank">Check out their website for more info.<br></a>
                <iframe src="https://maps.google.com/maps?q=${each.latitude},${each.longitude}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                </div>`)
              }
            }
          }
        }
      })
      .fail(function (x, y) {
        console.log("Ajax failed")
      })
      .always(function (x, y) {
        console.log("The function is running")
      })
  })

})

