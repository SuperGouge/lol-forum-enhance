var updateModal = {
    addButton: function () {
        var button = $('<a id="userscript-updates-button" href="#">LFE Updates available!</a>'); // TODO: localization
        $('#website-feedback').append(button);
        $('#userscript-updates-button').on('click', function () {
            $('#lfeUpdatesModal').trigger('openModal');
        });
    },
    addModal: function () {
        var updateModal = $(GM_getResourceText('update-alert'));
        $('body').append(updateModal); // TODO: Add localization for update alert.

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
        //$('#lfeUpdatesModal').css('top', 'auto');
        //$('#lfeUpdatesModal').css('left', 'auto');
        //$('#lfeUpdatesModal').css('right', '10px');
        //$('#lfeUpdatesModal').css('bottom', '30px');
        //$('#lfeUpdatesModal').next().css('pointer-events', 'none');

        $('#lfe-update-dismiss').on('click', function () {
            //userscript.setCookie('lfe-update-dismissed', 'true', 60 * 60 * 1000);
        });

        $('#lfe-update-install').on('click', function () {
            userscript.forceUpdate();
        });
    },
    localize: function () {
        // TODO: localization
    },
    showIfNeccessary: function () {
        var dismissed = userscript.getCookie('lfe-update-dismissed');
        if (lfeOptions.data.updates && !dismissed) {
            userscript.updateNeccessary(function (updateNecc) {
                if (updateNecc) {
                    $('#userscript-updates-button').css('display', 'block');
                }
            });
        }
    }
};