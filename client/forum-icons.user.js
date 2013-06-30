// ==UserScript==
// @name        LoL Forum Icons
// @namespace   ButWhyMe
// @include     *.leagueoflegends.com/board/*
// @version     1
// ==/UserScript==



$(document).ready(function () {
	var callbackFunction = "(function (json) { $('big').filter(function(){ return $(this).text() === json.name;}).parent().find('img.user_summoner_icon').attr('src', 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg').parent().find('span.left_orb').text(json.summonerLevel); })";
	//var callbackFunction = "(function (json) { $('big').filter(function(){ return $(this).text() === json.name;}).parent().find('img.user_summoner_icon').attr('src', 'http://www.elophant.com/images/profile-icon/' + json.profileIconId + '.jpg').parent().find('span.left_orb').text(json.summonerLevel); })";
	callbackFunction = callbackFunction.replace(/\+/g, '%2B');
	
	var match = document.URL.match(/(na)|(euw)|(eune)|(br)/i);
	if (match != null)
	{
		var server = match[0];
		//alert(server);
		//$('#lol-pvpnet-bar-inner').append($('<div style="line-height: 30px;">Server found: '+server+'</div>'));
		
		// get all Left items except those of rioters.
		var allLeft = $('.forum_post img.user_summoner_icon').filter($('img[src="lol_theme/img/unknown_icon.jpg"]')).parent().parent().parent().parent();

		allLeft.each(function(i, e) {
			//var name = encodeURI($(e).find('big').text());
			var name = $(e).find('big').text();
			
			var image = $(e).find('img.user_summoner_icon');
			var url = 'http://passwd.ohost.de/lcapi/getSummoner.php?summoner=' + name + '&server=' + server + '';
			
			//alert(name+' - '+$(e).find('big').text());
			
			//.attr('src', 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg')
			//.find('img.user_summoner_icon')
			

			$.ajax({
				type: 'GET',
				url: url,
				async: true,
				jsonpCallback: callbackFunction,
				//contentType: "application/json",
				contentType: "text/javascript",
				dataType: 'jsonp',
				//success: function(json) {
					//images.push({'img': image, 'src': 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg'});
					//alert('name: '+json.name+'\nicon: '+json.profileIconId+'\nlevel: '+json.summonerLevel);
					//o = new Object();
					//o.img = image;
					//o.src = 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg';
					//images.push(o);
					//image.attr('src', "http://img.lolking.net/shared/riot/images/profile_icons/profileIcon1.jpg");
				//},
				//error: function(e) {
				   //alert(e.message);
				//}
			});

		});
	}
	else
	{
		//alert('Server not found.');
		//$('#lol-pvpnet-bar-inner').append($('<div>Server not found.</div>'));
	}
});