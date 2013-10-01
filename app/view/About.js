Ext.define('FaFa.view.About', {
	extend: 'Ext.Panel',
	xtype: 'about-view',
	config: {
		cls: 'about-pane',
		content: null,
		styleHtmlContent: true,
		scrollable: 'vertical',
		// html: '<div class="info-pane"><img src="resources/images/about_pane.jpg" /><h3>What is FAFA models about</h3><p>FAFA -Festival of African Fashion and Arts- 2010. FAFA brings to light the creation of a movement within African designers and artists which embraces and embodies ethical fashion and the values it upholds. Through increasing the capacity and well-being of the people and communities, creativity, design and fashion can play an active role in poverty reduction, the development of sustainable livelihoods and the reduction of the harmful effects on the environment</p></div>'			
	},
	applyContent: function(content) {
		this.html = "<div class='info-pane'><h3>" + content.get('title') + "</h3><p>" + content.get('description') + "</p></div>";
	}	
});