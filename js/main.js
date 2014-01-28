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

  console.log("RiskRecord", RiskRecord);

  var riskReader = new Ext.data.JsonReader({
    totalProperty: "results",
    root: "risks",
    id: "id"
  }, RiskRecord);

  console.log("riskReader", riskReader);

  var riskGroupingStore = new Ext.data.GroupingStore({
    reader: riskReader,
    url: "data/risks.json",
    sortInfo: {
      field: "name",
      direction: "ASC"
    },
    groupField: "themeId"
  });

  console.log("riskGroupingStore", riskGroupingStore);

  var riskGroupingView = new Ext.grid.GroupingView({
    forceFit: true
  });

  console.log("riskGroupingView", riskGroupingView);

  var riskGrid = new Ext.grid.GridPanel({
    store: riskGroupingStore,
    columns: [
      { id: "id", header: "Risk ID", dataIndex: "id" },
      { header: "Risk Name", dataIndex: "name" },
      { header: "Risk Name", dataIndex: "description" },
      { header: "Open Issues", dataIndex: "openIssues" }
    ],
    view: riskGroupingView,
    frame:true,
    width: "auto",
    height: "auto",
    collapsible: true,
    animCollapse: true,
    title: "Risk Grid",
    iconCls: "icon-grid",
    renderTo: "gridr"
  });

  console.log("riskGrid", riskGrid);
});