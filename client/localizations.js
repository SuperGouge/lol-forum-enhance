var localizations = {
    defaultLang: 'en',
    fallbackLang: 'en',
    lookupLangKeyOrId: function (keyOrId) {
        var output = this.fallbackLang;
        if (typeof keyOrId === 'number') {
            // keyOrId is int:
            output = this.langIds[keyOrId];
        }
        else if (!isNaN(keyOrId)) {
            // keyOrId is int as String:
            output = this.langIds[parseInt(keyOrId, 10)];
        }
        return output;
    },
    setDefaultLang: function (lang) {
        var temp = this.lookupLangKeyOrId(lang);
        var o = this.fallbackLang;
        if (typeof temp === 'string') {
            for (var key in this.langIds) {
                if (this.langIds[key] === temp) {
                    o = temp;
                }
            }
        }
        this.defaultLang = o;
    },
    get: function (key, lang) {
        var l = lang;
        if (typeof lang !== 'undefined') {
            // lang is set:
            l = this.lookupLangKeyOrId(lang);
        }
        else {
            // lang is not set:
            l = this.defaultLang;
        }
        var output = this[key][l];
        if (output === '') output = this[key][this.fallbackLang];
        return output;
    },
    regions: {
        "na": "North America",
        "euw": "EU West",
        "eune": "EU Nordic & East",
        "br": "Brazil"
    },
    langIds: {
        1: "en",
        2: "de",
        3: "es",
        4: "fr",
        5: "pl",
        6: "ro",
        7: "el",
        8: "pt",
        9: "tr",
        11: "it"
    },
    langNamesEn: {
        "en": "English",
        "de": "German",
        "es": "Spanish",
        "fr": "French",
        "pl": "Polish",
        "ro": "Romanian",
        "el": "Greek",
        "pt": "Portuguese",
        "tr": "Turkish",
        "it": "Italian"
    },
    avatarSub: {
        "en": "Me",
        "de": "Ich",
        "es": "Yo",
        "fr": "Moi",
        "pl": "Ja",
        "ro": "Eu",
        "el": "egó",
        "pt": "Eu",
        "tr": "ben",
        "it": "I"
    },
    forceUpdateCaption: { // TODO: Add translations
        "en": "Force update",
        "de": "Update erzwingen",
        "es": "",
        "fr": "Forcer mise à jour",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    checkUpdatesCaption: { // TODO: Add translations
        "en": "Check for updates",
        "de": "Suche nach Updates",
        "es": "",
        "fr": "Chercher mises à jour",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    updatesConfirmMessage: { // TODO: Add translations
        "en": "There are updates available. Do you want to install them now?",
        "de": "Es sind Updates verfügbar. Willst du sie jetzt installieren?",
        "es": "",
        "fr": "Des mises à jour sont disponibles. Voulez-vous les installer maintenant ?",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    updatesStartMessage: { // TODO: Add translations
        "en": "Update started.\nPlease confirm the installation promt.",
        "de": "Update gestartet.\nBitte akzeptiere die Installation.",
        "es": "",
        "fr": "Mise à jour démarrée.\nVeuillez confirmer l'installation.",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    updatesCanceledMessage: { // TODO: Add translations
        "en": "Updating canceled.",
        "de": "Update abgebrochen.",
        "es": "",
        "fr": "Mise à jour annulée.",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    noUpdatesMessage: { // TODO: Add translations
        "en": "No updates available.\nYou are using the most recent version.",
        "de": "Keine Updates verfügbar.\nDu verwendest die aktuellste Version.",
        "es": "",
        "fr": "Aucune mise à jour disponible.\nVous utilisez la version la plus récente.",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    clearCacheCaption: { // TODO: Add translations
        "en": "Clear local cache",
        "de": "Lösche lokalen Cache",
        "es": "",
        "fr": "Vider le cache local",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    aboutCaption: { // TODO: Add translations
        "en": "About",
        "de": "Über",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalButtonCaption: { // TODO: Add translations
        "en": "LFE Options",
        "de": "LFE Optionen",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalTitleCaption: {  // TODO: Add translations
        "en": "LoL Forum Enhance - Options",
        "de": "LoL Forum Enhance - Optionen",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalUpdatesCaption: { // TODO: Add translations
        "en": "Check for updates automatically:",
        "de": "Suche automatisch nach Updates:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalCharsetCaption: { // TODO: Add translations
        "en": "Rework charset on displayed forum usernames:",
        "de": "Überarbeite den Zeichensatz der Forum-Benutzernamen:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalEnlargeCaption: { // TODO: Add translations
        "en": "Enlarge Quick-Edit-Box:",
        "de": "Vergrößere die Schnell-Antworten-Box:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAvatarCaption: { // TODO: Add translations
        "en": "Show own avatar next to Quick-Edit-Box:",
        "de": "Zeige eigenen Avatar neben der Schnell-Antworten-Box:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalWtCaption: { // TODO: Add translations
        "en": "Use Wrenchman's Tools Icons if available:",
        "de": "Verwende Wrenchman's Tools Bilder wenn verfügbar:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalFekCaption: { // TODO: Add translations
        "en": "Use Forum Enhancement Kit's Icons if available:",
        "de": "Verwende Forum Enhancement Kits Bilder wenn verfügbar:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalLinkCaption: { // TODO: Add translations
        "en": "Link usernames with:",
        "de": "Verlinke die Benutzernamen mit:",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersOnCaption: { // TODO: Add translations
        "en": "On",
        "de": "An",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersOffCaption: { // TODO: Add translations
        "en": "Off",
        "de": "Aus",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersPostsCaption: { // TODO: Add translations
        "en": "Posts",
        "de": "Beiträge",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersThreadsCaption: { // TODO: Add translations
        "en": "Threads",
        "de": "Themen",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersSelectionCaption: { // TODO: Add translations
        "en": "Selection",
        "de": "Auswahl",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalAnswersNoneCaption: { // TODO: Add translations
        "en": "None",
        "de": "Nichts",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalPresetInfoCaption: { // TODO: Add translations
        "en": "Preset values are presented in this color",
        "de": "Standardwerte werden in dieser Farbe angezeigt",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalReloadInfoCaption: { // TODO: Add translations
        "en": "The options only take effect after you reload the page.",
        "de": "Die Optionen werden erst nach einem Neuladen der Seite angewendet.",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalButtonSaveCaption: { // TODO: Add translations
        "en": "Save changes",
        "de": "Speichere Änderungen",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    optionsModalButtonDiscardCaption: { // TODO: Add translations
        "en": "Discard changes",
        "de": "Verwerfe Änderungen",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    nameClickoverPostsCaption: { // TODO: Add translations
        "en": "Posts of this user",
        "de": "Beiträge dieses Benutzers",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    },
    nameClickoverThreadsCaption: { // TODO: Add translations
        "en": "Threads of this user",
        "de": "Themen dieses Benutzers",
        "es": "",
        "fr": "",
        "pl": "",
        "ro": "",
        "el": "",
        "pt": "",
        "tr": "",
        "it": ""
    }
};
