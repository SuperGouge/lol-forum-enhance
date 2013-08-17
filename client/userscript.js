var userscript = {
    resolveCssAnnotations: function (aCss) {
        var css = aCss;

        var re = /(\/\*!? *@resolve:)(.*?)( *\*\/)/;
        var matches = css.match(re);
        while (matches) {
            var before = matches[1];
            var match = matches[2];
            var after = matches[3];

            // perform custom replacement
            var newMatch = match.replace(/GM_getResourceURL\(['"](.*?)['"]\)/g, '"' + GM_getResourceURL('$1') + '"'); // GM_getResource resolve

            css = css.replace(before + match + after, newMatch);
            matches = css.match(re);
        }

        return css;
    },
    addGlobalStyle: function (css, id) {
        /*
        try {
            var elmHead, elmStyle;
            elmHead = document.getElementsByTagName('head')[0];
            elmStyle = document.createElement('style');
            elmStyle.type = 'text/css';
            elmHead.appendChild(elmStyle);
            elmStyle.innerHTML = userscript.resolveCssAnnotations(css);
        }
        catch (e) {
            if (!document.styleSheets.length) {
                document.createStyleSheet();
            }
            document.styleSheets[0].cssText += css;
        }
        */
        var style;
        if (id) style = $('<style id="' + id + '" type="text/css">');
        else style = $('<style type="text/css">');
        style.text(userscript.resolveCssAnnotations(css));
        $('head').append(style);
    },
    prependGlobalStyle: function (css, id) {
        /*
        try {
            var elmHead, elmStyle;
            elmHead = document.getElementsByTagName('head')[0];
            elmStyle = document.createElement('style');
            elmStyle.type = 'text/css';
            elmHead.insertBefore(elmStyle, elmHead.firstChild);
            elmStyle.innerHTML = userscript.resolveCssAnnotations(css);
        }
        catch (e) {
            if (!document.styleSheets.length) {
                document.createStyleSheet();
            }
            document.styleSheets[0].cssText += css;
        }
        */
        var style;
        if (id) style = $('<style id="' + id + '" type="text/css">');
        else style = $('<style type="text/css">');
        style.text(userscript.resolveCssAnnotations(css));
        $('head').prepend(style);
    },
    setCookie: function (name, value, expireMilliseconds) {
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + expireMilliseconds);
        document.cookie = name + '=' + escape(value) + ((expireMilliseconds === null) ? '' : ';expires=' + expireDate.toGMTString());
    },
    getCookie: function (name) {
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
    },
    getLocalVersion: function () {
        return GM_info.script.version;
    },
    getRemoteVersion: function (callback) {
        var updateURL = GM_info.scriptMetaStr.match(/\@updateURL[ |\t]+(.+)/i)[1];
        GM_xmlhttpRequest({
            method: 'GET',
            url: updateURL,
            onload: function (response) {
                if (response.status === 200) {
                    var serverVersion = response.responseText.match(/\@version[ |\t]+(.+)/i)[1];
                    callback(serverVersion);
                }
                else {
                    throw 'Http-Get-Request-Error: ' + response.status + ' - ' + response.statusText;
                }
            }
        });
    },
    updateNeccessary: function (callback) {
        var currentVersion = userscript.getLocalVersion();
        userscript.getRemoteVersion(function (remoteVersion) {
            var comparison = toolkitVersions.compare(currentVersion, remoteVersion);
            if (comparison < 0) callback(true);
            else callback(false);
        });
    },
    forceUpdate: function () {
        var downloadURL = GM_info.scriptMetaStr.match(/\@downloadURL[ |\t]+(.+)/i)[1];
        GM_openInTab(downloadURL);
    }
};
