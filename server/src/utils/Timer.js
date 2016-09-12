module.exports = function () {

    const now = function () {
        return new Date().getTime();
    };

    let _start = now(),
        _end;

    const t = {
        start: function () {
            _start = now();
        },
        end: function () {
            _end = now();
            return t.time();
        },
        time: function () {
            return _end - _start;
        }
    };

    return t;

};
