Ext.define('FaFa.view.Wizard', {
	extend: 'Ext.Panel',
	xtype: 'wizard',
    requires: [
		'FaFa.view.Register'
	],
	config: {
		layout: 'card',
		items: {
			xtype:'register-view'
		}
	}
});