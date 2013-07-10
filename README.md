# League of Legends forum enhance
## a greasemonkey userscript

### Description

Displays the icon of a summoner instead of the question mark image in the forums of League of Legends. Works on `NA`, `EUW`, `EUNE` and `BR`.  
Once they are requested, the icons are cached on our servers for at least 12 hours or longer if we cannot get newer versions (e.g. servers are down).


### Features

- Forum *summoner icon replacement* based on actual selected icon
- No need to configure and *no log in to a third party site*
- The mini-bullet normally filled with `??` are replaced with the *actual summoner level*
- Riot member symbols and mini-bullets are left as they are
- 12 hour serverside caching to keep server usage low
- 24 hour local caching so you won't load the same summoners data over and over again while just browse a conversation
- *Rework quick edit box* to get it more useful and fitting better into the whole forums style
- No performance loss, all request-functions are running async. The pages will load as fast as they always do.


### Appendix

- Powered by [elophant](http://www.elophant.com/ "LoL Champion and Summoner Stats")
- This userscript on [userscripts.org] (http://userscripts.org/scripts/show/172058 "LoL Forum Icons for Greasemonkey")


### Frequently Asked Questions - FAQ

> Why does the installation / update of this script take this long?

Usually, the first installation takes a longer time, because this script carries all summoner icons and some additional javascript along. *(about 5 to 10 MB, so not that much)*

> Won't this script increase bandwidth usage with all these icons to be shown on every page?

It won't. We just download the icons once at installation. After that they are stored locally on your harddrive *(5 to 10 MB, nothing to worry about)* and referenced from there. So no additional bandwidth is used to display them over and over again.