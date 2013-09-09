Ext.define('FaFa.view.Register', {
	extend: 'Ext.Panel',
	requires: [
		'Ext.form.FormPanel',
		'Ext.field.Email'
	],
	xtype: 'register-view',
	config: {
		cls: 'register-pane',
		styleHtmlContent: true,
		items: [{
			html: '<div class="info-pane"><h3>Become a FAFA Model today</h3><p>Its very simple to start.</p></div>'
		},
		{
			xtype: 'formpanel',
			items: [
				{
					xtype: 'textfield',
					label: 'Name',
					placeholder: "What's your name?"
				},
				{
					xtype: 'emailfield',
					label: 'Email',
					placeholder: "What's your email?"
				}
			]
		}]
	}
	
});