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
								var parent = this.parent.parent;
								if (this.getText() == "?") {
									this.setText('x');									
									parent.setActiveItem(2);
								}
								else {
									this.setText("?");									
									parent.setActiveItem(0);
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