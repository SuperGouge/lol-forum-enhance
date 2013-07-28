var userscript = {
    addGlobalStyle: function (css) {
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
    },
    prependGlobalStyle: function (css) {
        try {
            var elmHead, elmStyle;
            elmHead = document.getElementsByTagName('head')[0];
            elmStyle = document.createElement('style');
            elmStyle.type = 'text/css';
            elmHead.insertBefore(elmStyle, elmHead.firstChild);
            elmStyle.innerHTML = css;
        }
        catch (e) {
            if (!document.styleSheets.length) {
                document.createStyleSheet();
            }
            document.styleSheets[0].cssText += css;
        }
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
