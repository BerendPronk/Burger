var menu = document.getElementById('menu');
var menuToggle = document.getElementById('menutoggle');

menuToggle.addEventListener('click', function() {
	if (menu.className == 'closed') {
		menu.className = '';
		menuToggle.className = 'fa fa-arrow-left';
	} else {
		menu.className = 'closed';
		menuToggle.className = 'fa fa-bars';
	}
});