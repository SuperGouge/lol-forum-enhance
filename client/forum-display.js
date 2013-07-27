var forumDisplay = {
    fixNamesIfEnabled: function () {
        if (lfeOptions.data.charset) {
            $('.last_post > b').each(function (i, e) {
                $(e).text(_from_utf8($(e).text()));
            });
            $('.author > b').each(function (i, e) {
                $(e).text(_from_utf8($(e).text()));
            });
        }
    }
}