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
    autoLoad: true,
    sortInfo: {
      field: "name",
      direction: "ASC"
    },
    groupField: "themeName"
  });

  console.log("riskGroupingStore", riskGroupingStore);

  var riskGroupingView = new Ext.grid.GroupingView({
    forceFit: true
  });

  console.log("riskGroupingView", riskGroupingView);

  var riskGrid = new Ext.grid.GridPanel({
    store: riskGroupingStore,
    columns: [
      { header: "Risk ID", dataIndex: "id" },
      { header: "Name", dataIndex: "name" },
      { header: "Description", dataIndex: "description" },
      { header: "Theme Name", dataIndex: "themeName" },
      { header: "Open Issues", dataIndex: "openIssues" }
    ],
    view: riskGroupingView,
    frame:true,
    width: "auto",
    height: "auto",
    autoHeight: true,
    collapsible: true,
    animCollapse: true,
    title: "Risk Grid",
    iconCls: "icon-grid",
    renderTo: "gridr"
  });

  console.log("riskGrid", riskGrid);
});