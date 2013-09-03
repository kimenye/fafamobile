Ext.define('FaFa.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'FaFa.view.HeaderToolbar'
    ],
    config: {
        items: [
            {
                xtype: 'headertoolbar'
            }, 
			{				
                html: "<h4>What is FAFA models about</h4><p>The first thing you should understand about the cloud is that it is not a physical thing. The cloud is a network of servers, and each server has a different function. Some servers use computing power to run applications</p>",
				styleHtmlContent: true
            }
        ]
    }
});