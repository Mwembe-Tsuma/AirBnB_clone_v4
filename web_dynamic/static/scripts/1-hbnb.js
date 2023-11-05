$(document).ready(function () {
  const amenities = {};

  $('input[type=checkbox').change(function () {
    const amenity_id = $(this).data('name');
    // check if checkbox is checked
    if ($(this).is(':checked:')) {
      amenities[amenity_id] = true;
    } else {
      delete amenities[amenity_id];
    }
    // empty string to store selected amenities
    let amenitiesList = '';
    for (const id in amenities) {
      if (amenitiesList === '') amenitiesList += id;
      else amenitiesList += ', ' + id;
    }
    // update the h4 tag inside the div Amenities
    // with the list of Amenities checked
    $('div.amenities.h4').text(amenitiesList);
  });
});
