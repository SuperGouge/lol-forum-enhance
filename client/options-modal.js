var optionsModal = {
    addButton: function () {
        // TODO: Load Button from html-file
        var modalButton = $('<div id="lol-forum-enhance-settings" class="userscript-pvpnet-bar"><a href="#lfeOptionsModal" role="button" data-toggle="modal">' + localizations.get('optionsModalButtonCaption') + '</a></div>');
        $('#pvpnet-bar-inner').prepend(modalButton);
        modalButton.click(function () {
            $('#lfeOptionsModal').trigger('openModal');
        });
    },
    addModal: function () {
        var modal = $(GM_getResourceText('options-modal'));
        $('body').append(modal);

        $('#lfeOptionsModal').easyModal({
            top: 100,
            autoOpen: false,
            overlayOpacity: 0.5,
            overlayColor: '#000',
            overlayClose: true,
            closeOnEscape: true,
            closeButtonClass: '.userscript-options-modal-close',
            onOpen: function (modal) {
                //$(modal).append('Opened!');

                $('#lfeOptionsModal button.active').removeClass('active');

                if (lfeOptions.data.updates) $('#lfe-o-updates-on').addClass('active');
                else $('#lfe-o-updates-off').addClass('active');

                if (lfeOptions.data.charset) $('#lfe-o-charset-on').addClass('active');
                else $('#lfe-o-charset-off').addClass('active');

                if (lfeOptions.data.enlarge) $('#lfe-o-enlarge-on').addClass('active');
                else $('#lfe-o-enlarge-off').addClass('active');

                if (lfeOptions.data.avatar) $('#lfe-o-avatar-on').addClass('active');
                else $('#lfe-o-avatar-off').addClass('active');

                if (lfeOptions.data.wt) $('#lfe-o-wt-on').addClass('active');
                else $('#lfe-o-wt-off').addClass('active');

                if (lfeOptions.data.fek) $('#lfe-o-fek-on').addClass('active');
                else $('#lfe-o-fek-off').addClass('active');

                $('#lfe-o-link-' + lfeOptions.data.link).addClass('active');
            },
            onClose: function (modal) {
                //$(modal).append('Closed!');
            }
        });

        // Register save-options function
        $('#lfe-o-save').click(function () {
            lfeOptions.data.updates = $('#lfe-o-updates .active').data('value');
            lfeOptions.data.charset = $('#lfe-o-charset .active').data('value');
            lfeOptions.data.enlarge = $('#lfe-o-enlarge .active').data('value');
            lfeOptions.data.avatar = $('#lfe-o-avatar .active').data('value');
            lfeOptions.data.wt = $('#lfe-o-wt .active').data('value');
            lfeOptions.data.fek = $('#lfe-o-fek .active').data('value');
            lfeOptions.data.link = $('#lfe-o-link .active').data('value');
            lfeOptions.saveLocal();
            $('#lfeOptionsModal').modal('hide');
        });

        // Register option selection events
        $('.userscript-options-modal .userscript-btn-group > .userscript-btn').click(function () {
            var button = $(this);
            button.siblings().removeClass('active');
            button.addClass('active');
        });
    },
    localize: function () {
        $('#lfe-o-captions-title').text(localizations.get('optionsModalTitleCaption'));
        $('#lfe-o-captions-updates').text(localizations.get('optionsModalUpdatesCaption'));
        $('#lfe-o-captions-charset').text(localizations.get('optionsModalCharsetCaption'));
        $('#lfe-o-captions-enlarge').text(localizations.get('optionsModalEnlargeCaption'));
        $('#lfe-o-captions-avatar').text(localizations.get('optionsModalAvatarCaption'));
        $('#lfe-o-captions-wt').text(localizations.get('optionsModalWtCaption'));
        $('#lfe-o-captions-fek').text(localizations.get('optionsModalFekCaption'));
        $('#lfe-o-captions-link').text(localizations.get('optionsModalLinkCaption'));
        $('.lfe-o-captions-answers-on').text(localizations.get('optionsModalAnswersOnCaption'));
        $('.lfe-o-captions-answers-off').text(localizations.get('optionsModalAnswersOffCaption'));
        $('.lfe-o-captions-answers-posts').text(localizations.get('optionsModalAnswersPostsCaption'));
        $('.lfe-o-captions-answers-threads').text(localizations.get('optionsModalAnswersThreadsCaption'));
        $('.lfe-o-captions-answers-selection').text(localizations.get('optionsModalAnswersSelectionCaption'));
        $('.lfe-o-captions-answers-none').text(localizations.get('optionsModalAnswersNoneCaption'));
        $('#lfe-o-captions-preset-info').text(localizations.get('optionsModalPresetInfoCaption'));
        $('#lfe-o-captions-reload-info').text(localizations.get('optionsModalReloadInfoCaption'));
        $('#lfe-o-captions-button-save').text(localizations.get('optionsModalButtonSaveCaption'));
        $('#lfe-o-captions-button-discard').text(localizations.get('optionsModalButtonDiscardCaption'));
    }
};
