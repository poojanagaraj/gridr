Ext.onReady(function() {
  // Ext.Msg.alert("Welcome!", "Welcome!");
  
  var RiskRecord = Ext.data.Record.create([
    { "name": "name" },
    { "name": "url" },
    { "name": "description" },
    { "name": "themeId" },
    { "name": "themeName" },
    { "name": "legalEntity" },
    { "name": "lavName" },
    { "name": "lavUrl" },
    { "name": "ratingInherent" },
    { "name": "ratingControl" },
    { "name": "ratingAnticipatedResidual" },
    { "name": "responsePresumptiveValue" },
    { "name": "responsePresumptiveDelta" },
    { "name": "responsePresumptiveJustification" },
    { "name": "openIssues" },
    { "name": "openIssuesUrl" }
  ]);

  var riskReader = new Ext.data.JsonReader({
    totalProperty: "results",
    root: "risks",
    id: "id"
  }, RiskRecord);

  var riskGroupingStore = new Ext.data.GroupingStore({
    reader: riskReader,
    url: "data/risks.json",
    sortInfo: {
      field: "name",
      direction: "ASC"
    },
    groupField: "themeId"
  });

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
  console.log("Created store", store);


  // Create JSONReader

  // Give JSONReader object to GroupingStore

  // GroupingStore to GroupingView

  // Use GroupingView inside GridPanel
});