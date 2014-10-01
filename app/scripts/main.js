'use strict';

require([
    'jquery',
    'backbone',
    'underscore',
    'gsap',
    'scrollmagic',
    'slide-one/slide-one.main',
    'slide-two/slide-two.main',
    'slide-three/slide-three.main',
], function ($, Backbone, _, gsap, ScrollMagic, slideOne, slideTwo, slideThree) {

	slideOne.init();
	slideTwo.init();
	slideThree.init();

});
