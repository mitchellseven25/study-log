$('#js-drawer-btn').on('click', function(e) {
	e.preventDefault();
	$('#js-drawer-btn').toggleClass('is-checked');
	$('#js-drawer-content').slideToggle();
    $('body').toggleClass('is-fixed');
});

