import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
/**
 * @namespace ui5.typescript.walkthrough
 */
export default class Component extends UIComponent {
    
    public static metadata = {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json"
    };
    
    public init() : void {
        // call the init function of the parent
        super.init();
        // set data model
        var oData: object = {
            recipient : {
                name : "World"
            }
        };
        var oModel: JSONModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model
        var i18nModel: ResourceModel = new ResourceModel({
            bundleName: "ui5.typescript.walkthrough.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
    }

}