var maxBy = require('../');
var test = require('tape');

test('simple ', function (t) {
    t.plan(1);

    var n = maxBy([9,3,4], function (x) { return x % 3 });
    t.equal(n, 4);
});

test('simple comparisons', function (t) {
    t.plan(2);

    var n = maxBy([9,3,2], function (x) { return x % 3 });
    t.equal(n, 2);

    var n = maxBy([9,3,1], function (x) { return x % 3 });
    t.equal(n, 1);
});