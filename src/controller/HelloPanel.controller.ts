import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import Fragment from "sap/ui/core/Fragment";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
/**
 * @namespace ui5.typescript.walkthrough.controller
 */
export default class HelloPanel extends Controller {
    pDialog: Promise<any>;

    public onShowHello() : void {
        // read msg from i18n model
        var oBundle: ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient: string = this.getView().getModel().getProperty("/recipient/name");
        var sMsg: string = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
    }

    public onOpenDialog() : void {
        // create dialog Lazily
        if(!this.pDialog) {
            this.pDialog = this.loadFragment({
                name: "ui5.typescript.walkthrough.view.HelloDialog"
            });
        }
        this.pDialog.then( (oDialog: any) => {
            oDialog.open();
        })
    }

    public onCloseDialog() : void {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself
        this.byId("helloDialog").close();
    }
}