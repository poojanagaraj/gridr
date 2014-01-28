Ext.onReady(function() {
  // Ext.Msg.alert("Welcome!", "Welcome!");
  
  // 1. Create JSON data at data/risks.json
  // 2. Create a store from data/risks.json
  var store = new Ext.data.JsonStore({
    url: "data/risks.json",
    storeId: "riskStore",
    root: "risks",
    idProperty: "id",
    fields: [
      "id",
      "name",
      "url",
      "description",
      "themeId",
      "themeName",
      "legalEntity",
      "lavUrl",
      { "name": "ratingInherent", "type": "float" },
      { "name": "ratingControl", "type": "float" },
      { "name": "ratingAnticipatedResidual", "type": "float" },
      "responsePresumptiveValue",
      "responsePresumptiveDelta",
      "responsePresumptiveJustification",
      "openIssues",
      "openIssuesUrl"
    ]
  });


  // Create JSONReader

  // Give JSONReader object to GroupingStore

  // GroupingStore to GroupingView

  // Use GroupingView inside GridPanel
});