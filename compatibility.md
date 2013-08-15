# Compatibility comparison
Compatibility comparison for different user script engines and the necessary functions.

from: https://github.com/scriptish/scriptish/wiki/Comparison-Table

## used Greasemonkey API
**Necessary:**
- `GM_deleteValue`
  - local cache
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `GM_setValue`
  - local cache
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `GM_getValue`
  - local cache
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `GM_info`
  - auto updates
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: **??**
- `GM_xmlhttpRequest`
  - cross domain server access
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: **ok?**

**Additional:**
- `GM_registerMenuCommand`
  - holding additional basic script functions
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `GM_openInTab`
  - opening up updates and lolking/forum searches
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: no
  - *Opera* Violentmonkey: **ok?**
- `GM_getResourceURL`
  - storing files locally
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `GM_getResourceText`
  - splitting script in multiple files
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok

## used Greasemonkey metadata
- `@name`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: ok
  - *Opera* Violentmonkey: ok
- `@namespace`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: ok
  - *Opera* Violentmonkey: ok
- `@description`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: ok
  - *Opera* Violentmonkey: ok
- `@include`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: ok
  - *Opera* Violentmonkey: ok
- `@downloadURL`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: **no**
  - *Safari* GreaseKit: **??**
  - *Opera* Violentmonkey: ok
- `@updateURL`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: **no**
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `@version`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `@run-at`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `@grant`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: **no**
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: **??**
- `@resource`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok
- `@require`
  - *Firefox* Greasemonkey: ok
  - *Chrome* Tampermonkey: ok
  - *Safari* GreaseKit: **no**
  - *Opera* Violentmonkey: ok

## GreaseKit `GM_*` functions
from: http://userscripts.org/scripts/review/41441

``` javascript
// ==UserScript==
// @name           gm_functions
// @namespace      *
// @description    Replicated GreaseMonkey's GM_ functions for GreaseKit.
// @include        *
// @exclude        
// ==/UserScript==

/*
  History:
  1.0   2009/01/30  Initial release, based on other people's posts at http://groups.google.com/group/greasekit-users/,
                    so they deserve the credit
  1.0.1 2009/03/08  Changed the way GM_addStyle and GM_log are defined, as it they simply didn't work.
                    Thanks to "samuel365" for pointing this out.
*/

if(typeof GM_getValue === "undefined") {
  GM_getValue = function(name){
    var nameEQ = escape("_greasekit" + name) + "=", ca = document.cookie.split(';');
    for (var i = 0, c; i < ca.length; i++) { 
      var c = ca[i]; 
      while (c.charAt(0) == ' ') c = c.substring(1, c.length); 
      if (c.indexOf(nameEQ) == 0) {
        var value = unescape(c.substring(nameEQ.length, c.length));
        //alert(name + ": " + value);
        return value;
      }
    } 
    return null; 
  }
}

if(typeof GM_setValue === "undefined") {
  GM_setValue = function( name, value, options ){ 
    options = (options || {}); 
    if ( options.expiresInOneYear ){ 
      var today = new Date(); 
      today.setFullYear(today.getFullYear()+1, today.getMonth, today.getDay()); 
      options.expires = today; 
    } 
    var curCookie = escape("_greasekit" + name) + "=" + escape(value) + 
    ((options.expires) ? "; expires=" + options.expires.toGMTString() : "") + 
    ((options.path)    ? "; path="    + options.path : "") + 
    ((options.domain)  ? "; domain="  + options.domain : "") + 
    ((options.secure)  ? "; secure" : ""); 
    document.cookie = curCookie; 
  }
}

if(typeof GM_xmlhttpRequest === "undefined") { 
  GM_xmlhttpRequest = function(/* object */ details) { 
    details.method = details.method.toUpperCase() || "GET"; 
    if(!details.url) { 
      throw("GM_xmlhttpRequest requires an URL."); 
      return; 
    } 
    // build XMLHttpRequest object 
    var oXhr, aAjaxes = []; 
    if(typeof ActiveXObject !== "undefined") { 
      var oCls = ActiveXObject; 
      aAjaxes[aAjaxes.length] = {cls:oCls, arg:"Microsoft.XMLHTTP"}; 
      aAjaxes[aAjaxes.length] = {cls:oCls, arg:"Msxml2.XMLHTTP"}; 
      aAjaxes[aAjaxes.length] = {cls:oCls, arg:"Msxml2.XMLHTTP.3.0"}; 
    } 
    if(typeof XMLHttpRequest !== "undefined") 
      aAjaxes[aAjaxes.length] = {cls:XMLHttpRequest, arg:undefined}; 
    for(var i=aAjaxes.length; i--; ) 
      try{ 
	oXhr = new aAjaxes[i].cls(aAjaxes[i].arg); 
	if(oXhr) break; 
      } catch(e) {} 
    // run it 
    if(oXhr) { 
      if("onreadystatechange" in details) 
	oXhr.onreadystatechange = function() 
	  { details.onreadystatechange(oXhr) }; 
      if("onload" in details) 
	oXhr.onload = function() { details.onload(oXhr) }; 
      if("onerror" in details) 
	oXhr.onerror = function() { details.onerror(oXhr) }; 
      oXhr.open(details.method, details.url, true); 
      if("headers" in details) 
	for(var header in details.headers) 
	  oXhr.setRequestHeader(header, details.headers[header]); 
      if("data" in details) 
	oXhr.send(details.data); 
      else 
	oXhr.send(); 
    }
    else {
      throw ("This Browser is not supported, please upgrade.");
    }
  } 
} 

if(typeof GM_addStyle === "undefined") { 
  GM_addStyle = function(/* String */ styles) {
    var oStyle = document.createElement("style"); 
    oStyle.setAttribute("type", "text\/css"); 
    oStyle.appendChild(document.createTextNode(styles)); 
    document.getElementsByTagName("head")[0].appendChild(oStyle); 
  } 
} 

if(typeof GM_log === "undefined") { 
  GM_log = function(log) {
    if(console) 
      console.log(log); 
    else 
      alert(log); 
  }
}
```



