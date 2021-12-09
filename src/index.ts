import ComponentContainer from "sap/ui/core/ComponentContainer"
/**
 * @namespace ui5.typescript.walkthrough
 */    
new ComponentContainer({
    name: "ui5.typescript.walkthrough",
    settings: {
        id: "walkthrough"
    },
    async: true
}).placeAt("content");