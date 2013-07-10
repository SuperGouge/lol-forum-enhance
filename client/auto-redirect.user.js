// ==UserScript==
// @name        LoL Auto Redirect
// @namespace   https://github.com/philippwiddra
// @description Automatically skips Riots redirect-page
// @include     *.leagueoflegends.com/board/redirect.php*
// @version     0.1.0
// @run-at      document-end
// ==/UserScript==

$(document).ready(function () {
	var delay = false;
	var b = $('div.btn-container').not('div.red-btn-container').find('a.confirm-link');	
	if (delay) {
		// Delayed:
		b.text('I understand and I wish to continue (3)');
		setTimeout(function(){
			b.text('I understand and I wish to continue (2)');
		}, 1000);
		setTimeout(function(){
			b.text('I understand and I wish to continue (1)');
		}, 2000);
		setTimeout(function(){
			b.text('I understand and I wish to continue (0)');
			window.location.replace(b.attr('href'));
		}, 3000);
	} else {
		// Direct:
		window.location.replace(b.attr('href'));
	}
});