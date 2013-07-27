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
