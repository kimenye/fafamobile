Ext.define('FaFa.view.Picture', {
	extend: 'Ext.Img',
	xtype: 'fafaimage',
	
	config: {
		picture: null
	},
	
	updatePicture: function(picture) {
		this.setSrc(picture.get('image'));
	}
});