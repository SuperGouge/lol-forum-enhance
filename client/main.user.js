// ==UserScript==
// @name        LoL Forum Enhance
// @namespace   https://github.com/philippwiddra
// @description Supplements the League of Legends forums and sites with additional functions.
// @include     *.leagueoflegends.com/board/*
// @downloadURL https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js
// @updateURL   https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.meta.js
// @version     0.7.0refactoring
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
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/avatar-div.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/toolkitVersions.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/bootstrap/js/bootstrap.min.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/bootstrapx-clickover/bootstrapx-clickover.js
// @require     https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/aokura/unicode-utf8.js
// @resource    bootstrapcss https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/bootstrap/css/bootstrap.min.css
// @resource    options-modal https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/options-modal.html
// @resource    update-alert https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/update-alert.html
// @resource    avatardivhtml https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/avatar-div.html
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

/*******************************
 *    Definition of Classes    *
 *******************************/

var lfeOptions = {
    lfeOptionsString: 'LFEOptions',
    data: {
        updates: true,
        enlarge: true,
        avatar: true,
        wt: false,
        fek: false,
        link: 'selection',
        charset: false
    },
    loadLocal: function () {
        try {
            var temp = GM_getValue(this.lfeOptionsString);
            if (temp !== undefined) this.data = JSON.parse(temp);
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                // error in JSON.parse (input may be not valid JSON)
                this.data = {
                    updates: true,
                    enlarge: true,
                    avatar: true,
                    wt: false,
                    fek: false,
                    link: 'selection',
                    charset: false
                };
            }
            else {
                throw e;
            }
        }
    },
    saveLocal: function () {
        GM_setValue(this.lfeOptionsString, JSON.stringify(this.data));
    }
};
 
function Summoner() {
    var that = this;
    this.data = {
        internalName: null,
        name: null,
        server: null,
        acctId: null,
        profileIconId: null,
        revisionDate: null,
        currentDate: null,
        summonerLevel: null,
        summonerId: null,
        success: null
    };
    this.toJsonString = function () {
        return JSON.stringify(that.data);
    };
    this.fromJsonString = function (json) {
        that.data = JSON.parse(json);
    };
}

var level2Cache = {
    getSummonerUrl: 'http://www.piltover-libraries.net/lol-forum-enhance/getSummoner.php',
    getSummoner: function (name, server, found, notFound) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: this.getSummonerUrl + '?summoner=' + encodeURIComponent(name) + '&server=' + server,
            onload: function (response) {
                var s = new Summoner();
                s.fromJsonString(response.responseText);
                if (s.data.success) found(s);
                else notFound(s);
            }
        });
    }
};

var level1Cache = {
    cachedSummoners: {},
    cachedSummonerString: 'SummonerCache',
    getSummoner: function (name, server, found, notFound) {
        if (typeof this.cachedSummoners[name] !== 'undefined') {
            if (this.cachedSummoners[name].data.success) found(this.cachedSummoners[name]);
            else notFound(this.cachedSummoners[name]);
        }
        else {
            // Perform a level2Cache call
            level2Cache.getSummoner(name, server, function (s) {
                // Summoner found:
                var summoner = s; // save summoner for this function
                level1Cache.addSummoner(summoner); // add summoner to level1Cache
                found(summoner); // return summoner normally
            },
            function (s) {
                // Summoner not found:
                var summoner = s; // save summoner for this function
                level1Cache.addSummoner(summoner); // add summoner to level1Cache
                notFound(s); // callback
            });
        }
    },
    loadCache: function () {
        try {
            this.cachedSummoners = JSON.parse(GM_getValue(this.cachedSummonerString, '{}'));
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                // error in JSON.parse (input may be not valid JSON)
                this.cachedSummoners = {};
            }
            else {
                throw e;
            }
        }
    },
    cleanCache: function () {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // get yesterdays Date
        var temp = {};
        for (var key in this.cachedSummoners) {
            var match = this.cachedSummoners[key].data.currentDate.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
            var currentDate = new Date((+match[1]), (+match[2]) - 1, (+match[3]), (+match[4]), (+match[5]), (+match[6]));
            if (this.cachedSummoners.hasOwnProperty(key)) {
                // is Summonerdata not older than a day?
                if (currentDate > yesterday) {
                    temp[key] = this.cachedSummoners[key];
                }
            }
        }
        this.cachedSummoners = temp; // only persist newer summoners
    },
    removeCache: function () {
        GM_deleteValue(this.cachedSummonerString);
        this.cachedSummoners = {};
    },
    saveCache: function () {
        GM_setValue(this.cachedSummonerString, JSON.stringify(this.cachedSummoners));
    },
    addSummoner: function (summoner) {
        this.cachedSummoners[summoner.data.name] = summoner;
    }
};

var localizations = {
    defaultLang: 'en',
    fallbackLang: 'en',
    lookupLangKeyOrId: function (keyOrId) {
        var output = this.fallbackLang;
        if (typeof keyOrId === 'number') {
            // keyOrId is int:
            output = this.langIds[keyOrId];
        }
        else if (!isNaN(keyOrId)) {
            // keyOrId is int as String:
            output = this.langIds[parseInt(keyOrId, 10)];
        }
        return output;
    },
    setDefaultLang: function (lang) {
        this.defaultLang = this.lookupLangKeyOrId(lang);
    },
    get: function (key, lang) {
        var l = lang;
        if (typeof lang !== 'undefined') {
            // lang is set:
            l = this.lookupLangKeyOrId(lang);
        }
        else {
            // lang is not set:
            l = this.defaultLang;
        }
        var output = this[key][l];
        if (output === '') output = this[key][this.fallbackLang];
        return output;
    },
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
        "fr": "French",
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
        "fr": "Moi",
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
        "fr": "Forcer mise à jour",
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
        "fr": "Chercher mises à jour",
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
        "fr": "Des mises à jour sont disponibles. Voulez-vous les installer maintenant ?",
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
        "fr": "Mise à jour démarrée.\nVeuillez confirmer l'installation.",
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
        "fr": "Mise à jour annulée.",
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
        "fr": "Aucune mise à jour disponible.\nVous utilisez la version la plus récente.",
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
        "fr": "Vider le cache local",
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
    optionsModalTitleCaption: {  // TODO: Add translations
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
    optionsModalUpdatesCaption: { // TODO: Add translations
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
    optionsModalCharsetCaption: { // TODO: Add translations
        "en": "Rework charset on displayed forum usernames:",
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
    optionsModalEnlargeCaption: { // TODO: Add translations
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
    optionsModalAvatarCaption: { // TODO: Add translations
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
    optionsModalWtCaption: { // TODO: Add translations
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
    optionsModalFekCaption: { // TODO: Add translations
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
    optionsModalLinkCaption: { // TODO: Add translations
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
    optionsModalAnswersOnCaption: { // TODO: Add translations
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
    optionsModalAnswersOffCaption: { // TODO: Add translations
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
    optionsModalAnswersPostsCaption: { // TODO: Add translations
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
    optionsModalAnswersThreadsCaption: { // TODO: Add translations
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
    optionsModalAnswersSelectionCaption: { // TODO: Add translations
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
    optionsModalAnswersNoneCaption: { // TODO: Add translations
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
    optionsModalPresetInfoCaption: { // TODO: Add translations
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
    optionsModalButtonSaveCaption: { // TODO: Add translations
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
    optionsModalButtonDiscardCaption: { // TODO: Add translations
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

var riot = {
    getOwnForumName: function () {
        var name = $('#pvpnet-bar-account-button').text();
        if (name === '') return null;
        else return name;
    },
    getForumServer: function () {
        var match = document.URL.match(/^(?:http\:\/\/)?(na|euw|eune|br)\.leagueoflegends\.com(?:\/.*)?$/i);
        if (match !== null) return match[1];
        else return null;
    }
};

function Userscript() {
    var that = this;

    this.addGlobalStyle = function (css) {
        try {
            var elmHead, elmStyle;
            elmHead = document.getElementsByTagName('head')[0];
            elmStyle = document.createElement('style');
            elmStyle.type = 'text/css';
            elmHead.appendChild(elmStyle);
            elmStyle.innerHTML = css;
        }
        catch (e) {
            if (!document.styleSheets.length) {
                document.createStyleSheet();
            }
            document.styleSheets[0].cssText += css;
        }
    };

    this.setCookie = function (name, value, expireMilliseconds) {
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + expireMilliseconds);
        document.cookie = name + '=' + escape(value) + ((expireMilliseconds === null) ? '' : ';expires=' + expireDate.toGMTString());
    };

    this.getCookie = function (name) {
        var value = document.cookie;
        var start = value.indexOf(' ' + name + '=');
        if (start === -1) {
            start = value.indexOf(name + '=');
        }
        if (start === -1) {
            value = null;
        }
        else {
            start = value.indexOf('=', start) + 1;
            var end = value.indexOf(';', start);
            if (end === -1) {
                end = value.length;
            }
            value = unescape(value.substring(start, end));
        }
        return value;
    };

    this.getLocalVersion = function () {
        return GM_info.script.version;
    };
    this.getRemoteVersion = function (callback) {
        var updateURL = GM_info.scriptMetaStr.match(/\@updateURL[ |\t]+(.+)/i)[1];
        GM_xmlhttpRequest({
            method: 'GET',
            url: updateURL,
            onload: function (response) {
                if (response.status === 200) { // TODO: Replace "==". Is response.status a string or an int?
                    var serverVersion = response.responseText.match(/\@version[ |\t]+(.+)/i)[1];
                    callback(serverVersion);
                }
                else {
                    throw 'Http-Get-Request-Error: ' + response.status + ' - ' + response.statusText;
                }
            }
        });
    };
    this.updateNeccessary = function (callback) {
        var currentVersion = that.getLocalVersion();
        that.getRemoteVersion(function (remoteVersion) {
            var comparison = toolkitVersions.compare(currentVersion, remoteVersion);
            if (comparison < 0) callback(true);
            else callback(false);
        });
    };
    this.forceUpdate = function () {
        var downloadURL = GM_info.scriptMetaStr.match(/\@downloadURL[ |\t]+(.+)/i)[1];
        GM_openInTab(downloadURL);
    };
}

function LolForums() { // TODO: Remove
    var that = this;
    level1Cache.loadCache();
    level1Cache.cleanCache();

    this.replaceAvatars = function () {
        // get all Left items except those of rioters.
        var allLeft = $('.forum_post img.user_summoner_icon').filter($('img[src="lol_theme/img/unknown_icon.jpg"]')).parent().parent().parent().parent();
        allLeft.each(function (i, e) {
            e = $(e);
            if (!e.data('replaced')) {
                var name = e.find('big').text();
                name = name.replace(/(^\s*)|(\s*$)/g, ''); // replace whitespaces at the beginning and end
                var orb = e.find('span.left_orb');
                var image = e.find('img.user_summoner_icon');

                // Cache system (the level-1-cache automatically calls the level-2-cache if it doesnt have the result)
                level1Cache.getSummoner(name, riot.getForumServer(), function (summoner) {
                    // Summoner found:                
                    image.attr('src', GM_getResourceURL("icon" + summoner.data.profileIconId)); // replace image source
                    orb.text(summoner.data.summonerLevel); // replace level
                    level1Cache.saveCache(); // save whole cache

                },
                function (summoner) {
                    // Summoner not found:
                    if (!image.data('overlayed')) {
                        image.parent().append($('<div class="userscript-avatar-overlay">' +
                                                    '<span>' +
                                                        'not found' +
                                                    '</span>' +
                                                '</div>'));
                        image.attr('src', GM_getResourceURL('iconNotFound'));
                        image.data('overlayed', true);
                    }
                });
                e.data('replaced', true);
            }
        });
    };

    this.replaceNames = function () {
        var server = riot.getForumServer();
        var allNames = $('.forum_post .avatar big');
        allNames.each(function (i, e) {
            e = $(e);
            if (!e.data('renamed')) {
                var name = e.text();
                if (lfeOptions.data.charset) name = _from_utf8(name); // charset encoding bugfixes for league forums
                e.contents().replaceWith('<button class="btn btn-link userscript-name-button">' + name + '</button>');
                e.clickover({
                    content: '<div class="btn-group btn-group-vertical">' +
                                  '<button class="btn btn-small summoner-clickover" style="width: 160px" data-href="http://' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&showposts=1">Posts of this user</button>' + // TODO: Add localization
                                  '<button class="btn btn-small summoner-clickover" style="width: 160px" data-href="http://' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&starteronly=1&showposts=0">Threads of this user</button>' + // TODO: Add localization
                              '</div>' +
                              '<button id="userscript-clickover-close" style="display: none;" data-toggle="button" data-dismiss="clickover">Close</button>',
                    animation: true,
                    html: true,
                    placement: 'top',
                    esc_close: 'false',
                    onShown: function () {
                        $('.summoner-clickover').on('click', function () {
                            var link = $(this).attr('data-href');
                            GM_openInTab(link);
                            $('#userscript-clickover-close').click();
                        });
                    }
                });
                e.data('renamed', true);
            }
        });
    };

    this.replaceOwnAvatar = function () {
        var name = riot.getOwnForumName();
        if (name !== null) {
            var subtitle = localizations.get('avatarSub');
            $('#userscript-avatar-subtitle').text(subtitle); // replace subtitle

            // get summoner object
            level1Cache.getSummoner(name, that.server, function (summoner) {
                // Summoner found:
                $('#userscript-avatar-icon').attr('src', GM_getResourceURL('icon' + summoner.data.profileIconId)); // replace image source
                $('#userscript-avatar-level').text(summoner.data.summonerLevel); // replace level
                level1Cache.saveCache();
            }, function (summoner) {
                // Summoner not found:
                // TODO: Add code to handle not found summoners.
            });
        }
    };

    this.replaceOwnName = function () {
        var server = riot.getForumServer();
        var name = riot.getOwnForumName();
        e = $('#userscript-avatar-name');
        if ((!e.data('renamed')) && (name !== null)) {
            if (lfeOptions.data.charset) name = _from_utf8(name); // charset encoding bugfixes for league forums
            e.text(name); // replace name
            e.contents().replaceWith('<button class="btn btn-link userscript-name-button">' + name + '</button>');
            e.clickover({
                content: '<div class="btn-group btn-group-vertical">' +
                              '<button class="btn btn-small summoner-clickover" style="width: 160px" data-href="http://' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&showposts=1">Posts of this user</button>' + // TODO: Add localization
                              '<button class="btn btn-small summoner-clickover" style="width: 160px" data-href="http://' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&starteronly=1&showposts=0">Threads of this user</button>' + // TODO: Add localization
                          '</div>' +
                          '<button id="userscript-clickover-close" style="display: none;" data-toggle="button" data-dismiss="clickover">Close</button>',
                animation: true,
                html: true,
                placement: 'top',
                esc_close: 'false',
                onShown: function () {
                    $('.summoner-clickover').on('click', function () {
                        var link = $(this).attr('data-href');
                        GM_openInTab(link);
                        $('#userscript-clickover-close').click();
                    });
                }
            });
            e.data('renamed', true);
        }
    };

    this.registerMenuCommands = function (userscript) {
        // Force update
        GM_registerMenuCommand(localizations.get('forceUpdateCaption'), function () {
            userscript.forceUpdate();
        }, 'F');

        // Check for updates
        GM_registerMenuCommand(localizations.get('checkUpdatesCaption'), function () {
            userscript.updateNeccessary(function (updateNecc) {
                if (updateNecc) {
                    var confirmInput = confirm(localizations.get('updatesConfirmMessage'));
                    if (confirmInput) {
                        alert(localizations.get('updatesStartMessage'));
                        userscript.forceUpdate();
                    }
                    else {
                        alert(localizations.get('updatesCanceledMessage'));
                    }
                }
                else {
                    alert(localizations.get('noUpdatesMessage'));
                }
            });
        }, 'u');

        // Clear local cache
        GM_registerMenuCommand(localizations.get('clearCacheCaption'), function () {
            level1Cache.removeCache();
            level1Cache.loadCache();
        }, 'C');
    };
}

var pageHandler = {
    runOn: function (expression, block) {
        if (typeof block === 'undefined') throw 'block has to be defined!';
        if (expression.test(document.URL)) {
            block();
        }
    },
    dontRunOn: function (expression, block) {
        if (typeof block === 'undefined') throw 'block has to be defined!';
        if (!expression.test(document.URL)) {
            block();
        }
    }
};


/*******************************
 *    Start of Main Script     *
 *******************************/

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver; // Secure browser-compatibility for Chrome

// Initiating main Objects
var script = new Userscript();
var forums = new LolForums();

lfeOptions.loadLocal(); // load global userscript options
localizations.defaultLang = script.getCookie('LOLLANG'); // set default language for localization from riot-implemented cookie

// css style changes
script.addGlobalStyle(GM_getResourceText('bootstrapcss'));
script.addGlobalStyle(GM_getResourceText('globalcss'));

// auto-updates
var dismissed = script.getCookie('lfe-update-dismissed');
if (lfeOptions.data.updates && !dismissed) {
    script.updateNeccessary(function (updateNecc) {
        if (updateNecc) {
            $('body').prepend($(GM_getResourceText('update-alert')));
            // TODO: Add localization for update alert.

            $('#lfe-update-dismiss').on('click', function () {
                script.setCookie('lfe-update-dismissed', 'true', 60 * 60 * 1000);
            });

            $('#lfe-update-install').on('click', function () {
                script.forceUpdate();
                $('#lfe-update-alert').remove();
            });
        }
    });
}

// options modal
var modalButton = $('<div id="lol-forum-enhance-settings" class="userscript-pvpnet-bar"><a href="#lfeOptionsModal" role="button" data-toggle="modal">' + localizations.get('optionsModalButtonCaption') + '</a></div>');
var modal = $(GM_getResourceText('options-modal'));
$('#pvpnet-bar-inner').prepend(modalButton);
$('#forum_body').append(modal);
$('#lfe-o-captions-title').text(localizations.get('optionsModalTitleCaption'));
$('#lfe-o-captions-updates').text(localizations.get('optionsModalUpdatesCaption'));
$('#lfe-o-captions-charset').text(localizations.get('optionsModalCharsetCaption'));
$('#lfe-o-captions-enlarge').text(localizations.get('optionsModalEnlargeCaption'));
$('#lfe-o-captions-avatar').text(localizations.get('optionsModalAvatarCaption'));
$('#lfe-o-captions-wt').text(localizations.get('optionsModalWtCaption'));
$('#lfe-o-captions-fek').text(localizations.get('optionsModalFekCaption'));
$('#lfe-o-captions-link').text(localizations.get('optionsModalLinkCaption'));
$('.lfe-o-captions-answers-on').text(localizations.get('optionsModalAnswersOnCaption'));
$('.lfe-o-captions-answers-off').text(localizations.get('optionsModalAnswersOffCaption'));
$('.lfe-o-captions-answers-posts').text(localizations.get('optionsModalAnswersPostsCaption'));
$('.lfe-o-captions-answers-threads').text(localizations.get('optionsModalAnswersThreadsCaption'));
$('.lfe-o-captions-answers-selection').text(localizations.get('optionsModalAnswersSelectionCaption'));
$('.lfe-o-captions-answers-none').text(localizations.get('optionsModalAnswersNoneCaption'));
$('#lfe-o-captions-preset-info').text(localizations.get('optionsModalPresetInfoCaption'));
$('#lfe-o-captions-button-save').text(localizations.get('optionsModalButtonSaveCaption'));
$('#lfe-o-captions-button-discard').text(localizations.get('optionsModalButtonDiscardCaption'));

// Load options into modal when shown
$('#lfeOptionsModal').on('shown', function () {
    $('#lfeOptionsModal button.active').removeClass('active');

    if (lfeOptions.data.updates) $('#lfe-o-updates-on').addClass('active');
    else $('#lfe-o-updates-off').addClass('active');

    if (lfeOptions.data.charset) $('#lfe-o-charset-on').addClass('active');
    else $('#lfe-o-charset-off').addClass('active');

    if (lfeOptions.data.enlarge) $('#lfe-o-enlarge-on').addClass('active');
    else $('#lfe-o-enlarge-off').addClass('active');

    if (lfeOptions.data.avatar) $('#lfe-o-avatar-on').addClass('active');
    else $('#lfe-o-avatar-off').addClass('active');

    if (lfeOptions.data.wt) $('#lfe-o-wt-on').addClass('active');
    else $('#lfe-o-wt-off').addClass('active');

    if (lfeOptions.data.fek) $('#lfe-o-fek-on').addClass('active');
    else $('#lfe-o-fek-off').addClass('active');

    $('#lfe-o-link-' + lfeOptions.data.link).addClass('active');
});

// Register save-options function
$('#lfe-o-save').click(function () {
    lfeOptions.data.updates = $('#lfe-o-updates .active').data('value');
    lfeOptions.data.charset = $('#lfe-o-charset .active').data('value');
    lfeOptions.data.enlarge = $('#lfe-o-enlarge .active').data('value');
    lfeOptions.data.avatar = $('#lfe-o-avatar .active').data('value');
    lfeOptions.data.wt = $('#lfe-o-wt .active').data('value');
    lfeOptions.data.fek = $('#lfe-o-fek .active').data('value');
    lfeOptions.data.link = $('#lfe-o-link .active').data('value');
    lfeOptions.saveLocal();
    $('#lfeOptionsModal').modal('hide');
});

// register greasemonkey userscript menu commands
forums.registerMenuCommands(script);

// create an observer for the #posts div instance
var observerTarget = document.querySelector('#posts');
var postsObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        // TODO: Check if forEach is needed, replaceAvatars itself traverses over posts.
        // TODO: Check if attaching avatarDiv and replacing Data is needed in case of logging in without site reload.
        forums.replaceNames(); // replace Names and/to provide linking
        forums.replaceAvatars(); // replace the summoner images and levels
    });
});
var observerConfig = { childList: true, subtree: true };

if (riot.getForumServer() !== null) {
    // Server found:
    avatarDiv.attach();
    avatarDiv.replaceData(); // replace own avatar (if name and avatar available) and provide linking
    forums.replaceNames(); // replace Names and/to provide linking
    forums.replaceAvatars(); // replace the summoner images and levels
    postsObserver.observe(observerTarget, observerConfig); // start observing #posts
}
else {
    // Server not found:
}