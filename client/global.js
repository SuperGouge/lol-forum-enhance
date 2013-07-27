/*******************************
 *     Styling JavaScript      *
 *******************************/

var editor = $("#vB_Editor_QR_textarea");
var editorContainer = $("#vB_Editor_QR").parent();
var quickReplyContainer = editorContainer.parent();

editor.addClass("userscript-textarea");
editorContainer.removeAttr("style"); // TODO: Unsafe! Check if there is a better way.
editorContainer.addClass("userscript-editor-container");

