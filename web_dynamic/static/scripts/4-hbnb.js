$('document').ready(function () {
	const amenities = {};
	$('INPUT[type="checkbox"]').change(function () {
		if ($(this).is(':checked:')) {
			amenities[$(this).attr('data_id')] = $(this).attr('data_name');
		} else {
			delete amenities[$(this).attr('data_id')];
		}
		$('.amenities H4').text(Object.values(amenities).join(', '));
	});
	$('BUTTON').click(function () {
		console.log(JSON.stringify(amenities));
	});
});
