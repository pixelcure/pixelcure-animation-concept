define(['jquery', 'backbone', 'scrollmagic', ], function(){
'use strict'

	function init () {

		var AnimationsView = Backbone.View.extend({
			
			initialize : function () {	

				var controller = new ScrollMagic();

				var tween = TweenMax.from(".title.start", 1.5, { backgroundColor: "transparent" });

				var scene = new ScrollScene({ triggerElement: ".title-start", duration : 450 })
							.setTween(tween)
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