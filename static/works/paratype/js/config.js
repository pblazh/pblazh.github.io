requirejs.config({
    baseUrl: "js",
    paths: {
        "app": "./app",
        "jasmineJQuery": "./lib/jasmine/jasmine-jquery",
        "underscore": "./lib/underscore",
        "nunjucks": "./lib/nunjucks",
        "NunjucksFilters": "./lib/NunjucksFilters",
        "backbone": "./lib/backbone/backbone",
        "bb.domReady": "./lib/backbone/domReady",
        "bb.text": "./lib/backbone/text",
        "bb.InfiniScroll": "./lib/backbone/infiniScroll",

        "jQuery": "./lib/jquery/jquery-1.11.0.min",
        "jq.mCustomScrollbar": "./lib/jquery/jquery.mCustomScrollbar",
        "jq.mousewheel": "./lib/jquery/jquery.mousewheel",
        "jq.dragable": "./lib/jquery/jquery.dragable",
        "jq.noUiSlider": "./lib/jquery/jquery.nouislider",
        "jq.numeric": "./lib/jquery/jquery.numeric",
        "jq.stepper": "./lib/jquery/jquery.stepper",
        "jq.scrollTo": "./lib/jquery/jquery.scrollTo.min",

        "gs.TweenLite": "./lib/greensock/TweenLite.min",
        "gs.TimelineLite": "./lib/greensock/TimelineLite.min",
        "gs.EasePack": "./lib/greensock/easing/EasePack.min",
        "gs.CSSPlugin": "./lib/greensock/plugins/CSSPlugin.min",

        "ZeroClipboard": "./lib/0clipboard/ZeroClipboard",

        "tpl": "../resources/tpl",
    },
    shim: {
        "json2": {
            exports: "json2"
        },
        //        "TweenLite":{
        //            deps: ["gs.TweenLite", "gs.CSSPlugin", "gs.EasePack"],
        //            exports: "TweenLite"
        //        },
        "gs.TweenLite": {
            exports: "TweenLite"
        },
        //        "gs.TimelineLite":{
        //            deps: ["gs.TweenLite"],
        //            exports: "TimelineLite"
        //        },
        "gs.CSSPlugin": {
            deps: ["gs.TweenLite"],
        },
        //        "gs.EasePack":{
        //            deps: ["gs.TweenLite"],
        //        },
        "jQuery": {
            exports: "$"
        },
        "jq.mousewheel": {
            deps: ["jQuery"],
        },
        "jq.noUiSlider": {
            deps: ["jQuery"],
        },
        "jq.mCustomScrollbar": {
            deps: ["jQuery", "jq.mousewheel"],
            exports: "$.fn.mCustomScrollbar"
        },
        "jq.dragable": {
            deps: ["jQuery"],
            exports: "$.fn.dragable"
        },
        "jq.numeric": {
            deps: ["jQuery"],
            exports: "$.fn.numeric"
        },
        "jq.stepper": {
            deps: ["jQuery"],
            exports: "$.fn.stepper"
        },
        "jq.scrollTo": {
            deps: ["jQuery"],
            exports: "$.fn.scrollTo"
        }
    }
});
