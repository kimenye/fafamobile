Ext.define('FaFa.view.TourCard', {
	extend: 'Ext.Panel',
	xtype: 'tour-card',	
	config: {
		url: null,
        layout: 'card',
        cardSwitchAnimation: 'flip',
		items: [
			{
				styleHtmlContent: true,
				// scrollable: true,
				html: '<h1 style="font-size:16px;"><b>About Roses</b></h1><p>The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.</p>'
			}
		]
	}
});