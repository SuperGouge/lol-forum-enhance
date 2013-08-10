var toolkitVersions = {
    ToolkitVersion: function () {
        var that = this;
        var orig = '';
        var versionParts = [];

        this.setVersion = function (string) {
            orig = string;
            var splits = string.split('.');
            for (var i = 0; i < splits.length; i++) {
                var vp = new toolkitVersions.ToolkitVersionPart();
                vp.setVersionPart(splits[i]);
                versionParts.push(vp);
            }
        };

        this.getOrig = function () { return orig; };
        this.getComputedStr = function () {
            var strOut = '';
            for (var i = 0; i < (versionParts.length - 1) ; i++) {
                strOut += versionParts[i].getComputedStr();
                strOut += '.';
            }
            // add last versionPart
            strOut += versionParts[(versionParts.length - 1)].getComputedStr();
            return strOut;
        };
        this.getVersionParts = function () { return versionParts.slice(); };

        this.isGreaterThan = function (version) {
            var vp1 = versionParts;
            var vp2 = version.getVersionParts();
            var l;
            if (vp1.length > vp2.length) l = vp1.length;
            else l = vp2.length;
            for (var i = 0; i < l; i++) {
                // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
                if (vp1[i] === undefined) vp1[i] = new toolkitVersions.ToolkitVersionPart();
                if (vp2[i] === undefined) vp2[i] = new toolkitVersions.ToolkitVersionPart();
                if (vp1[i].isGreaterThan(vp2[i])) return true;
                if (vp1[i].isLowerThan(vp2[i])) return false;
            }
            // equal
            return false;
        };
        this.isLowerThan = function (version) {
            var vp1 = versionParts;
            var vp2 = version.getVersionParts();
            var l;
            if (vp1.length > vp2.length) l = vp1.length;
            else l = vp2.length;
            for (var i = 0; i < l; i++) {
                // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
                if (vp1[i] === undefined) vp1[i] = new toolkitVersions.ToolkitVersionPart();
                if (vp2[i] === undefined) vp2[i] = new toolkitVersions.ToolkitVersionPart();
                if (vp1[i].isGreaterThan(vp2[i])) return false;
                if (vp1[i].isLowerThan(vp2[i])) return true;
            }
            // equal
            return false;
        };
        this.isEqualTo = function (version) {
            var vp1 = versionParts;
            var vp2 = version.getVersionParts();
            var l;
            if (vp1.length > vp2.length) l = vp1.length;
            else l = vp2.length;
            for (var i = 0; i < l; i++) {
                // set not defined versionParts to defaults (occurrs when one version has more parts than the other)
                if (vp1[i] === undefined) vp1[i] = new toolkitVersions.ToolkitVersionPart();
                if (vp2[i] === undefined) vp2[i] = new toolkitVersions.ToolkitVersionPart();
                if (!vp1[i].isEqualTo(vp2[i])) return false;
            }
            // equal
            return true;
        };
    },
    ToolkitVersionPart: function () {
        var that = this;
        var orig = '';
        var numA = 0;
        var strB = '';
        var numC = 0;
        var strD = '';

        this.setVersionPart = function (string) {
            orig = string;
            var m = string.match(/^([0-9\-]+)?([^\d]+)?([0-9\-]+)?(.+)?$/i);

            numA = parseInt(m[1], 10);
            strB = m[2];
            numC = parseInt(m[3], 10);
            strD = m[4];

            if (isNaN(numA)) numA = 0;
            if (strB === undefined) strB = '';
            if (isNaN(numC)) numC = 0;
            if (strD === undefined) strD = '';

            // VersionPart rules:

            // * --> (infinity)
            if (orig === '*') {
                numA = Number.POSITIVE_INFINITY;
                strB = '';
                numC = 0;
                strD = '';
            }

            // 1.1+ --> 1.2pre
            if (strB === '+') {
                numA++;
                strB = 'pre';
            }
        };

        this.getOrig = function () { return orig; };
        this.getNumA = function () { return numA; };
        this.getStrB = function () { return strB; };
        this.getNumC = function () { return numC; };
        this.getStrD = function () { return strD; };
        this.getComputedStr = function () {
            var str = '';
            if (numA !== 0) str += numA.toString();
            str += strB;
            if (numC !== 0) str += numC.toString();
            str += strD;
            return str;
        };

        this.isGreaterThan = function (versionPart) {
            var cNumA = compareNum(numA, versionPart.getNumA());
            if (cNumA === 1) return true;
            else if (cNumA === 2) return false;

            var cStrB = compareStr(strB, versionPart.getStrB());
            if (cStrB === 1) return true;
            else if (cStrB === 2) return false;

            var cNumC = compareNum(numC, versionPart.getNumC());
            if (cNumC === 1) return true;
            else if (cNumC === 2) return false;

            var cStrD = compareStr(strD, versionPart.getStrD());
            if (cStrD === 1) return true;
            else if (cStrD === 2) return false;

            // equal
            return false;
        };
        this.isLowerThan = function (versionPart) {
            var cNumA = compareNum(numA, versionPart.getNumA());
            if (cNumA === 1) return false;
            else if (cNumA === 2) return true;

            var cStrB = compareStr(strB, versionPart.getStrB());
            if (cStrB === 1) return false;
            else if (cStrB === 2) return true;

            var cNumC = compareNum(numC, versionPart.getNumC());
            if (cNumC === 1) return false;
            else if (cNumC === 2) return true;

            var cStrD = compareStr(strD, versionPart.getStrD());
            if (cStrD === 1) return false;
            else if (cStrD === 2) return true;

            // equal
            return false;
        };
        this.isEqualTo = function (versionPart) {
            var cNumA = compareNum(numA, versionPart.getNumA());
            if (cNumA !== 0) return false;

            var cStrB = compareStr(strB, versionPart.getStrB());
            if (cStrB !== 0) return false;

            var cNumC = compareNum(numC, versionPart.getNumC());
            if (cNumC !== 0) return false;

            var cStrD = compareStr(strD, versionPart.getStrD());
            if (cStrD !== 0) return false;

            // equal
            return true;
        };

        // always returns number of greater element (0 if equal)
        function compareNum(num1, num2) {
            if (num1 > num2) return 1;
            else if (num2 > num1) return 2;
            else return 0;
        }
        function compareStr(str1, str2) {
            if ((str1 === '') && (str2 === '')) return 0;
            else if ((str1 === '') && (str2 !== '')) return 1;
            else if ((str1 !== '') && (str2 === '')) return 2;
            else if (str1 > str2) return 1;
            else if (str2 > str1) return 2;
            else return 0;
        }
    },
    compare: function (a, b) {
        // (a = b) --> 0
        // (a < b) --> -1
        // (a > b) --> 1

        var vA = new toolkitVersions.ToolkitVersion();
        var vB = new toolkitVersions.ToolkitVersion();

        vA.setVersion(a);
        vB.setVersion(b);

        if (vA.isEqualTo(vB)) return 0;
        else if (vA.isLowerThan(vB)) return -1;
        else if (vA.isGreaterThan(vB)) return 1;
        else throw 'Version comparation error occurred.';
    }
};