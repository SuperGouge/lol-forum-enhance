# Notes

## Tooltip Testing

``` javascript
var tt = $('<br><br><a id="tt-test" href="#" data-toggle="tooltip" title="first tooltip">hover over me</a>');
$('#post_message_11390315 > p:nth-child(1)').append(tt);
$('#tt-test').tooltip();
```

## Old version of `LoLForums.getOwnName()`

``` javascript
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
```

## Server Errors encoded as `JSON`

- `Elophant Error: Summoner ... was not found.`
- `Elophant Error: The global rate limit has been exceeded.`
- `Elophant Error: `
- `Elophant Error: No active connection found for the given region.`
- `Elophant Error: Unknown AMF type '67'.`
- `Elophant Error: No key given! Please sign up at elophant.com/league-of-legends/api.`

**PHP Error implementation:**

``` php
$json_object = json_decode($json_response);
if ($json_object->success) {
  $x = $json_object->data; // summoner-data
  // ...
} else {
  $e = $json_object->error; // error-message
  // ...
}
```

**Successful answer:**

``` javascript
{
    "data": {
        "internalName": "butwhyme",
        "name": "ButWhyMe",
        "acctId": 24911708,
        "profileIconId": 539,
        "revisionDate": "\/Date(1374434957833)\/",
        "summonerLevel": 30,
        "summonerId": 21405713
    },
    "success": true
}
```

**Unsuccessful answer:**

``` javascript
{
    "success": false,
    "error": "Summoner ... was not found."
}
```

## Enhances search usages

**Show user posts:** `http://euw.leagueoflegends.com/board/search.php?do=process&searchuser=ButWhyMe&exactname=1&showposts=1`

**Show user threads:** `http://euw.leagueoflegends.com/board/search.php?do=process&searchuser=ButWhyMe&exactname=1&starteronly=1&showposts=0`

## JavaScript Popup Windows

``` javascript
alert('test');
```

``` javascript
var confirmInput = confirm('Yes/No?');
```

``` javascript
var promtInput = prompt('Question/Text/Description', 'Standart text');
```

## Avatars from [FEK by Worre](http://fek.worreh.com/)

`http://videomatic3.diskstation.me/~worreh/avatar/euw/ButWhyMe`

``` javascript
var image = 'http://videomatic3.diskstation.me/~worreh/avatar/' + region + '/' + encodeURI(user);
```

## Avatars from [WT](http://tools.wrenchbox.de/tools.php)

**Input:**
``` javascript
var names = new Array();

var name = 'Fictional Summoner Name';
names.push(name);

var jsonNames = encodeURIComponent(JSON.stringify(names));

var output = getRequestTo('http://tools.wrenchbox.de/ajax_avatars.php?users=' + jsonNames);
```

**Output:**
``` javascript
//{"SummonerName1":"json formatted url", "SummonerName2":"json formatted url", ...}

var url = output[name];
```

## HTML5 localStorage

``` javascript
localStorage.setItem('key', 'value');

var value;
value = localStorage.getItem('key');
value = localStorage['key'];
```

## `GM_*` Greasemonkey API functions
wheather or not an API function is allowed to use or not is specified in the `*.xml`-file which contains the metadata of all scripts.
(more precisely in the `<GRANT>` tags)
This file will not update automatically, when you change the `@grant ...` metadata.
You need to update **(?)** / install the userscript to change the actually used metadata.

## `@resource` and updates
Resource metadata acts completely the same like the grant (or **every** other) metadata in the case, that changes only take effect, when you update/reinstall the script.
In addition to this, the resource data *(images, additional javascript, whatever)* will download the time you update **(?)** / install the script.
As far as i know **only this one time** *(however, the greasemonkey wiki says, that resource-data is somehow able to update if changed)*