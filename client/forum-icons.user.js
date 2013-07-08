// ==UserScript==
// @name        LoL Forum Icons
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @updateURL   https://github.com/philippwiddra/lol-forum-enhance/raw/master/client/forum-icons.user.js
// @version     0.1.4testing
// @run-at      document-end
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @grant       GM_info
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @require     http://code.jquery.com/jquery-2.0.2.min.js
// @resource    iconUnknown http://passwd.ohost.de/lcapi/SummonerIcons/unknown.jpg
// @resource    icon0 http://passwd.ohost.de/lcapi/SummonerIcons/0.jpg
// @resource    icon1 http://passwd.ohost.de/lcapi/SummonerIcons/1.jpg
// @resource    icon2 http://passwd.ohost.de/lcapi/SummonerIcons/2.jpg
// @resource    icon3 http://passwd.ohost.de/lcapi/SummonerIcons/3.jpg
// @resource    icon4 http://passwd.ohost.de/lcapi/SummonerIcons/4.jpg
// @resource    icon5 http://passwd.ohost.de/lcapi/SummonerIcons/5.jpg
// @resource    icon6 http://passwd.ohost.de/lcapi/SummonerIcons/6.jpg
// @resource    icon7 http://passwd.ohost.de/lcapi/SummonerIcons/7.jpg
// @resource    icon8 http://passwd.ohost.de/lcapi/SummonerIcons/8.jpg
// @resource    icon9 http://passwd.ohost.de/lcapi/SummonerIcons/9.jpg
// @resource    icon10 http://passwd.ohost.de/lcapi/SummonerIcons/10.jpg
// @resource    icon11 http://passwd.ohost.de/lcapi/SummonerIcons/11.jpg
// @resource    icon12 http://passwd.ohost.de/lcapi/SummonerIcons/12.jpg
// @resource    icon13 http://passwd.ohost.de/lcapi/SummonerIcons/13.jpg
// @resource    icon14 http://passwd.ohost.de/lcapi/SummonerIcons/14.jpg
// @resource    icon15 http://passwd.ohost.de/lcapi/SummonerIcons/15.jpg
// @resource    icon16 http://passwd.ohost.de/lcapi/SummonerIcons/16.jpg
// @resource    icon17 http://passwd.ohost.de/lcapi/SummonerIcons/17.jpg
// @resource    icon18 http://passwd.ohost.de/lcapi/SummonerIcons/18.jpg
// @resource    icon19 http://passwd.ohost.de/lcapi/SummonerIcons/19.jpg
// @resource    icon20 http://passwd.ohost.de/lcapi/SummonerIcons/20.jpg
// @resource    icon21 http://passwd.ohost.de/lcapi/SummonerIcons/21.jpg
// @resource    icon22 http://passwd.ohost.de/lcapi/SummonerIcons/22.jpg
// @resource    icon23 http://passwd.ohost.de/lcapi/SummonerIcons/23.jpg
// @resource    icon24 http://passwd.ohost.de/lcapi/SummonerIcons/24.jpg
// @resource    icon25 http://passwd.ohost.de/lcapi/SummonerIcons/25.jpg
// @resource    icon26 http://passwd.ohost.de/lcapi/SummonerIcons/26.jpg
// @resource    icon27 http://passwd.ohost.de/lcapi/SummonerIcons/27.jpg
// @resource    icon28 http://passwd.ohost.de/lcapi/SummonerIcons/28.jpg
// @resource    icon29 http://passwd.ohost.de/lcapi/SummonerIcons/29.jpg
// @resource    icon30 http://passwd.ohost.de/lcapi/SummonerIcons/30.jpg
// @resource    icon31 http://passwd.ohost.de/lcapi/SummonerIcons/31.jpg
// @resource    icon32 http://passwd.ohost.de/lcapi/SummonerIcons/32.jpg
// @resource    icon33 http://passwd.ohost.de/lcapi/SummonerIcons/33.jpg
// @resource    icon34 http://passwd.ohost.de/lcapi/SummonerIcons/34.jpg
// @resource    icon35 http://passwd.ohost.de/lcapi/SummonerIcons/35.jpg
// @resource    icon36 http://passwd.ohost.de/lcapi/SummonerIcons/36.jpg
// @resource    icon37 http://passwd.ohost.de/lcapi/SummonerIcons/37.jpg
// @resource    icon38 http://passwd.ohost.de/lcapi/SummonerIcons/38.jpg
// @resource    icon39 http://passwd.ohost.de/lcapi/SummonerIcons/39.jpg
// @resource    icon40 http://passwd.ohost.de/lcapi/SummonerIcons/40.jpg
// @resource    icon41 http://passwd.ohost.de/lcapi/SummonerIcons/41.jpg
// @resource    icon42 http://passwd.ohost.de/lcapi/SummonerIcons/42.jpg
// @resource    icon43 http://passwd.ohost.de/lcapi/SummonerIcons/43.jpg
// @resource    icon44 http://passwd.ohost.de/lcapi/SummonerIcons/44.jpg
// @resource    icon45 http://passwd.ohost.de/lcapi/SummonerIcons/45.jpg
// @resource    icon46 http://passwd.ohost.de/lcapi/SummonerIcons/46.jpg
// @resource    icon47 http://passwd.ohost.de/lcapi/SummonerIcons/47.jpg
// @resource    icon48 http://passwd.ohost.de/lcapi/SummonerIcons/48.jpg
// @resource    icon49 http://passwd.ohost.de/lcapi/SummonerIcons/49.jpg
// @resource    icon50 http://passwd.ohost.de/lcapi/SummonerIcons/50.jpg
// @resource    icon51 http://passwd.ohost.de/lcapi/SummonerIcons/51.jpg
// @resource    icon52 http://passwd.ohost.de/lcapi/SummonerIcons/52.jpg
// @resource    icon53 http://passwd.ohost.de/lcapi/SummonerIcons/53.jpg
// @resource    icon54 http://passwd.ohost.de/lcapi/SummonerIcons/54.jpg
// @resource    icon55 http://passwd.ohost.de/lcapi/SummonerIcons/55.jpg
// @resource    icon56 http://passwd.ohost.de/lcapi/SummonerIcons/56.jpg
// @resource    icon57 http://passwd.ohost.de/lcapi/SummonerIcons/57.jpg
// @resource    icon58 http://passwd.ohost.de/lcapi/SummonerIcons/58.jpg
// @resource    icon59 http://passwd.ohost.de/lcapi/SummonerIcons/59.jpg
// @resource    icon60 http://passwd.ohost.de/lcapi/SummonerIcons/60.jpg
// @resource    icon61 http://passwd.ohost.de/lcapi/SummonerIcons/61.jpg
// @resource    icon62 http://passwd.ohost.de/lcapi/SummonerIcons/62.jpg
// @resource    icon63 http://passwd.ohost.de/lcapi/SummonerIcons/63.jpg
// @resource    icon64 http://passwd.ohost.de/lcapi/SummonerIcons/64.jpg
// @resource    icon65 http://passwd.ohost.de/lcapi/SummonerIcons/65.jpg
// @resource    icon66 http://passwd.ohost.de/lcapi/SummonerIcons/66.jpg
// @resource    icon501 http://passwd.ohost.de/lcapi/SummonerIcons/501.jpg
// @resource    icon502 http://passwd.ohost.de/lcapi/SummonerIcons/502.jpg
// @resource    icon503 http://passwd.ohost.de/lcapi/SummonerIcons/503.jpg
// @resource    icon504 http://passwd.ohost.de/lcapi/SummonerIcons/504.jpg
// @resource    icon505 http://passwd.ohost.de/lcapi/SummonerIcons/505.jpg
// @resource    icon506 http://passwd.ohost.de/lcapi/SummonerIcons/506.jpg
// @resource    icon507 http://passwd.ohost.de/lcapi/SummonerIcons/507.jpg
// @resource    icon508 http://passwd.ohost.de/lcapi/SummonerIcons/508.jpg
// @resource    icon509 http://passwd.ohost.de/lcapi/SummonerIcons/509.jpg
// @resource    icon510 http://passwd.ohost.de/lcapi/SummonerIcons/510.jpg
// @resource    icon511 http://passwd.ohost.de/lcapi/SummonerIcons/511.jpg
// @resource    icon512 http://passwd.ohost.de/lcapi/SummonerIcons/512.jpg
// @resource    icon513 http://passwd.ohost.de/lcapi/SummonerIcons/513.jpg
// @resource    icon514 http://passwd.ohost.de/lcapi/SummonerIcons/514.jpg
// @resource    icon515 http://passwd.ohost.de/lcapi/SummonerIcons/515.jpg
// @resource    icon516 http://passwd.ohost.de/lcapi/SummonerIcons/516.jpg
// @resource    icon517 http://passwd.ohost.de/lcapi/SummonerIcons/517.jpg
// @resource    icon518 http://passwd.ohost.de/lcapi/SummonerIcons/518.jpg
// @resource    icon519 http://passwd.ohost.de/lcapi/SummonerIcons/519.jpg
// @resource    icon520 http://passwd.ohost.de/lcapi/SummonerIcons/520.jpg
// @resource    icon521 http://passwd.ohost.de/lcapi/SummonerIcons/521.jpg
// @resource    icon522 http://passwd.ohost.de/lcapi/SummonerIcons/522.jpg
// @resource    icon523 http://passwd.ohost.de/lcapi/SummonerIcons/523.jpg
// @resource    icon524 http://passwd.ohost.de/lcapi/SummonerIcons/524.jpg
// @resource    icon525 http://passwd.ohost.de/lcapi/SummonerIcons/525.jpg
// @resource    icon526 http://passwd.ohost.de/lcapi/SummonerIcons/526.jpg
// @resource    icon527 http://passwd.ohost.de/lcapi/SummonerIcons/527.jpg
// @resource    icon528 http://passwd.ohost.de/lcapi/SummonerIcons/528.jpg
// @resource    icon529 http://passwd.ohost.de/lcapi/SummonerIcons/529.jpg
// @resource    icon530 http://passwd.ohost.de/lcapi/SummonerIcons/530.jpg
// @resource    icon531 http://passwd.ohost.de/lcapi/SummonerIcons/531.jpg
// @resource    icon532 http://passwd.ohost.de/lcapi/SummonerIcons/532.jpg
// @resource    icon533 http://passwd.ohost.de/lcapi/SummonerIcons/533.jpg
// @resource    icon534 http://passwd.ohost.de/lcapi/SummonerIcons/534.jpg
// @resource    icon535 http://passwd.ohost.de/lcapi/SummonerIcons/535.jpg
// @resource    icon536 http://passwd.ohost.de/lcapi/SummonerIcons/536.jpg
// @resource    icon537 http://passwd.ohost.de/lcapi/SummonerIcons/537.jpg
// @resource    icon538 http://passwd.ohost.de/lcapi/SummonerIcons/538.jpg
// @resource    icon539 http://passwd.ohost.de/lcapi/SummonerIcons/539.jpg
// @resource    icon540 http://passwd.ohost.de/lcapi/SummonerIcons/540.jpg
// @resource    icon541 http://passwd.ohost.de/lcapi/SummonerIcons/541.jpg
// @resource    icon542 http://passwd.ohost.de/lcapi/SummonerIcons/542.jpg
// @resource    icon543 http://passwd.ohost.de/lcapi/SummonerIcons/543.jpg
// @resource    icon544 http://passwd.ohost.de/lcapi/SummonerIcons/544.jpg
// @resource    icon545 http://passwd.ohost.de/lcapi/SummonerIcons/545.jpg
// @resource    icon546 http://passwd.ohost.de/lcapi/SummonerIcons/546.jpg
// @resource    icon547 http://passwd.ohost.de/lcapi/SummonerIcons/547.jpg
// @resource    icon548 http://passwd.ohost.de/lcapi/SummonerIcons/548.jpg
// @resource    icon549 http://passwd.ohost.de/lcapi/SummonerIcons/549.jpg
// @resource    icon550 http://passwd.ohost.de/lcapi/SummonerIcons/550.jpg
// @resource    icon551 http://passwd.ohost.de/lcapi/SummonerIcons/551.jpg
// @resource    icon552 http://passwd.ohost.de/lcapi/SummonerIcons/552.jpg
// @resource    icon553 http://passwd.ohost.de/lcapi/SummonerIcons/553.jpg
// ==/UserScript==

function Summoner(jsonData)
{
	var that = this;
	
	// form:
	/* {
		"internalName": "butwhyme",
		"name": "ButWhyMe",
		"server": "euw",
		"acctId": 24911708,
		"profileIconId": 546,
		"revisionDate": "2013-07-08 02:04:11",
		"currentDate": "2013-07-08 12:12:01",
		"summonerLevel": 30,
		"summonerId": 21405713
	} */
  this.data = {
    internalName : null,
    name : null,
    server : null,
    acctId : null,
    profileIconId : null,
    revisionDate : null,
    currentDate : null,
    summonerLevel : null,
    summonerId : null
  };
	this.toJsonString = function()
	{
		return JSON.stringify(that.data);
	}
	this.fromJsonString = function(json)
	{
		that.data = JSON.parse(json);
	}
}

function Level1Cache()
{
  var that = this;
  var cachedSummoners = new Array();
  var cachedSummonerString = "SummonerCache";
  var level2Cache = new Level2Cache();

	this.getSummoner = function(name, server, done)
	{
    var result = null;
    for (var i = 0; i < cachedSummoners.length; i++)
    {
      var s = cachedSummoners[i];
      if (s.data.name == name && s.data.server == server)
      {
        result = s;
      }
    }
    
    if (result != null)
    {
      // Summoner found.
      
      // return summoner
      done(result);
    }
    else
    {
      // Summoner not found.
      
      // Perform a level2Cache call
      level2Cache.getSummoner(name, server, function(s) {
        // save summoner for this function
        var summoner = s;
        
        // add summoner to level1Cache
        addSummoner(summoner);
        
        // return summoner normally
        done(summoner);
      });
    }
	}
  
  this.loadCache = function()
  {
    cachedSummoners = JSON.parse(GM_getValue(cachedSummonerString, "[]"));
  }
  
  this.cleanCache = function()
  {
    // get yesterdays Date
    var d = new Date();
    d.setDate(d.getDate()-1);
    
    // new output array without old summoners
    var temp = new Array();
    
    for (var i = 0; i < cachedSummoners.length; i++)
    {
      var s = cachedSummoners[i];
      
      // is Summonerdata not older than a day
      if (s.data.currentDate > d)
      {
        temp.push(s);
      }
    }
    
    // only persist newer summoners
    cachedSummoners = temp;
  }
  
  this.removeCache = function()
  {
    GM_deleteValue(cachedSummonerString);
  }
  
  this.saveCache = function()
  {
    GM_setValue(cachedSummonerString, JSON.stringify(cachedSummoners));
  }
  
  function addSummoner(summoner)
  {
    cachedSummoners.push(summoner);
  }
}

function Level2Cache()
{
    var getSummonerUrl = "http://passwd.ohost.de/lcapi/getSummoner.php";
	
	this.getSummoner = function(name, server, done)
	{
		GM_xmlhttpRequest({
			method: "GET",
			url: getSummonerUrl + "?summoner=" + name + "&server=" + server + "",
			onload: function(response) {
				var s = new Summoner();
        s.fromJsonString(response.responseText);
				done(s);
			}
		});
	}
}

//var img = document.createElement('img');
//img.src = GM_getResourceURL("icon2");
//document.body.appendChild(img);
//GM_openInTab("http://www.google.de/");
//GM_info
//GM_info.version // Greasemonkey-Version
//GM_registerMenuCommand("Say hi", function() { alert("Hi!"); }, "s");

/*
var level1Cache = new Level1Cache();
level1Cache.removeCache();
level1Cache.loadCache();
level1Cache.getSummoner("ButWhyMe", "euw", function(s) {
    alert(s);
    level1Cache.saveCache();
  });
*/


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