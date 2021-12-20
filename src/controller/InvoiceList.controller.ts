import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace ui5.typescript.walkthrough.controller
 */
export default class InvoiceList extends Controller {
    public onInit() : void {
        var oViewModel : JSONModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(oViewModel, "view");
    }
}