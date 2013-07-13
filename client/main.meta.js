// ==UserScript==
// @name        LoL Forum Enhance
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js
// @updateURL   https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.meta.js
// @version     0.4.1
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
// @resource    globalcss https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/global.css
// @require     http://code.jquery.com/jquery-2.0.2.min.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/global.js
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
