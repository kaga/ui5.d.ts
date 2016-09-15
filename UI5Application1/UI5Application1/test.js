sap.ui.localResources("ui5application1");
sap.ui.localResources("util");
sap.ui.localResources("i18n");
var app = new sap.m.App(undefined, { initialPage: "app" });
var page = sap.ui.view("view1", { id: "app", viewName: "ui5application1.Main", type: sap.ui.core.mvc.ViewType.JSON });
app.addPage(page);
app.placeAt("", "content");
var button = new sap.m.Button("hallo", {
    text: "Hallo Text",
    iconFirst: true
});
//# sourceMappingURL=test.js.map