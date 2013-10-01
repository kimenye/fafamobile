Ext.define('FaFa.view.TourCard', {
	extend: 'Ext.Panel',
	xtype: 'tour-card',	
	config: {
		picture: null,
		content: null,
        layout: 'card',
        cardSwitchAnimation: 'flip',
		pane: this,
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: '',
				items: [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
				      	text: '?',
						align: 'right',
						listeners: {
							tap: function() {
								console.log("clicked the tip button");
								if (this.getText() == "?") {
									this.setText('hide');									
								}
								else {
									this.setText("?");									
								}
							}
						}
				    }
				]
			}
		]
	},
	
	initialize: function() {
		
	},	
	
	applyPicture: function(picture) {
		// console.log("Applying picture");		
		this.add({
			xtype: 'fafaimage',	
			picture: picture
		});					
	},
	
	applyContent: function(content) {
		console.log("Applying content");
		this.add({
			xtype: 'about-view',
			content: content
		});
	}
	
});