// Ext.define('apod.view.Picture', {
//     extend: 'Ext.Img',
//     xtype: 'apodimage',
//     
//     config: {
//         /**
//          * @cfg {apod.model.Picture} picture The Picture to show
//          */
//         picture: null
//     },
//     
//     updatePicture: function(picture) {
//         this.setSrc(picture.get('image'));
//     }
// });
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