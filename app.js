Ext.application({
    name: 'FaFa',
	
	views: [
		'LazyCarousel'
	],

    launch: function() {

        //just a function to produce a random color
        var getRandomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        };

        var me = this;

        //a helper abstraction that makes circling through an array easier
        var CircleStore = function(vals){
            var that = this;

            that.vals = vals;

            that.setIndex = function(idx){
                that.idx = idx;
                return that.getValue();
            };

            that.getValue = function(){
                return that.getAtIndex(that.idx);
            };

            that.getAtIndex = function(index){
                return that.vals[index];
            };

            that.getPreviousIndex = function(baseIndex){
                return baseIndex === 0 ? that.vals.length - 1 : baseIndex - 1;
            };

            that.getNextIndex = function(baseIndex){
                return baseIndex === that.vals.length -1 ? 0 : baseIndex + 1;
            };

            that.getAtPrevious = function(){
                return that.getAtIndex(that.getPreviousIndex(that.idx));
            };

            that.getAtNext = function(){
                return that.getAtIndex(that.getNextIndex(that.idx));
            };

            that.moveForward = function(){
                that.idx = that.getNextIndex(that.idx);
                return that.getValue();
            };

            that.moveBackward = function(){
                that.idx = that.getPreviousIndex(that.idx);
                return that.getValue();
            };
        };


        //our array of values that we want to circle through *lazily*
        var values = [1,2,3,4,5,6,7,8,9];


        //wrap the values in our CircleStore abstraction
        var wrappedValues = new CircleStore(values);

        //we want to start at the middle (number 5)
        wrappedValues.setIndex(4);

        //retrieves an item from our source
        var getItem = function(position){
            return position === 'actual' ? wrappedValues.getValue() :
                position === 'next' ? wrappedValues.getAtNext() :
                    wrappedValues.getAtPrevious();
        };

        //a little helper function to create a new carousel item that will either
        //show the number at the current, the previous or the next index
        var createAt = function(position){
            return Ext.factory({
                xtype: 'container',
                html : '<span class="cc-carousel-number">' + getItem(position) + '</span>',
                style: 'background-color: ' + getRandomColor()
            });
        };

        //create an instance of the LazyCarousel
        me._carousel = Ext.create('FaFa.view.LazyCarousel', {
            fullscreen: true,
            direction: 'horizontal',

            defaults: {
                styleHtmlContent: true
            },

            //put the item at the center inside
            items: [createAt('actual')]
        });

        //now put the previous and the next inside
        me._carousel.insertTail(createAt('previous'))
        me._carousel.insertHead(createAt('next'))

        //when we swipe forward and backward we need to adjust the index in
        //our data source accordingly
        me._carousel.on('movedforward', function(){
            wrappedValues.moveForward();
        });

        me._carousel.on('movedbackward', function(){
            wrappedValues.moveBackward();
        });

        //the LazyCarousel raises events when we need to put new items at the
        //head or tail of our carousel. That's what we do then..
        me._carousel.on('headneeded', function(){
            me._carousel.insertHead(createAt('next'));
        });

        me._carousel.on('tailneeded', function(){
            me._carousel.insertTail(createAt('previous'));
        });

    }
});

// /*
//     This file is generated and updated by Sencha Cmd. You can edit this file as
//     needed for your application, but these edits will have to be merged by
//     Sencha Cmd when it performs code generation tasks such as generating new
//     models, controllers or views and when running "sencha app upgrade".
// 
//     Ideally changes to this file would be limited and most work would be done
//     in other places (such as Controllers). If Sencha Cmd cannot merge your
//     changes and its generated code, it will produce a "merge conflict" that you
//     will need to resolve manually.
// */
// 
// // DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
// //@require @packageOverrides
// 
// //<debug>
// Ext.Loader.setPath({
//     'Ext': 'touch/src'
// });
// //</debug>
// 
// Ext.application({
//     name: 'FaFa',
// 
//     requires: [
//         'Ext.MessageBox'
//     ],
// 
//     views: [
//         'Main',
// 		'AboutTabView',
// 		'Wizard',
// 		'Tour'
//     ],
// 	
// 	controllers: [
// 		'WizardController'
// 	],
// 
//     icon: {
//         '57': 'resources/icons/Icon.png',
//         '72': 'resources/icons/Icon~ipad.png',
//         '114': 'resources/icons/Icon@2x.png',
//         '144': 'resources/icons/Icon~ipad@2x.png'
//     },
// 
//     isIconPrecomposed: true,
// 
//     startupImage: {
//         '320x460': 'resources/startup/320x460.jpg',
//         '640x920': 'resources/startup/640x920.png',
//         '768x1004': 'resources/startup/768x1004.png',
//         '748x1024': 'resources/startup/748x1024.png',
//         '1536x2008': 'resources/startup/1536x2008.png',
//         '1496x2048': 'resources/startup/1496x2048.png'
//     },
// 
//     launch: function() {
//         // Destroy the #appLoadingIndicator element
//         Ext.fly('appLoadingIndicator').destroy();
// 
//         // Initialize the main view
//         // Ext.Viewport.add(Ext.create('FaFa.view.Wizard'));
// 		// Ext.Viewport.add(Ext.create('FaFa.view.Main'));
// 		
// 		Ext.create('Ext.data.Store', {
// 		    data: [
// 		        { title: 'Ed',    description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
// 		        { title: 'Tommy', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
// 		        { title: 'Aaron', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' },
// 		        { title: 'Jamie', description: 'The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.' }
// 		    ]
// 		});
// 		
// 		
// 		Ext.Viewport.add(Ext.create('FaFa.view.Tour'));
//     },
// 
//     onUpdated: function() {
//         Ext.Msg.confirm(
//             "Application Update",
//             "This application has just successfully been updated to the latest version. Reload now?",
//             function(buttonId) {
//                 if (buttonId === 'yes') {
//                     window.location.reload();
//                 }
//             }
//         );
//     }
// });
