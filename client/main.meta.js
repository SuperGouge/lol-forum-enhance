// ==UserScript==
// @name        LoL Forum Enhance
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/main.user.js
// @updateURL   https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/main.meta.js
// @version     0.7.1refactoring
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
// @resource    globalcss https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/global.css
// @require     http://code.jquery.com/jquery-2.0.2.min.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/global.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/avatar-div.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/toolkitVersions.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/options-modal.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/bootstrap/js/bootstrap.min.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/bootstrapx-clickover/bootstrapx-clickover.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/aokura/unicode-utf8.js
// @resource    bootstrapcss https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/bootstrap/css/bootstrap.min.css
// @resource    options-modal https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/options-modal.html
// @resource    update-alert https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/update-alert.html
// @resource    avatardivhtml https://raw.github.com/philippwiddra/lol-forum-enhance/refactoring/client/avatar-div.html
// @resource    iconUnknown http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/unknown.jpg
// @resource    iconNotFound http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/notfound.jpg
// @resource    icon0 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/0.jpg
// @resource    icon1 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/1.jpg
// @resource    icon2 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/2.jpg
// @resource    icon3 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/3.jpg
// @resource    icon4 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/4.jpg
// @resource    icon5 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/5.jpg
// @resource    icon6 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/6.jpg
// @resource    icon7 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/7.jpg
// @resource    icon8 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/8.jpg
// @resource    icon9 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/9.jpg
// @resource    icon10 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/10.jpg
// @resource    icon11 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/11.jpg
// @resource    icon12 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/12.jpg
// @resource    icon13 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/13.jpg
// @resource    icon14 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/14.jpg
// @resource    icon15 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/15.jpg
// @resource    icon16 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/16.jpg
// @resource    icon17 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/17.jpg
// @resource    icon18 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/18.jpg
// @resource    icon19 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/19.jpg
// @resource    icon20 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/20.jpg
// @resource    icon21 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/21.jpg
// @resource    icon22 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/22.jpg
// @resource    icon23 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/23.jpg
// @resource    icon24 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/24.jpg
// @resource    icon25 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/25.jpg
// @resource    icon26 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/26.jpg
// @resource    icon27 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/27.jpg
// @resource    icon28 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/28.jpg
// @resource    icon29 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/29.jpg
// @resource    icon30 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/30.jpg
// @resource    icon31 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/31.jpg
// @resource    icon32 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/32.jpg
// @resource    icon33 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/33.jpg
// @resource    icon34 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/34.jpg
// @resource    icon35 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/35.jpg
// @resource    icon36 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/36.jpg
// @resource    icon37 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/37.jpg
// @resource    icon38 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/38.jpg
// @resource    icon39 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/39.jpg
// @resource    icon40 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/40.jpg
// @resource    icon41 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/41.jpg
// @resource    icon42 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/42.jpg
// @resource    icon43 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/43.jpg
// @resource    icon44 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/44.jpg
// @resource    icon45 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/45.jpg
// @resource    icon46 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/46.jpg
// @resource    icon47 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/47.jpg
// @resource    icon48 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/48.jpg
// @resource    icon49 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/49.jpg
// @resource    icon50 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/50.jpg
// @resource    icon51 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/51.jpg
// @resource    icon52 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/52.jpg
// @resource    icon53 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/53.jpg
// @resource    icon54 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/54.jpg
// @resource    icon55 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/55.jpg
// @resource    icon56 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/56.jpg
// @resource    icon57 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/57.jpg
// @resource    icon58 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/58.jpg
// @resource    icon59 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/59.jpg
// @resource    icon60 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/60.jpg
// @resource    icon61 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/61.jpg
// @resource    icon62 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/62.jpg
// @resource    icon63 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/63.jpg
// @resource    icon64 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/64.jpg
// @resource    icon65 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/65.jpg
// @resource    icon66 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/66.jpg
// @resource    icon501 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/501.jpg
// @resource    icon502 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/502.jpg
// @resource    icon503 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/503.jpg
// @resource    icon504 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/504.jpg
// @resource    icon505 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/505.jpg
// @resource    icon506 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/506.jpg
// @resource    icon507 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/507.jpg
// @resource    icon508 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/508.jpg
// @resource    icon509 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/509.jpg
// @resource    icon510 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/510.jpg
// @resource    icon511 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/511.jpg
// @resource    icon512 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/512.jpg
// @resource    icon513 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/513.jpg
// @resource    icon514 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/514.jpg
// @resource    icon515 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/515.jpg
// @resource    icon516 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/516.jpg
// @resource    icon517 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/517.jpg
// @resource    icon518 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/518.jpg
// @resource    icon519 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/519.jpg
// @resource    icon520 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/520.jpg
// @resource    icon521 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/521.jpg
// @resource    icon522 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/522.jpg
// @resource    icon523 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/523.jpg
// @resource    icon524 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/524.jpg
// @resource    icon525 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/525.jpg
// @resource    icon526 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/526.jpg
// @resource    icon527 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/527.jpg
// @resource    icon528 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/528.jpg
// @resource    icon529 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/529.jpg
// @resource    icon530 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/530.jpg
// @resource    icon531 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/531.jpg
// @resource    icon532 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/532.jpg
// @resource    icon533 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/533.jpg
// @resource    icon534 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/534.jpg
// @resource    icon535 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/535.jpg
// @resource    icon536 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/536.jpg
// @resource    icon537 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/537.jpg
// @resource    icon538 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/538.jpg
// @resource    icon539 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/539.jpg
// @resource    icon540 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/540.jpg
// @resource    icon541 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/541.jpg
// @resource    icon542 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/542.jpg
// @resource    icon543 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/543.jpg
// @resource    icon544 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/544.jpg
// @resource    icon545 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/545.jpg
// @resource    icon546 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/546.jpg
// @resource    icon547 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/547.jpg
// @resource    icon548 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/548.jpg
// @resource    icon549 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/549.jpg
// @resource    icon550 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/550.jpg
// @resource    icon551 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/551.jpg
// @resource    icon552 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/552.jpg
// @resource    icon553 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/553.jpg
// @resource    icon554 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/554.jpg
// @resource    icon555 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/555.jpg
// @resource    icon556 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/556.jpg
// @resource    icon557 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/557.jpg
// @resource    icon558 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/558.jpg
// @resource    icon559 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/559.jpg
// @resource    icon560 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/560.jpg
// @resource    icon561 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/561.jpg
// @resource    icon562 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/562.jpg
// @resource    icon563 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/563.jpg
// @resource    icon564 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/564.jpg
// @resource    icon565 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/565.jpg
// @resource    icon566 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/566.jpg
// @resource    icon567 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/567.jpg
// @resource    icon568 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/568.jpg
// @resource    icon569 http://www.piltover-libraries.net/lol-forum-enhance/SummonerIcons/569.jpg
// ==/UserScript==
