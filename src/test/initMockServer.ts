import mockserver from "../localService/mockserver";
"use strict";

// initialize the mock server
mockserver.init();

// initialize the embedded component on the HTML page
sap.ui.require(["sap/ui/core/ComponentSupport"])

