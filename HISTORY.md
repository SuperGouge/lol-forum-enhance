# Version history:

## 1.3.0
- **Added** [Lolking.net](http://www.lolking.net/ "League of Legends Summoner Stats") connection when linking usernames with options-selection
- **Fixed** automatic updates window

## 1.2.0
- **Added** options menu in new design
- **Added** *special character support* for quote authors

## 1.1.0beta
- **Changed** whole style of the add-on to work with the new design of the forums
- Options menu not available until its ported to new design (soon)

## 1.0.0
- **Added** german translation
- **Added** functionality to get the *special characters* of users in the threads-overview back
- **Added** different options for username-clicks
- **Added** text selection for usernames
- **Added** special icon for not found users
- **Changed** file and object structure of whole userscript to make it easier to adapt


## 0.6.0
- **Added** functionality to get your *special characters* in your summonernames back
- **Added** clicking functionality to summonernames

## 0.5.0
- **Added** Options Window
- **Added** Automatic update notifications
- **Added** further localization
- **Fixed** Fetching of own summoner name for the new forum version
- **Changed** main server address. Now its running on piltover-libraries.net

## 0.4.2
- **Added** userscript commands to *force an update*, *check for updates* and *clear the local cache*
- **Added** localization for userscript commands
- **Fixed** removing locally cached summoner-data older than a day

## 0.4.1
- **Added** new Summoner icons

## 0.4.0
- **Added** *How to install* section to `README.md`
- **Added** own avatar besides quick edit box
- **Added** basic script localization possibilities
- **Added** functionality to fetch the own name if logged in
- **Added** functionality to get the current forum language (via `bblanguageid` cookie)
- **Changed** location of css style changes into `global.css`
- **Changed** location of javascript style changes into `global.js`

## 0.3.0
- **Added** `global.js` for later global style changes with javascript
- Latest additions and changes tested successfully

### 0.3.-1
- **Added** functionality for automatic version control to `Userscript` class
  - **Added** `ToolkitVersion` and `ToolkitVersionPart` classes to handle mozilla and greasemonkey versioning
  - **Added** functions to fetch local and remote version
  - **Added** a function to force an userscript update
- **Added** small `TestSuite` class to perform a lot of easy function-tests fast and clean.

### 0.2.1
- **Changed** name of main script to `main.user.js` to classify it as the main, most important script which then requires other files
- **Added** `main.meta.js` as updateURL, so checking the version not longer needs to load the whole script, just the meta-block
- **Changed** `README.md` slightly
- **Added** goal to check the other regions
- **Changed** the internal name of the script to *LoL Forum Enhance* from *LoL Forum Icons*
- **Added** more detailed metadata for `auto-redirect.user.js` and `championselect-net.user.js`

### 0.2.0
- **Added** FAQ to `README.md`
- **Added** `client/SummonerIcons/files.txt` to list the automatically fetched picture files
- **Added** rights to use the *greasemonkey api*
- **Added** `client/global.css` to hold all style changes
- **Added** `global.css` as resource to download it at install time
- **Added** *jquery* as required script to download it at install time and use it in own script
- **Added** *summoner icons* as resource to download them at install time
- **Changed** a lot of code to be more object oriented and easier to read
  - **Added** `Summoner` class
  - **Added** `Level1Cache` class
  - **Added** `Level2Cache` class
  - **Added** `Userscript` class
  - **Added** `LolForums` class
- **Changed** the replacement of images and levels to be *asynchronous*
- **Added** a local *cache*

### 0.1.3
- Code cleanup
- **Added** `notes.md`
- `MutationObserver` working fine
- **Added** goal: show own avatar besides quick edit box

### 0.1.2
- Using `MutationObserver` for QuickReply
	- checking the number of posts
	- if changed fills missing summoner icons
	- still testing
- wrapping more and more code in functions

### 0.1.1
- **Fixed** new occurred bug from 0.1.0

### 0.1.0
- Updates working as intended
- **Fixed** the bug in v0.0.3, which tried to run the script before the summonernames where loaded

### 0.0.3
- **Changed** quick reply box
	- now appears *full width*
	- *only vertical scrollable* to avoid those ugly effects
- now starts directly with site-load, instead of waiting for the page to load

### 0.0.2
- mainly cleanup
- **Added** greasemonkey metadata
	- should *update automatically* now
	- runs at page start now
	- loads (and caches) `jQuery v2.0.1`
- basis for clientside level 1 caching with cookies done ( `getCookie(...)` / `setCookie(...)` )
- **Added* Summoner Images for later use

### 0.0.1
- Initial version
