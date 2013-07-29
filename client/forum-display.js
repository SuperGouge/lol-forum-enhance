var forumDisplay = {
    fixNamesIfEnabled: function () {
        if (lfeOptions.data.charset) {
            $('.last_post').each(function (i, e) {
                $(e).text(_from_utf8($(e).text())); // TODO: Starting with "by". Maybe regexpr that out.
            });
            $('.author').each(function (i, e) {
                $(e).text(_from_utf8($(e).text()));
            });
        }
    }
};