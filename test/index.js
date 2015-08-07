var less = require('less'),
    lessTest = require('less/test/less-test'),
    lessTester = lessTest(),
    plugin = require('../lib'),
    assert = require('assert'),
    stylize = less.lesscHelper.stylize;

console.log("\n" + stylize('LESS - rewrite import', 'underline') + "\n");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugin()] },
    'import/'
);

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugin({ paths: {
        '../shared/file': '../rewrite/newfile',
        '../shared/deeper/file': function (filename, currentDirectory) {
            assert.equal(filename, '../shared/deeper/file.less');
            return '../rewrite/deeper.less';
        },
    }})] },
    'rewrite-import/'
);
