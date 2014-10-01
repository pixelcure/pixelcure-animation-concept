define(['jquery', 'backbone', 'scrollmagic', ], function(){
'use strict'

	function init () {

		var AnimationsView = Backbone.View.extend({
			initialize : function () {

				var controller = new ScrollMagic();

				var tween = TweenMax.from(".example-2 .icon", 1, {opacity : ".1", scale: 2.5, top : '-1150px'});
				var tween2 = TweenMax.from(".example-2 .title", 1, { top : '-500px', delay : 0.3 });
				var tween3 = TweenMax.from(".example-2 summary", 2, { right : "-1000px", opacity : '.1', delay : .6 })
				// build scene
				var scene = new ScrollScene({ triggerElement: ".example-2" })
							.setTween(tween)
							.addTo(controller);

				var scene2 = new ScrollScene({ triggerElement: ".example-2" })
							.setTween(tween2)
							.addTo(controller)

				var scene3 = new ScrollScene({ triggerElement: ".example-2" })
							.setTween(tween3)
							.addTo(controller)

			}
		})
	
		var animationsView = new AnimationsView();

	}

	return {
		init : init 
	}



});