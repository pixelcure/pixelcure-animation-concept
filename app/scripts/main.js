'use strict';

require([
    'jquery',
    'underscore',
    'backbone',
    'gsap',
    'scrollmagic',
    'slide-one/slide-one.main',
    'slide-two/slide-two.main',
    'slide-three/slide-three.main',
], function ($, _, Backbone, gsap, ScrollMagic, slideOne, slideTwo, slideThree) {

	slideOne.init();
	slideTwo.init();
	slideThree.init();

});
