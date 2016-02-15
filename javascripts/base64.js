var Base64 = {
    decode: function (str) {
        return decodeURIComponent(escape(window.atob(str)));
    },

    encode: function (str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
}
