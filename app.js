/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'FaFa',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main',
		'AboutTabView',
		'Wizard',
		'Tour'
    ],
	
	controllers: [
		'WizardController'
	],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        // Ext.Viewport.add(Ext.create('FaFa.view.Wizard'));
		// Ext.Viewport.add(Ext.create('FaFa.view.Main'));
		
		Ext.create('Ext.data.Store', {
		    data: [
		        { title: 'Ed',    description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
		        { title: 'Tommy', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
		        { title: 'Aaron', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
		        { title: 'Jamie', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' }
		    ]
		});
		
		
		Ext.Viewport.add(Ext.create('FaFa.view.Tour'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
