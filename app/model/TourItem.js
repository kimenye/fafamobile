Ext.define('FaFa.model.TourItem', {
	extend: 'Ext.data.Model',
	xtype: 'touritem',
	config: {
		fields : [
			'index', 'title', 'description','url',
            {
                name: 'image',
                type: 'string',
                convert: function(value, record) {
                    var src = "https://s3.amazonaws.com/fafamobile/images/" + record.get('url');
                    if (src != "" && !src.match(/\.gif$/)) {
                        src = "http://src.sencha.io/screen.width/" + src;
                    }
                    
                    return src;
                }
            }
		]
	}
});