Ext.define('FaFa.view.Tour', {
	extend: 'Ext.carousel.Carousel',
	requires: [
		'FaFa.view.TourCard'
	],
	xtype: 'tour',
	config: {
		cls: 'tour-pane',	
		items: [
			{
				xtype: 'tour-card',
				url: 'resources/images/tour_title.jpg',
				title: 'Welcome to FaFa'
			},
			{
				xtype: 'tour-card',
				url: 'resources/images/tour_man.jpg',
				title: 'This could be you'
			}			
		]
	}
});