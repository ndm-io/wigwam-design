const re = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const isBrowser = require('./is-browser');

const isMobile = function () {
    if (!isBrowser()) { return false }

    return re.test(navigator.userAgent);
};

module.exports = isMobile;