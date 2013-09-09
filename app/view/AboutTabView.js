Ext.define('FaFa.view.AboutTabView', {
	extend: 'Ext.tab.Panel',
	xtype: 'about-tab-view',
	requires: [
		'FaFa.view.About'
	],
	config: {
		cls: 'about',
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