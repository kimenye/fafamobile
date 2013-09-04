Ext.define('FaFa.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'FaFa.view.HeaderToolbar'
    ],
    config: {
        // tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'headertoolbar',
                    title: ''
                },
				{
					xtype : 'button',
			        cls   : 'modus-button info',
			        text  : 'What is FaFa Models?'
			    },
			    {
			        xtype : 'button',
			        cls   : 'modus-button info',
			        text  : 'I want to join'
			    },
			    {
			        xtype : 'button',
			        cls   : 'modus-button info',
			        text  : 'Take a Tour'
			    }]
            }
        ]
    }
});