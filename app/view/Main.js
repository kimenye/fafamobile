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
                xtype: 'headertoolbar'
            }, 
			{				
                xtype: 'homebody'
            }
        ]
    }
});