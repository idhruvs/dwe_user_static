cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-kiosk/kiosk.js",
        "id": "cordova-plugin-kiosk.kioskPlugin",
        "clobbers": [
            "window.KioskPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-kiosk": "0.2"
};
// BOTTOM OF METADATA
});