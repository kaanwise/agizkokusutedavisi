gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/
function pbmit_img_animation() {
    const boxes = gsap.utils.toArray('.pbmit-animation-style1,.pbmit-animation-style2');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}

// ** Hover Image Effect ** \\
function ts_hover_img() {
    const tsHoverImg = gsap.utils.toArray(".pbmit-servicebox-style-9");
    tsHoverImg.forEach((target) => {
        const tsImg = target.querySelector('.pbminfotech-hover-img');
        const t1 = gsap.timeline();
        t1.to(tsImg, {
            opacity: 1,
            duration: 0.4,
            scale: 1,
            ease: "Power2.easeOut"
        })
        target.tsHoverAnim = t1.play().reversed(true);
        target.addEventListener("mouseenter", tshoverimg);
        target.addEventListener("mouseleave", tshoverimg);
        target.addEventListener("mousemove", (e) => {
            let xpos = e.offsetX;
            let ypos = e.offsetY;
            const t1 = gsap.timeline();
            t1.to(tsImg, { x: xpos, y: ypos });
        });
    });

    function tshoverimg() {
        this.tsHoverAnim.reversed(!this.tsHoverAnim.reversed());
    }
}


function ts_horizontal_style() {
    const sections = gsap.utils.toArray(".pbminfotech-boxes-element-service-style-10 .pbmit-box-col-wrapper");
    if (sections.length < 1) {
        return
    }
    ScrollTrigger.matchMedia({
        "(min-width:1200px)": function() {

            let maxWidth = 0;
            const getMaxWidth = () => {
                maxWidth = 0;
                sections.forEach((section) => {
                    maxWidth += section.offsetWidth;
                    maxWidth += gsap.getProperty(section, 'marginLeft');
                });
                maxWidth += 30;
                maxWidth += window.innerWidth;
                maxWidth -= sections[0].offsetWidth;
                return maxWidth;
            };

            getMaxWidth();
            ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

            gsap.to(sections, {
                x: () => `-${maxWidth - window.innerWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: ".pbminfotech-boxes-element-service-style-10",
                    pin: true,
                    scrub: true,
                    end: () => `+=${maxWidth}`,
                    invalidateOnRefresh: true,
                    onEnter: function() {
                        if (jQuery('.pbminfotech-boxes-element-service-style-10').length) {
                            jQuery('.pbminfotech-boxes-element-service-style-10 .pbmit-heading-desc').addClass('pbmit-hide-info');
                        }
                    },
                    onLeaveBack: function() {
                        if (jQuery('.pbminfotech-boxes-element-service-style-10').length) {
                            jQuery('.pbminfotech-boxes-element-service-style-10 .pbmit-heading-desc').removeClass('pbmit-hide-info');
                        }
                    },
                    onUpdate: (self) => {
                       
                    }
                }
            });

            sections.forEach((sct, i) => {
                let pos = sections[0].offsetWidth * (i + 1);
                ScrollTrigger.create({
                    trigger: sct,
                    start: () => 'top top-=' + (pos - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                    end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                    toggleClass: { targets: sct, className: "active" }
                });
            });
        }
    });

}

function getpercentage(x, y, elm) {
    elm.find('.ts-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}



function ts_scroller_portfolio() {
    if (!jQuery('.ts-element-portfolio-style-3').length) {
        return;
    }

    ScrollTrigger.matchMedia({
        "(min-width:1200px)": function() {

            gsap.set(".ts-element-portfolio-style-3  .pbminfotech-img-wrapper", { zIndex: (i, target, targets) => targets.length - i });
            const images = gsap.utils.toArray('.ts-element-portfolio-style-3 .pbminfotech-img-wrapper:not(:last-child)');
            gsap.set(".ts-element-portfolio-style-3 ", { height: ((images.length + 1) * 100) + 'vh' });

            images.forEach((image, i) => {
                var tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ts-element-portfolio-style-3 ",
                        start: () => "top -" + (window.innerHeight * (i)),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }
                })
                tl.fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "none" });
            });
            ScrollTrigger.create({
                trigger: ".ts-element-portfolio-style-3 ",
                pin: '.ts-element-portfolio-style-3  .pbminfotech-img-box',
                start: () => "top top",
                end: () => "+=" + ((images.length) * (window.innerHeight)),
                invalidateOnRefresh: true,
            });
        }
    });
}
 
function pbmit_portfolio_effect() {
    const images = gsap.utils.toArray('.pbminfotech-boxes-element-portfolio-style-7 .pbmit-box-col-wrapper, .pbminfotech-boxes-element-team-style-7 .pbmit-box-col-wrapper');
    if (images.length == 0) return
    const images_inner = gsap.utils.toArray('.pbmit-portfoliobox-style-7 .pbminfotech-item-thumbnail, .pbmit-teambox-style-7 .pbminfotech-item-thumbnail');
    images.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
    images_inner.forEach(img => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 20%",
                end: "bottom bottom",
                scrub: 3
            },
        });
        tl.fromTo(img, { y: 0 }, { y: 40 })
    });
}


function pbmit_action_box() {
    const ts_elm = gsap.utils.toArray('.pbmit-action-box');
    if (ts_elm.length == 0) return

    ScrollTrigger.matchMedia({
        "(min-width: 1200px)": function() {
            ts_elm.forEach((box, i) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        pin: true,
                        start: "top top",
                        end: "+=700px",
                        scrub: 1
                    },
                    defaults: { ease: "none" }
                });
                tl.fromTo(box.querySelector(".pbmit-action-box-circle-wrap"), { clipPath: 'circle(15% at 50% 50%)' }, { clipPath: 'circle(100% at 50% 50%)', duration: 3 })
                tl.fromTo(box.querySelector(".pbmit-action-box-wrap"), { clipPath: 'inset(10% 20% 20% 20%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 3 })
                tl.fromTo(box.querySelector(".pbmit-action-content"), { opacity: 0, y: "70%", }, { opacity: 1, y: 0, duration: 1.5 })
                tl.fromTo(box.querySelector(".pbmit-action-content"), { opacity: 1 }, { opacity: 1, duration: 5 })
            });
        }
    });
}

function pbmit_bg_change() {

    const $section = jQuery(".page-content");
    const $startTriggers = gsap.utils.toArray(".pbmit-bg-change");
    if (!$startTriggers[0]) {
        return
    }
	ScrollTrigger.matchMedia({
        "(min-width:1200px)": function() {

		$startTriggers.forEach(elm => {
			let $startTrigger = jQuery(elm);
			const color = $startTrigger.css("background-color");
			$startTrigger.css("background-color", "transparent");

			ScrollTrigger.create({
				trigger: $startTrigger,
				start: "top 20%",
				end: '+=50%',
				onEnter: () => {
					gsap.to($section, {
						backgroundColor: color,
						overwrite: "auto"
					})
					$startTrigger.addClass("ts-text-color-white");
				},
				onEnterBack: () => {
					gsap.to($section, {
						backgroundColor: color,
						overwrite: "auto"
					})
					$startTrigger.addClass("ts-text-color-white");
				},
				onLeaveBack: () => {
					gsap.to($section, {
						backgroundColor: 'rgba(255,0,0,0)',
						overwrite: "auto"
					})
					$startTrigger.removeClass("ts-text-color-white");
				},
				onLeave: () => {
					gsap.to($section, {
						backgroundColor: 'rgba(255,0,0,0)',
						overwrite: "auto"
					})
					$startTrigger.removeClass("ts-text-color-white");
				}
			});
		});
		}
	});
}


ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});

// on load
$(window).on('load', function(){
    ts_hover_img(); 
    ts_horizontal_style(); 
    pbmit_img_animation(); 
    ts_scroller_portfolio(); 
    pbmit_portfolio_effect(); 
    pbmit_action_box();
    pbmit_bg_change(); 
    
    gsap.delayedCall(1, () =>
        ScrollTrigger.getAll().forEach((t) => {
            t.refresh();
        })
    );
});