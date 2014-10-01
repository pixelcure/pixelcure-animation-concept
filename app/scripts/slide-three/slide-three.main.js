define(['jquery', 'backbone', 'scrollmagic', ], function(){
'use strict'

	function init () {

		var AnimationsView = Backbone.View.extend({
			
			initialize : function () {

				var controller = new ScrollMagic();

				var tween = TweenMax.from(".example-3 .icon", 1, {opacity : ".1", scaleX : "1.5", bottom : '-1000px'});
				var tween2 = TweenMax.from(".example-3 .title", 1, { opacity : "0", yoyo : true, bottom : '-1000', delay : .3 });
				var tween3 = TweenMax.from(".example-3 summary", 1, { opacity : "0", left : "500px", scaleY : "-1", delay: 1.1 });
				// build scene
				var scene = new ScrollScene({ triggerElement: ".example-3" })
							.setTween(tween)
							.addTo(controller);

				var scene2 = new ScrollScene({ triggerElement: ".example-3" })
							.setTween(tween2)
							.addTo(controller)

				var scene3 = new ScrollScene({ triggerElement: ".example-3" })
							.setTween(tween3)
							.addTo(controller)

			}

		});
	
		var animationsView = new AnimationsView();

	}

	return {
		init : init 
	}



});