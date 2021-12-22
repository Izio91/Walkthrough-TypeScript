import formatter from 'ui5/typescript/walkthrough/model/formatter';
import ResourceModel from "sap/ui/model/resource/ResourceModel";

"use strict"

QUnit.module("Formatting functions", {
    beforeEach() : void {
        (this as any )._oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("ui5/typescript/walkthrough") + "/i18n/i18n.properties"
        })
    },
    afterEach() : void {
        (this as any )._oResourceModel.destroy();
    }
});

QUnit.test("Should return the translated texts", function (assert) {
    // Arrange
    var oModel: any = this.stub();
    oModel.withArgs("i18n").returns(this._oResourceModel);
    var oViewStub: object = {
        getModel: oModel
    };
    var oControllerStub: object = {
        getView: this.stub().returns(oViewStub)
    };

    // System under test
    var fnIsolatedFormatter: Function = formatter.statusText.bind(oControllerStub);

    // Assert
    assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
    assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
    assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
    assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
});