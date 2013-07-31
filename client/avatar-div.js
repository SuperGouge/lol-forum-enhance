var avatarDiv = {
    attach: function () {
        var editorContainer = $('#collapseobj_quick_reply .editor-container');
        var avatar = $(GM_getResourceText('avatardivhtml'));
        $('<div class="userscript-clear"></div>').insertAfter(editorContainer);
        avatar.insertBefore(editorContainer);
    },
    replaceData: function () {
        var server = riot.getForumServer();
        var name = riot.getOwnForumName();
        var e = $('#userscript-avatar-name');
        if ((!e.data('replaced')) && (name !== null)) {
            //if (lfeOptions.data.charset) name = _from_utf8(name); // charset encoding bugfixes for league forums
            var subtitle = localizations.get('avatarSub'); // get localized subtitle
            $('#userscript-avatar-subtitle').text(subtitle); // replace subtitle
            e.text(name); // replace name
            level1Cache.getSummoner(name, riot.getForumServer(), function (summoner) {
                // Summoner found:
                $('#userscript-avatar-icon').attr('src', GM_getResourceURL('icon' + summoner.data.profileIconId)); // replace image source
                $('#userscript-avatar-level').text(summoner.data.summonerLevel); // replace level
                level1Cache.saveCache();
            }, function (summoner) {
                // Summoner not found:
                // TODO: Add code to handle not found summoner data.
            });
            if (lfeOptions.data.link === 'selection') {
                e.addClass('userscript-name');
                e.lfePopover({
                    html: true,
                    content: '<div class="userscript-summoner-popover-buttons">' +
                                  '<button type="button" data-href="http://forums.' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&showposts=1">' + localizations.get('nameClickoverPostsCaption') + '</button>' + // TODO: Check if URL still works when live
                                  '<button type="button" data-href="http://forums.' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&starteronly=1&showposts=0">' + localizations.get('nameClickoverThreadsCaption') + '</button>' + // TODO: Check if URL still works when live
                             '</div>',
                });
                e.click(function () {
                    $(this).lfePopover('toggle');
                });
                e.parent().find('.userscript-summoner-popover-buttons > button').click(function () {
                    var link = $(this).attr('data-href');
                    GM_openInTab(link);
                    e.lfePopover('hide');
                });
            }
            else if (lfeOptions.data.link === 'posts') {
                e.text(name);
                e.addClass('userscript-name');
                e.attr('data-href', 'http://forums.' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&showposts=1'); // TODO: Check if URL still works when live
                e.click(function () {
                    var link = $(this).attr('data-href');
                    GM_openInTab(link);
                });
            }
            else if (lfeOptions.data.link === 'threads') {
                e.text(name);
                e.addClass('userscript-name');
                e.attr('data-href', 'http://forums.' + server + '.leagueoflegends.com/board/search.php?do=process&searchuser=' + name + '&exactname=1&starteronly=1&showposts=0'); // TODO: Check if URL still works when live
                e.click(function () {
                    var link = $(this).attr('data-href');
                    GM_openInTab(link);
                });
            }
            else { // lfeOptions.data.link === 'none'
                e.text(name);
            }
            e.data('replaced', true);
        }
    }
};