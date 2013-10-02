Ext.define('FaFa.view.About', {
	extend: 'Ext.Panel',
	xtype: 'about-view',
	config: {
		cls: 'about-pane',
		content: null,
		styleHtmlContent: true
	},
	applyContent: function(content) {
		this.setHtml("<div class='info-pane'><h3>" + content.get('title') + "</h3><p>" + content.get('description') + "</p></div>");
	}	
});