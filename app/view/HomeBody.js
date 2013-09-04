Ext.define('FaFa.view.HomeBody', {
	extend: 'Ext.Panel',
	xtype: 'homebody',
	config: {
        // html: "<h4>What is FAFA models about</h4><p>The first thing you should understand about the cloud is that it is not a physical thing. The cloud is a network of servers, and each server has a different function. Some servers use computing power to run applications</p>",
		styleHtmlContent: true,
		items: [{
		        xtype : 'button',
		        cls   : 'modus-button info',
		        text  : 'What is FaFa models?',
				handler : function() {
					console.log('You have clicked on about...');
				}
		    },
		    {
		        xtype : 'button',
		        cls   : 'modus-button info',
		        text  : 'I am ready to join'
		    },	
		    {
		        xtype : 'button',
		        cls   : 'modus-button info',
		        text  : 'Take a tour'    
			}]
		}
});