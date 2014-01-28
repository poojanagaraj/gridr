Ext.onReady(function() {
  // Ext.Msg.alert("Welcome!", "Welcome!");
  
  // 1. Create JSON data at data/risks.json
  // 2. Create a store from data/risks.json
  var store = new Ext.data.JsonStore({
    url: "data/risks.json",
    storeId: "riskStore",
    root: "risks",
    idProperty: "id",
    fields: ["id", ", "url", {name:"size", type: "float"}, {name:"lastmod", type:"date"}]
});
});