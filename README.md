# League of Legends forum enhance
## a greasemonkey userscript

### Description

Displays the icon of a summoner instead of the question mark image in the forums of League of Legends. Works on `NA`, `EUW`, `EUNE` and `BR`.  
Once they are requested, the icons are cached on our servers for at least 12 hours or longer if we cannot get newer versions (e.g. servers are down).


### Features

- Forum *summoner icon replacement* based on actual selected icon
- No need to configure and *no log in to a third party site*
- The *actual summoner level* is shown beside the summoner icon
- Riot member symbols are left as they are
- 12 hour serverside caching to keep server usage low
- 24 hour local caching so you won't load the same summoners data over and over again while just browse a conversation
- *Rework quick edit box* to get it more useful and fitting better into the whole forums style
- Show a small *avatar* with you own information besides the quick edit box
- No performance loss, all request-functions are running async. The pages will load as fast as they always do
- Full support for the *new forums*
- Fix for *wrong coded special characters* in usernames, so they can be displayed normally


### How to install

There are many different ways to install a userscript and the result will be the same for all.
All of them are easy, all of them are fast and straightforward.
Choose the way you like or which has the most recent version of the script.

- via *userscript.org*
  1. make sure you have a *(optimally the latest)* version of Greasemonkey installed. (for firefox you can find it on mozillas official addon page: [Greasemonkey on addons.mozilla.org](https://addons.mozilla.org/de/firefox/addon/greasemonkey/ "Customize the way a web page displays or behaves, by using small bits of JavaScript."))
  1. visit this scripts site on [userscripts.org](http://userscripts.org/scripts/show/172058 "LoL Forum Enhance on userscripts.org") (http://userscripts.org/scripts/show/172058).
  1. click the **Install** button on the page.
  1. accept the userscript installation window popping up.
- via *github*
  1. make sure you have a *(optimally the latest)* version of Greasemonkey installed. (for firefox you can find it on mozillas official addon page: [Greasemonkey on addons.mozilla.org] (https://addons.mozilla.org/de/firefox/addon/greasemonkey/ "Customize the way a web page displays or behaves, by using small bits of JavaScript."))
  1. find the mainscript in this repo (its here: [/client/main.user.js](https://github.com/philippwiddra/lol-forum-enhance/blob/master/client/main.user.js "LoL Forum Enhance on github")).
  1. *optional:* check wheather or not you trust this script. The code is there, just look at it.
  1. click the **Raw** button in the code-windows header.
  1. accept the userscript installation window popping up.
- **fast forward:** [Click this to start installation.](https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js "Install LoL Forum Enhance via github")


### Special thanks

Special thanks go to [**SuperGouge**](https://github.com/SuperGouge) for providing the french translation.

### Appendix

- Powered by [elophant](http://www.elophant.com/ "LoL Champion and Summoner Stats").
- This userscript on [userscripts.org](http://userscripts.org/scripts/show/172058 "LoL Forum Enhance for Greasemonkey").
- This tool in the [german euw forums](http://euw.leagueoflegends.com/board/showthread.php?p=12498364 "Lol Forum Enhance on german League EUW forums").
- We are using these third-party libraries:
  - [jQuery](https://github.com/jquery/jquery "jQuery on github")
  - [Unicode <-> UTF-8](http://homepage3.nifty.com/aokura/jscript/utf8.html "AOK's JavaScript Library - utf8")
  - [easyModal.js](http://flaviusmatis.github.io/easyModal.js/ "A minimal jQuery modal that works with your CSS")

### Frequently Asked Questions - FAQ

> Why does the installation / update of this script take this long?

Usually, the first installation takes a longer time, because this script carries all summoner icons and some additional javascript along. *(about 5 to 10 MB, so not that much)*

---

> Won't this script increase bandwidth usage with all these icons to be shown on every page?

It won't. We just download the icons once at installation. After that they are stored locally on your harddrive *(5 to 10 MB, nothing to worry about)* and referenced from there. So no additional bandwidth is used to display them over and over again.

---

> What's the difference between this script and the [FEK](http://fek.worreh.com/ "Forum Enhancer Kit") or the [Wrenchman's Tools](http://tools.wrenchbox.de/ "Wrenchman's Tools - Avatars")?

All these tools may seem similar, but there are some major and minor differences. The biggest one is, that this script don't need to be configured, and doesn't force you to log in to a third person website. You can't use your own pictures, you are bound to the official ones. This also prevents you from seeing others with not-league-related avatars or icons you do not want to see at all.

---

> Does this script work with the new forum version?

It does and was in fact completely re-edited for it.

---
