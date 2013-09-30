Ext.define('FaFa.view.TourCard', {
	extend: 'Ext.Panel',
	xtype: 'tour-card',	
	config: {
		picture: null,
		description: null,
		title: null,
        layout: 'card',
        cardSwitchAnimation: 'flip',
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: '',
				items: [
					{
						xtype: 'button',
				      	text: '?',
						align: 'right'
				    }
				]
			}
		]
	},
	
	applyTitle: function(title) {
		console.log("Applying title", title);
		// debugger;
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