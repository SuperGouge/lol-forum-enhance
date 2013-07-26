/*******************************
 *     Styling JavaScript      *
 *******************************/

var editor = $("#vB_Editor_QR_textarea");
var editorContainer = $("#vB_Editor_QR").parent();
var quickReplyContainer = editorContainer.parent();

var avatar = $('<div class="userscript-avatar">' +
                    '<div>' +
                        '<big id="userscript-avatar-name">' +
                            'You' +
                        '</big>' +
                        '<a>' +
                            '<img id="userscript-avatar-icon" class="userscipt-user-summoner-icon" src="lol_theme/img/unknown_icon.jpg">' +
                            '<span id="userscript-avatar-level" class="userscript-left-orb">' +
                                '??' +
                            '</span>' +
                            '<span class="userscript-right-orb">' +
                                '<img src="http://riot-web-static.s3.amazonaws.com/forum/ui/avatar_right_orb_blue.png">' +
                            '</span>' +
                        '</a>' +
                        '<small id="userscript-avatar-subtitle">' +
                            'You' +
                        '</small>' +
                    '</div>' +
                '</div>');

var clear = $("<div>");
clear.addClass("userscript-clear");

editor.addClass("userscript-textarea");
editorContainer.removeAttr("style"); // TODO: Unsafe! Check if there is a better way.
editorContainer.addClass("userscript-editor-container");

quickReplyContainer.prepend(avatar);
quickReplyContainer.append(clear);