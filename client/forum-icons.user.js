// ==UserScript==
// @name        LoL Forum Icons
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @updateURL   https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @version     0.0.2
// @run-at      document-start
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js
// ==/UserScript==

function setCookie(name, value, expireDays)
{
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    document.cookie = name + "=" + escape(value) + ((expireDays == null) ? "" : ";expires=" + expireDate.toUTCString());
}

function getCookie(name)
{
	var value = document.cookie;
	var start = value.indexOf(" " + name + "=");
	if (start == -1)
	{
		start = value.indexOf(name + "=");
	}
	if (start == -1)
	{
		value = null;
	}
	else
	{
		start = value.indexOf("=", start) + 1;
		var end = value.indexOf(";", start);
		if (end == -1)
		{
			end = value.length;
		}
		value = unescape(value.substring(start, end));
	}
	return value;
}

//setCookie("testtesttest", "abc", 1);
//alert(getCookie("testtesttest"));


$(document).ready(function () {
	var callbackFunction = "(function (json) { $('big').filter(function(){ return $(this).text() === json.name;}).parent().find('img.user_summoner_icon').attr('src', 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg').parent().find('span.left_orb').text(json.summonerLevel); })";
	callbackFunction = callbackFunction.replace(/\+/g, '%2B');
	
	var match = document.URL.match(/(na)|(euw)|(eune)|(br)/i);
	if (match != null) // Server found
	{
		var server = match[0];
		//$('#lol-pvpnet-bar-inner').append($('<div style="line-height: 30px;">Server found: '+server+'</div>'));
		
		// get all Left items except those of rioters.
		var allLeft = $('.forum_post img.user_summoner_icon').filter($('img[src="lol_theme/img/unknown_icon.jpg"]')).parent().parent().parent().parent();

		allLeft.each(function(i, e) {
			var name = $(e).find('big').text();
			
			var image = $(e).find('img.user_summoner_icon');
			var url = 'http://passwd.ohost.de/lcapi/getSummoner.php?summoner=' + name + '&server=' + server + '';			

			$.ajax({
				type: 'GET',
				url: url,
				async: true,
				jsonpCallback: callbackFunction,
				contentType: "text/javascript",
				dataType: 'jsonp',
			});

		});
	}
	else // Server not found
	{}
});