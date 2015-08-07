less-plugin-rewrite-import
==========================

Adds the ability for less to rewrite import statement

lessc usage
-----------

Install with npm

```bash
npm install -g less-plugin-rewrite-import
```

Options:  
paths - default: {}

Programmatic usage
------------------

```js
var RewriteImportPlugin = require("less-plugin-rewrite-import"),
    options = { plugins: [new RewriteImportPlugin({paths: {
        "old/path": "new/path",
        "older/path": function(filename, currentDirectory) {
            return "newest/path";
        }
    })] };
less.render(css, options)
    .then(...
```

Browser usage
-------------

Browser usage is not supported.

Testing
-------

run the tests by running `node test`
You require the dev dependencies installed (which includes less)
