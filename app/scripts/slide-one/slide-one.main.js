define(['jquery', 'backbone', 'scrollmagic', ], function(){
'use strict'

	function init () {

		var AnimationsView = Backbone.View.extend({
			
			initialize : function () {	

				var controller = new ScrollMagic();

				var scene = new ScrollScene({ triggerElement: ".title-start", duration : 300 })
							.setPin(".title.start")
							.addTo(controller);

			}

		})
	
		var animationsView = new AnimationsView();

	}

	return {
		init : init 
	}



});