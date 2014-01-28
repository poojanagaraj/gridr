Ext.onReady(function() {
  // Ext.Msg.alert('Welcome!', 'Welcome!');
  
  // 2. Create a store from data/risk.json
  var store = new Ext.data.JsonStore({
    url: 'data/risk.json',
    storeId: 'riskStore',
    root: 'risks',
    idProperty: 'id',
    fields: ['id', 'url', {name:'size', type: 'float'}, {name:'lastmod', type:'date'}]
});
});