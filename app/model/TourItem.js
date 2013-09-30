Ext.define('FaFa.model.TourItem', {
	extend: 'Ext.data.Model',
	xtype: 'touritem',
	config: {
		fields : [
			'index', 'title', 'image', 'description'
		]
	}
});