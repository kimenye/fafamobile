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
				xtype: 'fieldset',
				title: 'Become a model today!',
				instructions: 'Its simple to start',
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
			},
			{
				xtype: 'button',
				text: 'Signup',
				cls: 'modus-button primary signup'
			}								
		]
	}	
});