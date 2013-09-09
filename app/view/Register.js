Ext.define('FaFa.view.Register', {
	extend: 'Ext.form.FormPanel',
	requires: [
		'Ext.form.FormPanel',
		'Ext.field.Email'
	],
	xtype: 'register-view',
	config: {
		cls: 'register-pane',
		styleHtmlContent: false,
		items: [
			{
				html: "<h3>Become a model today!</h3>"
			},
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
		}	
});