﻿// ==UserScript==
// @name        LoL Forum Enhance
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js
// @updateURL   https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.meta.js
// @version     0.4.3popup
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
// @resource    globalcss https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/global.css
// @require     http://code.jquery.com/jquery-2.0.2.min.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/global.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/bootstrap/js/bootstrap.min.js
// @resource    bootstrapcss https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/bootstrap/css/bootstrap.min.css
// @resource    options-modal https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/options-modal.html
// @resource    update-alert https://raw.github.com/philippwiddra/lol-forum-enhance/bootstrap-popups/client/update-alert.html
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
// @resource    icon554 http://passwd.ohost.de/lcapi/SummonerIcons/554.jpg
// @resource    icon555 http://passwd.ohost.de/lcapi/SummonerIcons/555.jpg
// @resource    icon556 http://passwd.ohost.de/lcapi/SummonerIcons/556.jpg
// @resource    icon557 http://passwd.ohost.de/lcapi/SummonerIcons/557.jpg
// @resource    icon558 http://passwd.ohost.de/lcapi/SummonerIcons/558.jpg
// @resource    icon559 http://passwd.ohost.de/lcapi/SummonerIcons/559.jpg
// @resource    icon560 http://passwd.ohost.de/lcapi/SummonerIcons/560.jpg
// @resource    icon561 http://passwd.ohost.de/lcapi/SummonerIcons/561.jpg
// @resource    icon562 http://passwd.ohost.de/lcapi/SummonerIcons/562.jpg
// @resource    icon563 http://passwd.ohost.de/lcapi/SummonerIcons/563.jpg
// @resource    icon564 http://passwd.ohost.de/lcapi/SummonerIcons/564.jpg
// @resource    icon565 http://passwd.ohost.de/lcapi/SummonerIcons/565.jpg
// @resource    icon566 http://passwd.ohost.de/lcapi/SummonerIcons/566.jpg
// @resource    icon567 http://passwd.ohost.de/lcapi/SummonerIcons/567.jpg
// @resource    icon568 http://passwd.ohost.de/lcapi/SummonerIcons/568.jpg
// @resource    icon569 http://passwd.ohost.de/lcapi/SummonerIcons/569.jpg
// ==/UserScript==

// TODO: Change branchname to master on bootstrapcss
// TODO: Change branchname to master on options-modal
// TODO: Change branchname to master on bootstrap.min.js
// TODO: Change branchname to master on global.css
// TODO: Change branchname to master on global.js
// TODO: Change branchname to master on update-alert

/*******************************
 *    Definition of Classes    *
 *******************************/

function LfeOptions()
{
  var that = this;
  var lfeOptionsString = 'LFEOptions';
  
  this.data = {
    updates: true,
    enlarge: true,
    avatar: true,
    wt: false,
    fek: false,
    link: 'selection'
  }
  
  this.loadLocal = function()
  {
    try
    {
      var data = GM_getValue(lfeOptionsString);
      if (data !== undefined) that.data = JSON.parse(data);
    }
    catch (e)
    {
      if (e instanceof SyntaxError)
      {
        // error in JSON.parse (input may be not valid JSON)
        cachedSummoners = {};
      }
      else
      {
        throw e;
      }
    }
  }
  this.saveLocal = function()
  {
    GM_setValue(lfeOptionsString, JSON.stringify(that.data));
  }
}
 
function Summoner()
{
  var that = this;
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
  var cachedSummoners = {};
  var cachedSummonerString = "SummonerCache";
  var level2Cache = new Level2Cache();

  this.getSummoner = function(name, server, done)
  {
    if (typeof cachedSummoners[name] != "undefined")
    {
      done(cachedSummoners[name]);
    }
    else
    {
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
    try
    {
      cachedSummoners = JSON.parse(GM_getValue(cachedSummonerString, "{}"));
    }
    catch (e)
    {
      if (e instanceof SyntaxError)
      {
        // error in JSON.parse (input may be not valid JSON)
        cachedSummoners = {};
      }
      else
      {
        throw e;
      }
    }
  }
  
  this.cleanCache = function()
  {
    // get yesterdays Date
    var d = new Date();
    d.setDate(d.getDate() - 1);
    
    var temp = {};
    for (var key in cachedSummoners)
    {
      if (cachedSummoners.hasOwnProperty(key))
      {
        // is Summonerdata not older than a day
        if (cachedSummoners[key].data.currentDate > d)
        {
          temp[key] = cachedSummoners[key];
        }
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
    cachedSummoners[summoner.data.name] = summoner;
  }
}

function Level2Cache()
{
  var getSummonerUrl = "http://passwd.ohost.de/lcapi/getSummoner.php";
  this.getSummoner = function(name, server, done)
  {
    GM_xmlhttpRequest({
      method: "GET",
      url: getSummonerUrl + "?summoner=" + escape(name) + "&server=" + server + "",
      onload: function(response) {
        var s = new Summoner();
        s.fromJsonString(response.responseText);
        done(s);
      }
    });
  }
}

function Userscript()
{
  var that = this;

  this.addGlobalStyle = function(css)
  {
    try
    {
      var elmHead, elmStyle;
      elmHead = document.getElementsByTagName('head')[0];
      elmStyle = document.createElement('style');
      elmStyle.type = 'text/css';
      elmHead.appendChild(elmStyle);
      elmStyle.innerHTML = css;
    }
    catch (e)
    {
      if (!document.styleSheets.length)
      {
        document.createStyleSheet();
      }
      document.styleSheets[0].cssText += css;
    }
  }
  
  this.setCookie = function(name, value, expireDays)
  {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    document.cookie = name + "=" + escape(value) + ((expireDays == null) ? "" : ";expires=" + expireDate.toUTCString());
  }
  
  this.getCookie = function(name)
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

  function ToolkitVersion()
  {
    var that = this;
    var orig = "";
    var versionParts = new Array();
    
    this.setVersion = function(string)
    {
      orig = string;
      var splits = string.split(".");
      
      for (var i = 0; i < splits.length; i++)
      {
        var vp = new ToolkitVersionPart();
        vp.setVersionPart(splits[i]);
        versionParts.push(vp);
      }
    }
    
    this.getOrig = function() { return orig; }
    this.getComputedStr = function()
    {
      var strOut = "";
      
      for (var i = 0; i < (versionParts.length - 1); i++)
      {
        strOut += versionParts[i].getComputedStr();
        strOut += ".";
      }
      
      // add last versionPart
      strOut += versionParts[(versionParts.length - 1)].getComputedStr();
      
      return strOut;
    }
    this.getVersionParts = function() { return versionParts.slice(); }
    
    this.isGreaterThan = function(version)
    {
      var vp1 = versionParts;
      var vp2 = version.getVersionParts();
      
      var l;
      if (vp1.length > vp2.length) l = vp1.length;
      else l = vp2.length;
      
      for (var i = 0; i < l; i++)
      {
        // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
        if (vp1[i] === undefined) vp1[i] = new ToolkitVersionPart();
        if (vp2[i] === undefined) vp2[i] = new ToolkitVersionPart();
        
        if (vp1[i].isGreaterThan(vp2[i])) return true;
        if (vp1[i].isLowerThan(vp2[i])) return false;
      }
      
      // equal
      return false;
    }
    this.isLowerThan = function(version)
    {
      var vp1 = versionParts;
      var vp2 = version.getVersionParts();
      
      var l;
      if (vp1.length > vp2.length) l = vp1.length;
      else l = vp2.length;
      
      for (var i = 0; i < l; i++)
      {
        // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
        if (vp1[i] === undefined) vp1[i] = new ToolkitVersionPart();
        if (vp2[i] === undefined) vp2[i] = new ToolkitVersionPart();
        
        if (vp1[i].isGreaterThan(vp2[i])) return false;
        if (vp1[i].isLowerThan(vp2[i])) return true;
      }
      
      // equal
      return false;
    }
    this.isEqualTo = function(version)
    {
      var vp1 = versionParts;
      var vp2 = version.getVersionParts();
      
      var l;
      if (vp1.length > vp2.length) l = vp1.length;
      else l = vp2.length;
      
      for (var i = 0; i < l; i++)
      {
        // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
        if (vp1[i] === undefined) vp1[i] = new ToolkitVersionPart();
        if (vp2[i] === undefined) vp2[i] = new ToolkitVersionPart();
        
        if (!vp1[i].isEqualTo(vp2[i])) return false;
      }
      
      // equal
      return true;
    }
  }

  function ToolkitVersionPart()
  {
    var that = this;
    var orig = "";
    var numA = 0;
    var strB = "";
    var numC = 0;
    var strD = "";
    
    this.setVersionPart = function(string)
    {
      orig = string;
      
      var m = string.match(/^([0-9-]+)?([^\d]+)?([0-9-]+)?(.+)?$/i);
      
      numA = parseInt(m[1]);
      strB = m[2];
      numC = parseInt(m[3]);
      strD = m[4];

      if (isNaN(numA)) numA = 0;
      if (strB === undefined) strB = "";
      if (isNaN(numC)) numC = 0;
      if (strD === undefined) strD = "";
      
      // VersionPart rules:
      
      // * --> (infinity)
      if (orig == "*")
      {
        numA = Number.POSITIVE_INFINITY;
        strB = "";
        numC = 0;
        strD = "";
      }
      
      // 1.1+ --> 1.2pre
      if (strB == "+")
      {
        numA++;
        strB = "pre";
      }
    }
    
    this.getOrig = function() { return orig; }
    this.getNumA = function() { return numA; }
    this.getStrB = function() { return strB; }
    this.getNumC = function() { return numC; }
    this.getStrD = function() { return strD; }
    this.getComputedStr = function()
    {
      var str = "";
      if (numA != 0) str += numA.toString();
      str += strB;
      if (numC != 0) str += numC.toString();
      str += strD;
      return str;
    }
    
    this.isGreaterThan = function(versionPart)
    {
      var cNumA = compareNum(numA, versionPart.getNumA());
      if (cNumA == 1) return true;
      else if (cNumA == 2) return false;
      
      var cStrB = compareStr(strB, versionPart.getStrB());
      if (cStrB == 1) return true;
      else if (cStrB == 2) return false;
      
      var cNumC = compareNum(numC, versionPart.getNumC());
      if (cNumC == 1) return true;
      else if (cNumC == 2) return false;
      
      var cStrD = compareStr(strD, versionPart.getStrD());
      if (cStrD == 1) return true;
      else if (cStrD == 2) return false;
      
      // equal
      return false;
    }
    this.isLowerThan = function(versionPart)
    {
      var cNumA = compareNum(numA, versionPart.getNumA());
      if (cNumA == 1) return false;
      else if (cNumA == 2) return true;
      
      var cStrB = compareStr(strB, versionPart.getStrB());
      if (cStrB == 1) return false;
      else if (cStrB == 2) return true;
      
      var cNumC = compareNum(numC, versionPart.getNumC());
      if (cNumC == 1) return false;
      else if (cNumC == 2) return true;
      
      var cStrD = compareStr(strD, versionPart.getStrD());
      if (cStrD == 1) return false;
      else if (cStrD == 2) return true;
      
      // equal
      return false;
    }
    this.isEqualTo = function(versionPart)
    {
      var cNumA = compareNum(numA, versionPart.getNumA());
      if (cNumA != 0) return false;
      
      var cStrB = compareStr(strB, versionPart.getStrB());
      if (cStrB != 0) return false;
      
      var cNumC = compareNum(numC, versionPart.getNumC());
      if (cNumC != 0) return false;
      
      var cStrD = compareStr(strD, versionPart.getStrD());
      if (cStrD != 0) return false;
      
      // equal
      return true;
    }
    
    // always returns number of greater element (0 if equal)
    function compareNum(num1, num2)
    {
      if (num1 > num2) return 1;
      else if (num2 > num1) return 2;
      else return 0;
    }
    function compareStr(str1, str2)
    {
      if ((str1 == "") && (str2 == "")) return 0;
      else if ((str1 == "") && (str2 != "")) return 1;
      else if ((str1 != "") && (str2 == "")) return 2;
      else if (str1 > str2) return 1;
      else if (str2 > str1) return 2;
      else return 0;
    }
  }

  this.compareVersions = function(a, b)
  {
    // (a = b) --> 0
    // (a < b) --> -1
    // (a > b) --> 1
  
    var vA = new ToolkitVersion();
    var vB = new ToolkitVersion();
    
    vA.setVersion(a);
    vB.setVersion(b);
    
    if (vA.isEqualTo(vB)) return 0;
    else if (vA.isLowerThan(vB)) return -1;
    else if (vA.isGreaterThan(vB)) return 1;
    else throw "Version comparation error occurred."
  }
  
  this.getLocalVersion = function()
  {
    return GM_info.script.version;
  }
  this.getRemoteVersion = function(callback)
  {
    var updateURL = GM_info.scriptMetaStr.match(/\@updateURL[ |\t]+(.+)/i)[1];
    GM_xmlhttpRequest({
      method: "GET",
      url: updateURL,
      onload: function(response) {
        if (response.status == 200)
        {
          var serverVersion = response.responseText.match(/\@version[ |\t]+(.+)/i)[1];
          callback(serverVersion)
        }
        else
        {
          throw "Http-Get-Request-Error: " + response.status + " - " + response.statusText;
        }
      }
    });
  }
  this.updateNeccessary = function(callback)
  {
    var currentVersion = that.getLocalVersion();
    that.getRemoteVersion(function(remoteVersion) {
      var comparison = that.compareVersions(currentVersion, remoteVersion);
      if (comparison < 0) callback(true);
      else callback(false);
    });
    
  }
  this.forceUpdate = function()
  {
    var downloadURL = GM_info.scriptMetaStr.match(/\@downloadURL[ |\t]+(.+)/i)[1];
    GM_openInTab(downloadURL);
  }
}

function LolForums()
{
  var that = this;
  var level1Cache = new Level1Cache();
  level1Cache.loadCache();
  level1Cache.cleanCache();
  
  this.server = getServer();

  this.localizations = {
    regions: {
      "na": "North America",
      "euw": "EU West",
      "eune": "EU Nordic & East",
      "br": "Brazil"
    },
    langIds: {
      1: "en",
      2: "de",
      3: "es",
      4: "fr",
      5: "pl",
      6: "ro",
      7: "el",
      8: "pt",
      9: "tr",
      11: "it"
    },
    langNamesEn: {
      "en": "English",
      "de": "German",
      "es": "Spanish",
      "fr": "Frensh",
      "pl": "Polish",
      "ro": "Romanian",
      "el": "Greek",
      "pt": "Portuguese",
      "tr": "Turkish",
      "it": "Italian"
    },
    avatarSub: {
      "en": "Me",
      "de": "Ich",
      "es": "Yo",
      "fr": "Je",
      "pl": "Ja",
      "ro": "Eu",
      "el": "egó",
      "pt": "Eu",
      "tr": "ben",
      "it": "I"
    },
    forceUpdateCaption: { // TODO: Add translations
      "en": "Force update",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    checkUpdatesCaption: { // TODO: Add translations
      "en": "Check for updates",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    updatesConfirmMessage: { // TODO: Add translations
      "en": "There are updates available. Do you want to install them now?",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    updatesStartMessage: { // TODO: Add translations
      "en": "Update started.\nPlease confirm the installation promt.",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    updatesCanceledMessage: { // TODO: Add translations
      "en": "Updating canceled.",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    noUpdatesMessage: { // TODO: Add translations
      "en": "No updates available.\nYou are using the most recent version.",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    clearCacheCaption: { // TODO: Add translations
      "en": "Clear local cache",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalButtonCaption: { // TODO: Add translations
      "en": "LFE Options",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalTitleCaption: {  // lfe-o-captions-title
      "en": "LoL Forum Enhance - Options",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalUpdatesCaption: { // lfe-o-captions-updates
      "en": "Check for updates automatically:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalEnlargeCaption: { // lfe-o-captions-enlarge
      "en": "Enlarge Quick-Edit-Box:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAvatarCaption: { // lfe-o-captions-avatar
      "en": "Show own avatar next to Quick-Edit-Box:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalWtCaption: { // lfe-o-captions-wt
      "en": "Use Wrenchman's Tools Icons if available:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalFekCaption: { // lfe-o-captions-fek
      "en": "User Forum Enhancement Kit's Icons if available:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalLinkCaption: { // lfe-o-captions-link
      "en": "Link usernames with:",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersOnCaption: { // lfe-o-captions-answers-on
      "en": "On",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersOffCaption: { // lfe-o-captions-answers-off
      "en": "Off",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersPostsCaption: { // lfe-o-captions-answers-posts
      "en": "Posts",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersThreadsCaption: { // lfe-o-captions-answers-threads
      "en": "Threads",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersSelectionCaption: { // lfe-o-captions-answers-selection
      "en": "Selection",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalAnswersNoneCaption: { // lfe-o-captions-answers-none
      "en": "None",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalPresetInfoCaption: { // lfe-o-captions-preset-info
      "en": "Preset values are presented in this color",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalButtonSaveCaption: { // lfe-o-captions-button-save
      "en": "Save changes",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    },
    optionsModalButtonDiscardCaption: { // lfe-o-captions-button-discard
      "en": "Discard changes",
      "de": "",
      "es": "",
      "fr": "",
      "pl": "",
      "ro": "",
      "el": "",
      "pt": "",
      "tr": "",
      "it": ""
    }
  };
  
  this.localizations.get = function(lang, key)
  {
    var l = lang;
    if (typeof lang == 'number')
    {
      l = that.localizations.langIds[lang];
    }
    else if (!isNaN(lang))
    {
      l = that.localizations.langIds[parseInt(lang)];
    }
    
    var output = that.localizations[key][l];
    if (output == '') output = that.localizations[key]["en"];
    return output;
  }
  
  function getServer()
  {
    // get the server from url
    var match = document.URL.match(/(na)|(euw)|(eune)|(br)/i); // TODO: Add other regions, check compatibility
    if (match != null)
    {
      // server found
      return match[0];
    }
    else
    {
      // server not found
      return null;
    }
  }
  
  this.countAllPosts = function()
  {
    return $('.forum_post img.user_summoner_icon').parent().parent().parent().parent().length;
  }
  
  this.replaceAvatars = function()
  {
    // get all Left items except those of rioters.
    var allLeft = $(".forum_post img.user_summoner_icon").filter($('img[src="lol_theme/img/unknown_icon.jpg"]')).parent().parent().parent().parent();
    allLeft.each(function(i, e)
    {
      var name = $(e).find("big").text();
      var image = $(e).find("img.user_summoner_icon");
      var orb = $(e).find('span.left_orb');
      
      // Cache system (the level-1-cache automatically calls the level-2-cache if it doesnt have the result)
      level1Cache.getSummoner(name, that.server, function(summoner) {
        
        // replace image source
        image.attr('src', GM_getResourceURL("icon" + summoner.data.profileIconId))
        
        // replace level
        orb.text(summoner.data.summonerLevel);
        
        // save whole cache
        level1Cache.saveCache();
      });
    });
  }

  this.getOwnName = function()
  {
    /* Old Version:
    //TODO: Test languages on eune and asian servers. (euw and na working)
    var raw = $("#lol-pvpnet-bar-account").find(".welcome_text").contents().first().text();
    var match = raw.match(/.+, (.+)[\s]*\(/i)
    if (match === null)
    {
      return null;
    }
    else
    {
      var name = match[1];
      return name;
    }
    */
    
    var name = $('#pvpnet-bar-account-button').text();
    if (name == '')
    {
      return null;
    }
    else
    {
      return name;
    }
  }
  
  this.replaceOwnAvatar = function(languageId)
  {
    // get name
    var name = that.getOwnName();
    
    if (name != null)
    {
      // replace name
      $("#userscript-avatar-name").text(name);
      
      // lookup subtitle
      var subtitle = that.localizations.get(languageId, 'avatarSub');
      
      // replace subtitle
      $("#userscript-avatar-subtitle").text(subtitle);
      
      // get summoner object
      level1Cache.getSummoner(name, that.server, function(summoner) {      
        // replace image source
        $("#userscript-avatar-icon").attr('src', GM_getResourceURL("icon" + summoner.data.profileIconId))
        
        // replace level
        $("#userscript-avatar-level").text(summoner.data.summonerLevel);
        
        // save whole cache
        level1Cache.saveCache();
      });
    }
  }

  this.registerMenuCommands = function(userscript)
  {
    //var languageId = script.getCookie('bblanguageid');
    var languageId = script.getCookie('LOLLANG');
  
    // Force update
    GM_registerMenuCommand(that.localizations.get(languageId, 'forceUpdateCaption'), function() { // TODO: switch to current language
      userscript.forceUpdate();
    }, 'F');
    
    // Check for updates
    GM_registerMenuCommand(that.localizations.get(languageId, 'checkUpdatesCaption'), function() {
      userscript.updateNeccessary(function(updateNecc) {
        if (updateNecc) {
          var confirmInput = confirm(that.localizations.get(languageId, 'updatesConfirmMessage'));
          if (confirmInput) {
            alert(that.localizations.get(languageId, 'updatesStartMessage'));
            userscript.forceUpdate();
          } else {
            alert(that.localizations.get(languageId, 'updatesCanceledMessage'));
          }
        } else {
          alert(that.localizations.get(languageId, 'noUpdatesMessage'));
        }
      });
    }, 'u');
    
    // Clear local cache
    GM_registerMenuCommand(that.localizations.get(languageId, 'clearCacheCaption'), function() {
      level1Cache.removeCache();
      level1Cache.loadCache();
    }, 'C');
  }
  
  
}

function TestSuite()
{
  var that = this;
  var tests = new Array();

  this.add = function(caller, funct, args, outc, caption)
  {
    if ((typeof funct == "function") &&
       (typeof caller == "object") &&
       (typeof args == "object") &&
       (typeof caption == "string"))
    {
      tests.push({ caller: caller, funct: funct, args: args, outc: outc, caption: caption });
    }
    else
    {
      throw "Cannot add test. At least one argument is invalid.";
    }
  }
  
  this.run = function()
  {
    for (var i = 0; i < tests.length; i++)
    {
      try
      {
        tests[i].out = tests[i].funct.apply(tests[i].caller, tests[i].args);
        if (tests[i].out === tests[i].outc) tests[i].result = true;
        else tests[i].result = false;
      }
      catch (e)
      {
        tests[i].result = false;
        tests[i].error = e;
      }
    }
  }
  
  this.getFailures = function()
  {
    var errors = new Array();
    for (var i = 0; i < tests.length; i++)
    {
      if (!tests[i].result) errors.push(tests[i]);
    }
    return errors;  
  }
  
  this.getFailuresAsString = function()
  {
    var o = "";
    for (var i = 0; i < that.getFailures().length; i++)
    {
      var f = that.getFailures()[i];
      o += "Failure in " + f.funct.name + " (" + f.caption + ")" + "\nArguments: " + f.args.toString() + "\nExpected: " + f.outc + "\nResult: " + f.out + "\nErrors: " + f.error + "\n\n";
    }
    return o;
  }
}

// Tooltip Testing:
//var tt = $('<br><br><a id="tt-test" href="#" data-toggle="tooltip" title="first tooltip">hover over me</a>');
//$('#post_message_11390315 > p:nth-child(1)').append(tt);
//$('#tt-test').tooltip();

/*******************************
 *    Start of Main Script     *
 *******************************/

// Initiating main Objects
var script = new Userscript();
var forums = new LolForums();
var options = new LfeOptions();

// load global script options
options.loadLocal();

// get actual language
//var languageId = script.getCookie('bblanguageid');
var languageId = script.getCookie('LOLLANG');

// css style changes
script.addGlobalStyle(GM_getResourceText('globalcss'));
script.addGlobalStyle(GM_getResourceText('bootstrapcss'));

// auto-updates
var dismissed = script.getCookie('lfe-update-dismissed');
if (options.data.updates && !dismissed)
{
  script.updateNeccessary(function(updateNecc) {
    if (updateNecc) {
      /*
      $('body').prepend($('\
        <div id="lfe-update-alert" class="alert container" style="top: 10px; position: relative; z-index: 100; width: 550px;">\
          <button id="lfe-update-dismiss" type="button" class="close" data-dismiss="alert">&times;</button>\
          <h5 style="margin: 0;">Updates available.</h5>\
          <p>There is a newer Version of <strong>LoL Forum Enhance</strong> available. Click here to install the latest updates.</p>\
          <p style="margin-bottom: 0;"><a id="lfe-update-install" class="btn btn-warning" href="#">Update</a></p>\
        </div>\
      '));
      */
      $('body').prepend($(GM_getResourceText('update-alert')));
      // TODO: Add localization for update alert.      
      
      $('#lfe-update-dismiss').on('click', function () {
        script.setCookie('lfe-update-dismissed', 'true', 1);
      });
      
      $('#lfe-update-install').on('click', function () {
        script.forceUpdate();
        $('#lfe-update-alert').remove();
      });
    }
  });
}

// options modal
//var modalLang = 'en'; // TODO: Add localization for options modal.
//var modalButton = $('<div id="lol-forum-enhance-settings" class="userscript-pvpnet-bar"><a href="#lfeOptionsModal" role="button" data-toggle="modal">' + forums.localizations.optionsModalButtonCaption[modalLang] + '</a></div>');
var modalButton = $('<div id="lol-forum-enhance-settings" class="userscript-pvpnet-bar"><a href="#lfeOptionsModal" role="button" data-toggle="modal">' + forums.localizations.get(languageId, 'optionsModalButtonCaption') + '</a></div>');
var modal = $(GM_getResourceText('options-modal'));
$('#pvpnet-bar-inner').prepend(modalButton);
$('#forum_body').append(modal);
$('#lfe-o-captions-title').text(forums.localizations.get(languageId, 'optionsModalTitleCaption'));
$('#lfe-o-captions-updates').text(forums.localizations.get(languageId, 'optionsModalUpdatesCaption'));
$('#lfe-o-captions-enlarge').text(forums.localizations.get(languageId, 'optionsModalEnlargeCaption'));
$('#lfe-o-captions-avatar').text(forums.localizations.get(languageId, 'optionsModalAvatarCaption'));
$('#lfe-o-captions-wt').text(forums.localizations.get(languageId, 'optionsModalWtCaption'));
$('#lfe-o-captions-fek').text(forums.localizations.get(languageId, 'optionsModalFekCaption'));
$('#lfe-o-captions-link').text(forums.localizations.get(languageId, 'optionsModalLinkCaption'));
$('#lfe-o-captions-answers-on').text(forums.localizations.get(languageId, 'optionsModalAnswersOnCaption'));
$('#lfe-o-captions-answers-off').text(forums.localizations.get(languageId, 'optionsModalAnswersOffCaption'));
$('#lfe-o-captions-answers-posts').text(forums.localizations.get(languageId, 'optionsModalAnswersPostsCaption'));
$('#lfe-o-captions-answers-threads').text(forums.localizations.get(languageId, 'optionsModalAnswersThreadsCaption'));
$('#lfe-o-captions-answers-selection').text(forums.localizations.get(languageId, 'optionsModalAnswersSelectionCaption'));
$('#lfe-o-captions-answers-none').text(forums.localizations.get(languageId, 'optionsModalAnswersNoneCaption'));
$('#lfe-o-captions-preset-info').text(forums.localizations.get(languageId, 'optionsModalPresetInfoCaption'));
$('#lfe-o-captions-button-save').text(forums.localizations.get(languageId, 'optionsModalButtonSaveCaption'));
$('#lfe-o-captions-button-discard').text(forums.localizations.get(languageId, 'optionsModalButtonDiscardCaption'));

// Load options into modal when shown
$('#lfeOptionsModal').on('shown', function () {
  $('#lfeOptionsModal button.active').removeClass('active');

  if (options.data.updates) $('#lfe-o-updates-on').addClass('active');
  else $('#lfe-o-updates-off').addClass('active');

  if (options.data.enlarge) $('#lfe-o-enlarge-on').addClass('active');
  else $('#lfe-o-enlarge-off').addClass('active');

  if (options.data.avatar) $('#lfe-o-avatar-on').addClass('active');
  else $('#lfe-o-avatar-off').addClass('active');

  if (options.data.wt) $('#lfe-o-wt-on').addClass('active');
  else $('#lfe-o-wt-off').addClass('active');

  if (options.data.fek) $('#lfe-o-fek-on').addClass('active');
  else $('#lfe-o-fek-off').addClass('active');

  $('#lfe-o-link-' + options.data.link).addClass('active');
});

// Register save-options function
$('#lfe-o-save').click(function() {
  options.data.updates = $('#lfe-o-updates .active').data('value');
  options.data.enlarge = $('#lfe-o-enlarge .active').data('value');
  options.data.avatar = $('#lfe-o-avatar .active').data('value');
  options.data.wt = $('#lfe-o-wt .active').data('value');
  options.data.fek = $('#lfe-o-fek .active').data('value');
  options.data.link = $('#lfe-o-link .active').data('value');
  options.saveLocal();
  $('#lfeOptionsModal').modal('hide');
});

// register greasemonkey userscript menu commands
forums.registerMenuCommands(script);

// create an observer for the #posts div instance
var observerTarget = document.querySelector('#posts');
var postsObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    forums.replaceAvatars();
  });
});
var observerConfig = { childList: true, subtree: true };

if (forums.server != null)
{
  // server found
  
  // replace own avatar (if name and avatar available)
  forums.replaceOwnAvatar(languageId);
  
  // replace the summoner images and levels
  forums.replaceAvatars();

  // start observing #posts
  postsObserver.observe(observerTarget, observerConfig);
}
else
{
  // server not found
}