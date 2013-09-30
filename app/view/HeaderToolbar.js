Ext.define('FaFa.view.HeaderToolbar', {
	extend: 'Ext.TitleBar',
	xtype: 'headertoolbar',
	config: {
		docked: 'top',
		html: '<div class="logo"><img src="resources/images/logo_title.png" /></div>'
	},
	initialize: function() {
		this.callParent();
	}
});