$('document').ready(function () {
  // define url
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      // if status is ok, add class
      $('#api_status').addClass('available');
    } else {
      // if status is not ok remove class
      $('#api_status').removeClass('available');
    }
  });
});
