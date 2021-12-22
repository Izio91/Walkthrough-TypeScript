import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "ui5/typescript/walkthrough/model/formatter";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
/**
 * @namespace ui5.typescript.walkthrough.controller
 */
export default class InvoiceList extends Controller {
    formatter = formatter;
    public onInit() : void {
        var oViewModel : JSONModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(oViewModel, "view");
    };

    public onFilterInvoices(oEvent: any) : void {
        var aFilter : Array<Filter> = [];
        var sQuery : string = oEvent.getParameter("query");
        if (sQuery) {
            aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList : any = this.getView().byId("invoiceList");
        var oBinding : ODataListBinding = oList.getBinding("items");
        oBinding.filter(aFilter);

    }
}