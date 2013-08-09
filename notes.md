# Notes

## Using Greasemonkey assets in css

``` css
#header {
    background: url("greasemonkey-script:fcc91ec6-0b59-4348-b8e6-03f2084553d8/icon539") no-repeat scroll 50% 0px transparent;
}

/* greasemonkey-script:fcc91ec6-0b59-4348-b8e6-03f2084553d8/icon539 */
```

## Elophant servers

- Elophant supported:
	- `na`
	- `euw`
	- `eune`
	- `br`
- **Not** supported:
	- `tr`
	- `ru`
	- `lan`
	- `oce`
	- `las`

## League page style changes

- Legacy:
	- `na`
	- `euw`
	- `eune`
	- `br`
	- `tr`
	- `ru`
- Updated:
	- `lan`
	- `oce`
	- `las`

*When does the new updates go live?*

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