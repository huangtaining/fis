"use strict";

var $ = require('jquery');

function _classCallCheck(t, e) {
	if (!(t instanceof e))
		throw new TypeError("Cannot call a class as a function")
}

function PolygonFactory(t) {
	this.width = 200,
		this.height = 113,
		this.rowCount = t.rowCount || 5,
		this.colCount = t.colCount || 4,
		this.gutterX = 100,
		this.gutterY = 120,
		this.startX = random(-100, 0),
		this.leftX = -200,
		this.objects = [],
		this.container = t.container
}

function random(t, e) {
	return t + (e - t) * Math.random()
}

function slideScene() {
	var t = $(".line-boxes"),
		el_heroSceneText = $(".hero-scene-text"),
		n = $(".scene-slider-wrap .iphone-hand-bg"),

		e = $("#iphone6 .scene-viewes"),
		r = $("#iphone6"),
		o = $("#iphone6 .topbar"),
		s = $("#iphone6 .camera"),
		a = $("#iphone6 .speaker"),
		l = $("#iphone6 .speaker-before"),
		u = $("#iphone6 .home"),

		timelineMax = new TimelineMax({
			yoyo: !1,
			repeat: -1
		});


    //第一张
	timelineMax.add([
		TweenLite.to(t, 1, {
			x: "-1176",
			ease: Power3.easeInOut
		}),
		TweenLite.to(e, 1, {
			x: "-166",
			ease: Power3.easeInOut
		}),
		TweenLite.to(el_heroSceneText, 1, {
			y: "-148",
			ease: Power3.easeInOut
		})], "+=2"),

        //第二张
		timelineMax.add([
			TweenLite.to(t, 1, {
			x: "-1362",
			ease: Power3.easeInOut
		}),
		TweenLite.to(e, 1, {
			x: "-332",
			ease: Power3.easeInOut
		}),
		TweenLite.to(el_heroSceneText, 1, {
			y: "-293",
			ease: Power3.easeInOut
		})], "+=2"),

        //第三张
		timelineMax.add([
			TweenLite.to(t, 1, {
			x: "-1548",
			ease: Power3.easeInOut
		}),
		TweenLite.to(e, 1, {
			x: "-498",
			ease: Power3.easeInOut
		}),
		TweenLite.to(el_heroSceneText, 1, {
			y: "-438",
			ease: Power3.easeInOut
		})], "+=2"),

        //第四张
		timelineMax.add([
			TweenLite.to(t, 1, {
			x: "-1734",
			ease: Power3.easeInOut
		}),
		TweenLite.to(e, 1, {
			x: "-664",
			ease: Power3.easeInOut
		}),
		TweenLite.to(el_heroSceneText, 1, {
			y: "-583",
			ease: Power3.easeInOut
		})], "+=2"),


        //第一张
        timelineMax.add([
            TweenLite.to(t, 1, {
                x: "-1920",
                ease: Power3.easeInOut
            }),
            TweenLite.to(e, 1, {
                x: "-830",
                ease: Power3.easeInOut
            }),
            TweenLite.to(el_heroSceneText, 1, {
                y: "-728",
                ease: Power3.easeInOut
            })], "+=2"),

        //第五章
        timelineMax.to(n, .5, {
            scale: 1,
            opacity: 1
        }, "-=1.2"),

		timelineMax.timeScale(1)
}

function resizeFrame() {

	var t = $(".line-box-wrap").width(),
		e = $(".line-boxes"),
		i = 295,
		n = 246,
		r = Math.ceil(t / 2),
		o = i - r,
		s = -(n + o);

	TweenLite.to(e, .1, {
			x: 400,
			ease: Power3.easeInOut
		}),
		console.log("currentLeftOfLineBox:", s)
}

$(document).ready(function() {

			slideScene();

});
