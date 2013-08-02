var updateModal = {
    addModal: function () {
        var updateModal = $(GM_getResourceText('update-alert'));
        $('body').append(updateModal); // TODO: Add localization for update alert.

        $('#lfeUpdatesModal').easyModal({
            top: 100,
            autoOpen: false,
            overlayOpacity: 0.5,
            overlayColor: '#000',
            overlayClose: false,
            closeOnEscape: false,
            closeButtonClass: '.userscript-update-modal-close',
            onOpen: function (updateModal) {
                //$(modal).append('Opened!');
            },
            onClose: function (updateModal) {
                //$(modal).append('Closed!');
            }
        });

        $('#lfe-update-dismiss').on('click', function () {
            userscript.setCookie('lfe-update-dismissed', 'true', 60 * 60 * 1000);
        });

        $('#lfe-update-install').on('click', function () {
            userscript.forceUpdate();
            //$('#lfe-update-alert').remove();
        });
    },
    localize: function () {

    },
    showIfNeccessary: function () {
        var dismissed = userscript.getCookie('lfe-update-dismissed');
        if (lfeOptions.data.updates && !dismissed) {
            userscript.updateNeccessary(function (updateNecc) {
                if (updateNecc) {

                }
            });
        }
    }
};