import MockServer from "sap/ui/core/util/MockServer";
import UriParameters from "sap/base/util/UriParameters";

export default {
    init() : void {
        // create
        var oMockServer : MockServer = new MockServer({
            rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
        });

        var oUriParameters : UriParameters = new UriParameters(window.location.href);
        var serverDelay : number = oUriParameters.get("serverDelay") as unknown as number

        // configure mock server with delay
        MockServer.config({
            autoRespond: true,
            autoRespondAfter: serverDelay || 500
        });

        // simulate
        var sPath : string = sap.ui.require.toUrl("ui5.typescript.walkthrough.localService");
        oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

        // start
        oMockServer.start();
    }
}