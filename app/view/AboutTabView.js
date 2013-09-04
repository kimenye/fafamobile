Ext.define('FaFa.view.AboutTabView', {
	extend: 'Ext.tab.Panel',
	xtype: 'about-tab-view',
	cls: 'about',
	requires: [
		'FaFa.view.About'
	],
	config: {
		items: [
			{
				title: 'About',
				xtype: 'about-view'
			},
			{
				title: 'Sign up'
			},
			{
				title: 'Fafa Kenya'
			}
		]
	},
	initialize: function() {
		this.callParent();
	}
});