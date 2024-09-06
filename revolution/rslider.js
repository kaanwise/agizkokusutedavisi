/* Slider 1*/
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider01"] = {once: RS_MODULES.modules["revslider01"]!==undefined ? RS_MODULES.modules["revslider01"].once : undefined, init:function() {
		window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
		if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider01"].init()}); return;}
		window.revapi1 = jQuery(window.revapi1);
		if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
		revapi1.revolutionInit({
				revapi:"revapi1",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1140,1024,778,480",
				gridheight:"540,440,340,300",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"540,440,340,300",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"<span class=\"tp-bullet-image\"></span>",
						style:"hades"
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 2*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"700,668,568,468",
				lazyType:"smart",
				spinner:"spinner0",
				perspectiveType:"local",
				editorheight:"700,668,568,468",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:768,
						left: {
							container:"layergrid",
							h_align:"right",
							v_align:"bottom",
							h_offset:60
						},
						right: {
							container:"layergrid",
							v_align:"bottom",
							h_offset:0
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 3*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
		window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
		if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
		window.revapi3 = jQuery(window.revapi3);
		if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
		revapi3.revolutionInit({
				revapi:"revapi3",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"850,750,650,550",
				lazyType:"smart",
				spinner:"spinner0",
				perspectiveType:"local",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:768,
						hide_onleave:true,
						hide_delay:100,
						left: {
							h_offset:0
						},
						right: {
							h_offset:0
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
}} // End of RevInitScript
if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 4*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider41"] = {once: RS_MODULES.modules["revslider41"]!==undefined ? RS_MODULES.modules["revslider41"].once : undefined, init:function() {
		window.revapi4 = window.revapi4===undefined || window.revapi4===null || window.revapi4.length===0  ? document.getElementById("rev_slider_4_1") : window.revapi4;
		if(window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length==0) { window.revapi4initTry = window.revapi4initTry ===undefined ? 0 : window.revapi4initTry+1; if (window.revapi4initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider41"].init()}); return;}
		window.revapi4 = jQuery(window.revapi4);
		if(window.revapi4.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_4_1"); return;}
		revapi4.revolutionInit({
				revapi:"revapi4",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"740,668,568,468",
				lazyType:"smart",
				spinner:"spinner0",
				perspectiveType:"local",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 5*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider51"] = {once: RS_MODULES.modules["revslider51"]!==undefined ? RS_MODULES.modules["revslider51"].once : undefined, init:function() {
		window.revapi5 = window.revapi5===undefined || window.revapi5===null || window.revapi5.length===0  ? document.getElementById("rev_slider_5_1") : window.revapi5;
		if(window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length==0) { window.revapi5initTry = window.revapi5initTry ===undefined ? 0 : window.revapi5initTry+1; if (window.revapi5initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider51"].init()}); return;}
		window.revapi5 = jQuery(window.revapi5);
		if(window.revapi5.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_5_1"); return;}
		revapi5.revolutionInit({
				revapi:"revapi5",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"824,690,550,480",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"824,690,550,480",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"<span class=\"tp-bullet-title\">{{title}}</span>",
						style:"ares"
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 6*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider61"] = {once: RS_MODULES.modules["revslider61"]!==undefined ? RS_MODULES.modules["revslider61"].once : undefined, init:function() {
		window.revapi6 = window.revapi6===undefined || window.revapi6===null || window.revapi6.length===0  ? document.getElementById("rev_slider_6_1") : window.revapi6;
		if(window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length==0) { window.revapi6initTry = window.revapi6initTry ===undefined ? 0 : window.revapi6initTry+1; if (window.revapi6initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider61"].init()}); return;}
		window.revapi6 = jQuery(window.revapi6);
		if(window.revapi6.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_6_1"); return;}
		revapi6.revolutionInit({
				revapi:"revapi6",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"815,668,568,350",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"815,668,568,350",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				parallax: {
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					type:"mouse"
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 7*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider71"] = {once: RS_MODULES.modules["revslider71"]!==undefined ? RS_MODULES.modules["revslider71"].once : undefined, init:function() {
		window.revapi7 = window.revapi7===undefined || window.revapi7===null || window.revapi7.length===0  ? document.getElementById("rev_slider_7_1") : window.revapi7;
		if(window.revapi7 === null || window.revapi7 === undefined || window.revapi7.length==0) { window.revapi7initTry = window.revapi7initTry ===undefined ? 0 : window.revapi7initTry+1; if (window.revapi7initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider71"].init()}); return;}
		window.revapi7 = jQuery(window.revapi7);
		if(window.revapi7.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_7_1"); return;}
		revapi7.revolutionInit({
				revapi:"revapi7",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"885,750,600,500",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"885,750,600,500",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
/* Slider 8*/
	var	tpj = jQuery;
					if(window.RS_MODULES === undefined) window.RS_MODULES = {};
					if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
					RS_MODULES.modules["revslider81"] = {once: RS_MODULES.modules["revslider81"]!==undefined ? RS_MODULES.modules["revslider81"].once : undefined, init:function() {
						window.revapi8 = window.revapi8===undefined || window.revapi8===null || window.revapi8.length===0  ? document.getElementById("rev_slider_8_1") : window.revapi8;
						if(window.revapi8 === null || window.revapi8 === undefined || window.revapi8.length==0) { window.revapi8initTry = window.revapi8initTry ===undefined ? 0 : window.revapi8initTry+1; if (window.revapi8initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider81"].init()}); return;}
						window.revapi8 = jQuery(window.revapi8);
						if(window.revapi8.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_8_1"); return;}
						revapi8.revolutionInit({
								revapi:"revapi8",
								sliderLayout:"fullwidth",
								visibilityLevels:"1240,1024,778,480",
								gridwidth:"1230,1024,778,480",
								gridheight:"730,668,568,400",
								lazyType:"smart",
								spinner:"spinner0",
								perspective:600,
								perspectiveType:"local",
								editorheight:"730,668,568,400",
								responsiveLevels:"1240,1024,778,480",
								progressBar:{disableProgressBar:true},
								navigation: {
									onHoverStop:false
								},
								viewPort: {
									global:true,
									globalDist:"-200px",
									enable:false,
									visible_area:"20%"
								},
								fallbacks: {
									allowHTML5AutoPlayOnAndroid:true
								},
						});
						
					}} // End of RevInitScript
/* Slider 09*/
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider91"] = {once: RS_MODULES.modules["revslider91"]!==undefined ? RS_MODULES.modules["revslider91"].once : undefined, init:function() {
		window.revapi9 = window.revapi9===undefined || window.revapi9===null || window.revapi9.length===0  ? document.getElementById("rev_slider_9_1") : window.revapi9;
		if(window.revapi9 === null || window.revapi9 === undefined || window.revapi9.length==0) { window.revapi9initTry = window.revapi9initTry ===undefined ? 0 : window.revapi9initTry+1; if (window.revapi9initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider91"].init()}); return;}
		window.revapi9 = jQuery(window.revapi9);
		if(window.revapi9.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_9_1"); return;}
		revapi9.revolutionInit({
				revapi:"revapi9",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"740,668,568,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"740,668,568,400",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
/* Slider 10*/ 
	var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider10"] = {once: RS_MODULES.modules["revslider10"]!==undefined ? RS_MODULES.modules["revslider10"].once : undefined, init:function() {
		window.revapi10 = window.revapi10===undefined || window.revapi10===null || window.revapi10.length===0  ? document.getElementById("rev_slider_10_1") : window.revapi10;
		if(window.revapi10 === null || window.revapi10 === undefined || window.revapi10.length==0) { window.revapi10initTry = window.revapi10initTry ===undefined ? 0 : window.revapi10initTry+1; if (window.revapi10initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider10"].init()}); return;}
		window.revapi10 = jQuery(window.revapi10);
		if(window.revapi10.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_10_1"); return;}
		revapi10.revolutionInit({
				revapi:"revapi10",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"930,668,540,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"930,668,540,400",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				parallax: {
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					type:"mouse"
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
/* Slider 11*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
		window.revapi11 = window.revapi11===undefined || window.revapi11===null || window.revapi11.length===0  ? document.getElementById("rev_slider_11_1") : window.revapi11;
		if(window.revapi11 === null || window.revapi11 === undefined || window.revapi11.length==0) { window.revapi11initTry = window.revapi11initTry ===undefined ? 0 : window.revapi11initTry+1; if (window.revapi11initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
		window.revapi11 = jQuery(window.revapi11);
		if(window.revapi11.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_11_1"); return;}
		revapi11.revolutionInit({
				revapi:"revapi11",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"900,750,650,550",
				lazyType:"smart",
				perspective:600,
				perspectiveType:"global",
				editorheight:"900,750,650,550",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"<span class=\"tp-bullet-inner\"></span>",
						style:"uranus",
						h_align:"right",
						v_align:"center",
						h_offset:40,
						v_offset:52,
						direction:"vertical",
						space:10
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
/* Slider 12*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider12"] = {once: RS_MODULES.modules["revslider12"]!==undefined ? RS_MODULES.modules["revslider12"].once : undefined, init:function() {
		window.revapi12 = window.revapi12===undefined || window.revapi12===null || window.revapi12.length===0  ? document.getElementById("rev_slider_12_1") : window.revapi12;
		if(window.revapi12 === null || window.revapi12 === undefined || window.revapi12.length==0) { window.revapi12initTry = window.revapi12initTry ===undefined ? 0 : window.revapi12initTry+1; if (window.revapi12initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider12"].init()}); return;}
		window.revapi12 = jQuery(window.revapi12);
		if(window.revapi12.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_12_1"); return;}
		revapi12.revolutionInit({
				revapi:"revapi12",
				DPR:"dpr",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"800,700,620,450",
				lazyType:"smart",
				perspective:600,
				perspectiveType:"global",
				editorheight:"800,700,620,450",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"",
						style:"custom",
						hide_onmobile:true,
						hide_under:"1200px",
						anim:"zoomout",
						h_align:"right",
						v_align:"center",
						h_offset:-35,
						v_offset:0,
						direction:"vertical",
						space:10
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
/* Slider 13*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider13"] = {once: RS_MODULES.modules["revslider13"]!==undefined ? RS_MODULES.modules["revslider13"].once : undefined, init:function() {
		window.revapi13 = window.revapi13===undefined || window.revapi13===null || window.revapi13.length===0  ? document.getElementById("rev_slider_13_1") : window.revapi13;
		if(window.revapi13 === null || window.revapi13 === undefined || window.revapi13.length==0) { window.revapi13initTry = window.revapi13initTry ===undefined ? 0 : window.revapi13initTry+1; if (window.revapi13initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider13"].init()}); return;}
		window.revapi13 = jQuery(window.revapi13);
		if(window.revapi13.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_13_1"); return;}
		revapi13.revolutionInit({
				revapi:"revapi13",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"900,750,650,550",
				lazyType:"smart",
				perspective:600,
				perspectiveType:"global",
				editorheight:"900,750,650,550",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						tmp:"<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
						style:"zeus",
						left: {
							h_offset:30
						},
						right: {
							h_offset:30
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript