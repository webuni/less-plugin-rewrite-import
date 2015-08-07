var getRewriteManager = require("./rewrite-manager"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");


function LessPluginRewriteImport(options) {
    this.options = options;
}

LessPluginRewriteImport.prototype = {
    install: function(less, pluginManager) {
        var RewriteManager = getRewriteManager(less);
        pluginManager.addFileManager(new RewriteManager(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 1, 1]
};

module.exports = LessPluginRewriteImport;
