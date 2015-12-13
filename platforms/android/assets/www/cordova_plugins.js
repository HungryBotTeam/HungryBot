cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/io.litehelpers.cordova.sqliteStorage/www/SQLitePlugin.js",
        "id": "io.litehelpers.cordova.sqliteStorage.SQLitePlugin",
        "pluginId": "io.litehelpers.cordova.sqliteStorage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});