var editBox = {
    rework: function () {
        var editor = $("#vB_Editor_QR_textarea");
        //var editorContainer = $("#vB_Editor_QR").parent();
        var editorContainer = $('#collapseobj_quick_reply .editor-container');
        //var quickReplyContainer = editorContainer.parent();

        editor.addClass("userscript-textarea");
        //editorContainer.removeAttr("style"); // TODO: Unsafe! Check if there is a better way.
        editorContainer.addClass("userscript-editor-container");
    }
};