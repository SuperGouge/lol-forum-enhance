(function ($) {
    $.fn.extend({
        lfePopover: function (o) {
            return this.each(function () {
                var that, options, popover, shown, hidden, container, positioner;
                if ((typeof (o) === 'object') || (o === undefined)) {
                    that = $(this);
                    options = {
                        content: '',            // text or html
                        html: false,            // is content html code?
                        container: '',          // Selector of future parent element of popover
                        positioner: '',         // Selector of element which defines where the popover appears
                        onShow: null,           // pre show
                        onShown: null,          // post show
                        onHide: null,           // pre hide
                        onHidden: null,         // post hide
                        hideOnOutClick: true    // hide popover when you click somewhere else and not inside
                    };
                    $.extend(options, o);
                    if (options.container !== '') container = $(options.container);
                    else container = that.parent();
                    if (options.positioner !== '') positioner = $(options.positioner);
                    else positioner = that;

                    popover = $('<div>');

                    if (options.html) popover.append(options.content);
                    else popover.text(options.content);

                    popover.addClass('userscript-popover');
                    popover.addClass('hidden');

                    if (options.container !== '') $(options.container).append(popover);
                    else $(this).parent().append(popover);

                    if (options.hideOnOutClick) {
                        $(document).on('click', function (e) {
                            if (!$(e.target).is(positioner) && !$(e.target).parents(positioner).is(positioner) && !$(e.target).is(popover) && !$(e.target).parents(popover).is(popover)) {
                                $(that).lfePopover('hide');
                            }
                        });
                    }

                    that.data('lfePopover', options);
                } else if (typeof (o) === 'string') {
                    that = $(this);
                    options = that.data('lfePopover');
                    if (options.container !== '') container = $(options.container);
                    else container = $(this).parent();
                    if (options.positioner !== '') positioner = $(options.positioner);
                    else positioner = $(this);
                    if (options) {
                        popover = container.children('.userscript-popover');
                        if (o === 'show') {
                            hidden = popover.hasClass('hidden');
                            if ((options.onShow !== null) && hidden) options.onShow();
                            popover.removeClass('hidden');
                            if ((options.onShown !== null) && hidden) options.onShown();
                        } else if (o === 'hide') {
                            shown = !(popover.hasClass('hidden'));
                            if ((options.onHide !== null) && shown) options.onHide();
                            popover.addClass('hidden');
                            if ((options.onHidden !== null) && shown) options.onHidden();
                        } else if (o === 'toggle') {
                            hidden = popover.hasClass('hidden');
                            shown = !hidden;
                            if ((options.onShow !== null) && hidden) options.onShow();
                            if ((options.onHide !== null) && shown) options.onHide();
                            popover.toggleClass('hidden');
                            if ((options.onShown !== null) && hidden) options.onShown();
                            if ((options.onHidden !== null) && shown) options.onHidden();
                        }
                        popover.css('left', positioner.position().left + (positioner.width() / 2) - (popover.width() / 2) - 10);
                        popover.css('top', positioner.position().top - popover.height() - 30);
                    }
                }
            });
        }
    });
})(jQuery);

/*
$('#btn').lfePopover({
    content: 'Hello, world!'
}).click(function () {
    $(this).lfePopover('toggle');
});

$('#btn2').lfePopover({
    html: true,
    content: '<b>Foo<br><a href="http://jsfiddle.net/" target="_blank">Bar</a></b>',
    onShow: function () {
        alert('onShow');
    },
    onShown: function () {
        alert('onShown');
    },
    onHide: function () {
        alert('onHide');
    },
    onHidden: function () {
        alert('onHidden');
    }
}).click(function () {
    $(this).lfePopover('toggle');
});

$('#btn3').lfePopover({
    content: 'Hello, world!',
    hideOnOutClick: false
}).click(function () {
    $(this).lfePopover('toggle');
});

$('#btn4').click(function () {
    $('#btn3').lfePopover('show');
});
*/