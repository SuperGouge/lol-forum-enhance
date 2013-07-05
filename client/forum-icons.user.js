// ==UserScript==
// @name        LoL Forum Icons
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @updateURL   https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @version     0.1.3
// @run-at      document-end
// @grant       none
// ==/UserScript==

function addGlobalStyle(css)
{
	try {
		var elmHead, elmStyle;
		elmHead = document.getElementsByTagName('head')[0];
		elmStyle = document.createElement('style');
		elmStyle.type = 'text/css';
		elmHead.appendChild(elmStyle);
		elmStyle.innerHTML = css;
	} catch (e) {
		if (!document.styleSheets.length) {
			document.createStyleSheet();
		}
		document.styleSheets[0].cssText += css;
	}
}

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

function countAllPosts()
{
	return $('.forum_post img.user_summoner_icon').parent().parent().parent().parent().length;
}

function replaceAvatars()
{
	var callbackFunction = "(function (json) { $('big').filter(function(){ return $(this).text() === json.name;}).parent().find('img.user_summoner_icon').attr('src', 'http://img.lolking.net/shared/riot/images/profile_icons/profileIcon' + json.profileIconId + '.jpg').parent().find('span.left_orb').text(json.summonerLevel); })";
	callbackFunction = callbackFunction.replace(/\+/g, '%2B');

	// get all Left items except those of rioters.
	var allLeft = $('.forum_post img.user_summoner_icon').filter($('img[src="lol_theme/img/unknown_icon.jpg"]')).parent().parent().parent().parent();
	allLeft.each(function(i, e) {
		var name = $(e).find('big').text();
		var image = $(e).find('img.user_summoner_icon');
		
		// TODO: level 1 caching
		
		// level 2 caching
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

function postCountChanged()
{
	replaceAvatars();
}

function getServer()
{
	// get the server from url
	var match = document.URL.match(/(na)|(euw)|(eune)|(br)/i);
	if (match != null) // server found
	{
		return match[0];
	}
	else
	{
		return null;
	}
}

//setCookie("test", "0", 1);
//alert(getCookie("test"));


// create an observer for the #posts div instance
var observerPostsOld = 0;
var observerPostsInitialized = false;
var observerTarget = document.querySelector('#posts');
var postsObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		var observerPostsNew = countAllPosts();
		if ((observerPostsInitialized) && (observerPostsNew != observerPostsOld)) postCountChanged();
	});
});
var observerConfig = { childList: true, subtree: true };

// css style changes
addGlobalStyle("div.panel > div {" + 
					"min-width: 640px !important;" +
					"width: auto !important;" +
					"max-width: none !important;" +
				"}" +
				"textarea#vB_Editor_QR_textarea {" +
					"width: 100% !important;" +
					"resize: vertical !important;" +
					"min-height: 100px !important;" +
				"}");

// find server
var server = getServer();
if (server != null) // server found
{
	// replace the summoner images and levels
	replaceAvatars();
	
	// initialize observer counts and mark as ready
	observerPostsOld = countAllPosts();
	observerPostsInitialized = true;
	
	// start observing #posts
	postsObserver.observe(observerTarget, observerConfig);
}
else // server not found
{
	// ...
}