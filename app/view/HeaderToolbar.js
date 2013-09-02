Ext.define('FaFa.view.HeaderToolbar', {
	extend: 'Ext.TitleBar',
	xtype: 'headertoolbar',
	config: {
		docked: 'top',
		html: '<div class="header_logo"></div>',
		cls: 'headerbg',
		styleHtmlContent: true
	},
	initialize: function() {
		this.callParent();
	}
});