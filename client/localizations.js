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
        this.defaultLang = this.lookupLangKeyOrId(lang);
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "en": "User Forum Enhancement Kit's Icons if available:",
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
        "de": "",
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
