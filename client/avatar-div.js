var avatarDiv = {
    attach: function () {
        var quickReplyContainer = $("#vB_Editor_QR").parent().parent();

        var avatar = GM_getResourceText('avatardivhtml');
        
        quickReplyContainer.prepend(avatar);
        quickReplyContainer.append($('<div class="userscript-clear"></div>'));
    },
    replaceData: function () {
        var server = riot.getForumServer();
        var name = riot.getOwnForumName();
        var e = $('#userscript-avatar-name');
        if ((!e.data('replaced')) && (name !== null)) {
            if (lfeOptions.data.charset) name = _from_utf8(name); // charset encoding bugfixes for league forums
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
            e.data('replaced', true);
        }
    }
};