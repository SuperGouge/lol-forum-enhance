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





