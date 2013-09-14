Ext.define('FaFa.view.About', {
	extend: 'Ext.Carousel',
	xtype: 'about-view',
	config: {
		cls: 'about-pane',
		// styleHtmlContent: true,
		items: [
			{
				config : {
					// styleHtmlContent: true,
					scrollable: 'vertical'
				},
				xtype: 'panel',	
				html: '<div class="info-pane"><img src="resources/images/about_pane.jpg" /><h3>What is FAFA models about</h3><p>FAFA -Festival of African Fashion and Arts- 2010. FAFA brings to light the creation of a movement within African designers and artists which embraces and embodies ethical fashion and the values it upholds. Through increasing the capacity and well-being of the people and communities, creativity, design and fashion can play an active role in poverty reduction, the development of sustainable livelihoods and the reduction of the harmful effects on the environment</p></div>'			
			}/*,
			{
				config : {
					cls: 'about-pane',
					styleHtmlContent: true
				},
				html: '<div class="info-pane"><h3>How do you join?</h3><p>FAFA -Festival of African Fashion and Arts- 2010. FAFA brings to light the creation of a movement within African designers and artists which embraces and embodies ethical fashion and the values it upholds. Through increasing the capacity and well-being of the people and communities, creativity, design and fashion can play an active role in poverty reduction, the development of sustainable livelihoods and the reduction of the harmful effects on the environment</p></div>'	
			}*/											
		]					
	}	
});