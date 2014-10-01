/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        scrollmagic : {
            deps : [
                'jquery'
            ]
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        gsap: '../bower_components/gsap/src/minified/TweenMax.min',
        scrollmagic : '../bower_components/scrollmagic/js/jquery.scrollmagic.min'
    }
});
