import ResourceBundle from "sap/base/i18n/ResourceBundle";

export default {
    
    statusText(sStatus: string) : string {
        var resourceBundle : ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
        switch (sStatus) {
            case "A":
                return resourceBundle.getText("invoiceStatusA");
            case "B":
                return resourceBundle.getText("invoiceStatusB");
            case "C":
                return resourceBundle.getText("invoiceStatusC");
            default:
                return sStatus;
        }
    }
    
}