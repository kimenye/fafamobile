Ext.define('FaFa.view.AboutTabView', {
	extend: 'Ext.tab.Panel',
	xtype: 'about-tab-view',
	requires: [
		'FaFa.view.About',
		'FaFa.view.Register'
	],
	config: {
		cls: 'about',
		items: [
			{
				title: 'About',
				xtype: 'about-view'
			},
			{
				title: 'Sign up',
				xtype: 'register-view'
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