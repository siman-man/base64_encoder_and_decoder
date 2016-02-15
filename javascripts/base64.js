var Base64 = {
    decode: function (str) {
        return atob(str);
    },

    encode: function (str) {
        return btoa(str);
    }
}
