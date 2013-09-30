Ext.application({
    name: 'FaFa',
	
    requires: [
        'Ext.MessageBox',
		'Ext.carousel.Carousel'
    ],

    views: [
        'Picture',
		'Main'
    ],
	
	models: [
		'TourItem'
	],
	
	stores: [
		'TourStore'
	],

    launch: function() {
		
        var titleVisible = false,
            info, carousel;
			
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        // Ext.Viewport.add(Ext.create('FaFa.view.Main'));
		
		var lorem = new Lorem;
		
		store = Ext.create('Ext.data.Store', {
			model: 'FaFa.model.TourItem',
			data: [
				{ title: 'Welcome', url: 'man.jpg', description: lorem.createText(3, lorem.PARAGRAPH) },
				{ title: 'What is it about?', url: 'start.jpg', description: lorem.createText(3, lorem.PARAGRAPH) },
				{ title: 'How can I join?', url: 'woman.jpg', description: lorem.createText(3, lorem.PARAGRAPH) }
			]
		});
		
		
        carousel = Ext.create('Ext.Carousel', {
            store: store,
            direction: 'horizontal',
            
            listeners: {
                activeitemchange: function(carousel, item) {
                    // info.setHtml(item.getPicture().get('title'));
					
					info.setHtml(item.getPicture().get('title') + "<a class='blink_me toggle_btn'></a>");
                }
            }
        });
		
        info = Ext.create('Ext.Component', {
            cls: 'tour-title tour-title-visible tour-tip',
            top: 0,
            left: 0,
            right: 0
        });
		
        Ext.Viewport.add(carousel);
        Ext.Viewport.add(info);

		
		var items = [];
		store.each(function(item) {
			if (!item.get('image')) {
				return;
			}
			
			items.push({
				xtype: 'fafaimage',
				picture: item 
			});				
		});
		
        carousel.setItems(items);
        carousel.setActiveItem(0);
		
        // Ext.Viewport.element.on('tap', function(e) {
//             if (!e.getTarget('.x-carousel-indicator')) {
//                 if (titleVisible) {
//                     info.element.removeCls('tour-title-visible');
//                     titleVisible = false;
//                 } else {
//                     info.element.addCls('tour-title-visible');
//                     titleVisible = true;
//                 }
//             }
//         });
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