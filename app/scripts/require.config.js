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
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        gsap: '../bower_components/gsap/src/minified/TweenMax.min',
        scrollmagic : '../bower_components/scrollmagic/js/jquery.scrollmagic.min'
    }
});
