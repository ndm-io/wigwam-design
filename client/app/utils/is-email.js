const re = /\S+@\S+\.\S+/;

const isEmail = function (email) {
    return re.test(email);
};

module.exports = isEmail;

