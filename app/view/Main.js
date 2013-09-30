Ext.define('FaFa.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
		'FaFa.view.HeaderToolbar',
		'FaFa.view.HomeBody'
    ],
    config: {
        items: [
			{
                docked: 'top',
                xtype: 'headertoolbar',
                title: ''
            },
			{
				xtype : 'homebody'
		    }
		]
    }
});