var updateModal = {
    addButton: function () {
        var button = $('<a id="userscript-updates-button" href="#">LFE updates available!</a>');
        $('#website-feedback').append(button);
        $('#userscript-updates-button').on('click', function () {
            $('#lfeUpdatesModal').trigger('openModal');
        });
    },
    addModal: function () {
        var updateModal = $(GM_getResourceText('update-alert'));
        $('body').append(updateModal);

        $('#lfeUpdatesModal').easyModal({
            top: 100,
            autoOpen: false,
            overlayOpacity: 0.5,
            overlayColor: '#000',
            overlayClose: true,
            closeOnEscape: true,
            closeButtonClass: '.userscript-update-modal-close',
            onOpen: function (updateModal) {
                //$(modal).append('Opened!');
            },
            onClose: function (updateModal) {
                //$(modal).append('Closed!');
            }
        });

        $('#lfe-update-dismiss').on('click', function () {
            //userscript.setCookie('lfe-update-dismissed', 'true', 60 * 60 * 1000);
        });

        $('#lfe-update-install').on('click', function () {
            userscript.forceUpdate();
        });
    },
    localize: function () {
        $('#lfe-u-captions-button-dismiss').text(localizations.get('updateButtonDismiss'));
        $('#lfe-u-captions-button-update').text(localizations.get('updateButtonUpdate'));
        $('#lfe-u-captions-new-version').text(localizations.get('updateNewVersionCaption'));
        $('#lfe-u-captions-own-version').text(localizations.get('updateOwnVersionCaption'));
        $('#lfe-u-captions-text').text(localizations.get('updateTextCaption'));
        $('#lfe-u-captions-title').text(localizations.get('updateTitleCaption'));
        $('#userscript-updates-button').text(localizations.get('updateAvailableButton'));
    },
    showIfNeccessary: function () {
        var dismissed = userscript.getCookie('lfe-update-dismissed');
        if (lfeOptions.data.updates && !dismissed) {
            userscript.updateNeccessary(function (updateNecc) {
                if (updateNecc) {
                    $('#userscript-own-version').text(userscript.getLocalVersion());
                    userscript.getRemoteVersion(function (v) {
                        $('#userscript-new-version').text(v);
                    });
                    $('#userscript-updates-button').css('display', 'block');
                }
            });
        }
    }
};