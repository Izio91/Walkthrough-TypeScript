QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict"

    sap.ui.require([
        "ui5/typescript/walkthrough/test/unit/model/formatter"
    ], function () {
        QUnit.start();
    })
})