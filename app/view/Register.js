Ext.define('FaFa.view.Register', {
	extend: 'Ext.form.FormPanel',
	requires: [
		'Ext.form.FormPanel',
		'Ext.field.Email',
		'Ext.form.FieldSet',
		'Ext.field.Select'
	],
	xtype: 'register-view',
	config: {
		cls: 'register-pane',	
		styleHtmlContent: false,
        // submitOnAction: true,
        // url: 'http://localhost:3000/login',
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
						placeholder: "What's your email address?"						
					},
                    {
                        xtype: 'selectfield',
                        label: 'Gender',
                        options: [
                            {text: 'Female', value: '1'},
                            {text: 'Male',  value: '0'}
                        ]
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