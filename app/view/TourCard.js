Ext.define('FaFa.view.TourCard', {
	extend: 'Ext.Panel',
	xtype: 'tour-card',	
	config: {
		picture: null,
		description: null,
        layout: 'card',
        cardSwitchAnimation: 'flip',
		items: []
	},
	
	applyPicture: function(picture) {
		console.log("Applying picture");		
		this.add({
			xtype: 'fafaimage',	
			picture: picture
		});					
	},
	
	applyDescription: function(description) {
		console.log("Applying description");
	}
});