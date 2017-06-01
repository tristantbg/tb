/* globals $:false */
var width,
    height,
    docH,
    landing = true,
    isMobile = false,
    headerOn = false,
    mouse,
    $root = '/';
$(function() {
    var app = {
        init: function() {
            $(window).resize(function(event) {
                app.sizeSet();
            });
            $(document).ready(function($) {
                $html = $('html');
                $body = $('body');
                $header = $('header');
                $selected = $('#selected-projects');
                $discover = $('#discover-images');
                app.sizeSet();

                $('.project-title').hover(function() {
                    var parent = $(this).parent().parent();
                    var flying = parent.find('.video').show();
                    var top = parent.offset().top - $(window).scrollTop() + parent.outerHeight() / 2;
                    parent.addClass('hover');
                    var video = $('video', parent);
                    if (video.length > 0) {
                        video.get(0).play();
                    }
                    TweenLite.fromTo(flying, 18, {
                        top: top,
                        x: "-1%",
                        rotation: rand(-35, -20),
                        force3D: true
                    }, {
                        top: top,
                        x: "301%",
                        rotation: rand(30, 60),
                        force3D: true,
                        ease: SlowMo.ease.config(0.95, 0.72, false),
                        onComplete: function() {
                            flying.hide();
                        }
                    });
                }, function() {
                    var parent = $(this).parent().parent();
                    var flying = parent.find('.video');
                    var video = $('video', parent);
                    if (video.length > 0) {
                        video.get(0).currentTime = 0;
                        video.get(0).pause();
                    }
                    parent.removeClass('hover');
                    TweenLite.to(flying, 0.4, {
                        x: "310%",
                        rotation: rand(30, 60),
                        force3D: true,
                        ease: Power2.easeIn,
                        onComplete: function() {
                            flying.hide();
                        }
                    });
                });
                $('#landing').click(function(event) {
                    event.preventDefault();
                    app.landingShown(true);
                });
                $('#landing').bind('mousewheel', function(evt) {
                    if (landing) {
                        var delta = evt.originalEvent.wheelDelta;
                        if (delta < -10) {
                            app.landingShown();
                        }
                    }
                });
                $('span[data-target]').click(function() {
                    app.discover($(this).data('target'));
                });
                // $('[data-target]').hover(function() {
                //   app.discover($(this).data('target'));
                // }, function() {
                //   return false;
                // });
                $(document).bind('keyup', function(e) {
                    var code = e.keyCode || e.which;
                    if (code == 49) {
                        app.discover(1);
                    }
                    if (code == 50) {
                        app.discover(2);
                    }
                    if (code == 51) {
                        app.discover(3);
                    }
                });
                // MorphSVGPlugin.convertToPath("circle, ellipse");
                // var intro = new TimelineMax({
                //     paused: true,
                //     repeat: -1,
                //     yoyo: true
                // });
                // intro.to('#el2', 10, {
                //     rotation: -180,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el4'
                //     },
                //     ease: Power1.easeInOut
                // }).to('#el2', 20, {
                //     rotation: 60,
                //     scaleY: -1,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el3'
                //     },
                //     ease: Power1.easeInOut
                // }).to('#el2', 30, {
                //     rotation: -50,
                //     scaleY: 1,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el5'
                //     },
                //     ease: Power1.easeInOut
                // }).to('#el2', 10, {
                //     rotation: 10,
                //     scaleY: -1,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el2'
                //     },
                //     ease: Power1.easeInOut
                // }).to('#el2', 30, {
                //     rotation: -60,
                //     scaleY: 1,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el4'
                //     },
                //     ease: Power1.easeInOut
                // }).to('#el2', 20, {
                //     rotation: 45,
                //     scaleY: 1,
                //     transformOrigin: 'center',
                //     morphSVG: {
                //         shape: '#el3'
                //     },
                //     ease: Power1.easeInOut
                // });
                $(window).load(function() {
                    $(".loader").fadeOut('fast', function() {
                        setTimeout(function() {
                            app.landingShown();
                        }, 1300);
                        //intro.play(0);
                        TweenLite.to('#el2', 0, {
                            scaleY: 0,
                            autoAlpha: 1,
                            transformOrigin: 'center'
                        });
                        TweenLite.to('#el2', 3, {
                            scaleY: 1,
                            rotation: -15,
                            transformOrigin: 'center',
                            ease: Expo.easeOut
                        });
                        app.deferImages();
                    });
                });
                // $(window).on("mousemove", function(event) {
                //     mouse = event.pageY - $body.scrollTop();
                // });
                smoothScroll.init({
                    speed: 1500,
                    easing: 'easeInOutCubic',
                });
                $(window).scroll(function(event) {
                    // if (!isMobile) {
                    //     var bgYPos = ($body.scrollTop() / docH);
                    //     console.log(bgYPos);
                    //     TweenLite.to('.galaxy', 0.1, {
                    //         yPercent: bgYPos
                    //     });
                    // }
                    if ($(window).scrollTop() > height / 1.9) {
                        if (!headerOn) {
                            $header.addClass('visible');
                            //   var reveal = window.baffle('header h4', {
                            //     characters: '@!1234567890abcdef',
                            //     //characters: '/()-+◼×@!Ø‹›',
                            //     speed: 200
                            // });
                            // reveal.start().reveal(1500);
                            headerOn = true;
                        }
                    } else {
                        if (headerOn) {
                            $header.removeClass('visible');
                            headerOn = false;
                        }
                    }
                });
            });
        },
        landingShown: function(overwrite) {
            if (landing || overwrite) {
                landing = false;
                var anchor = document.querySelector('#selected-projects');
                smoothScroll.animateScroll(height / 1.3);
                setTimeout(function() {
                    $body.addClass('landingShown');
                }, 1500);
            }
        },
        discover: function(num) {
            var collection = discover[num - 1];
            if (collection.length > 0) {
                var url = collection.rand();
                var h = rand(10, 33);
                var $img = $('<img class="discover-item" src="' + url + '" height="' + 60 + '%">').appendTo($discover);
                $img.load(function() {
                    TweenLite.fromTo($(this), 1.5, {
                        autoAlpha: 1,
                        left: rand(width / 6, width - $(this).outerWidth() / 2),
                        rotation: rand(-20, 20),
                        force3D: true
                    }, {
                        top: "50%",
                        rotation: rand(-10, 10),
                        force3D: true,
                        ease: Expo.easeOut,
                        onComplete: function() {
                            TweenLite.to($img, 2, {
                                top: "130%",
                                rotation: rand(-20, 20),
                                force3D: true,
                                ease: Expo.easeIn,
                                onComplete: function() {
                                    $img.remove();
                                }
                            });
                        }
                    });
                });
            }
        },
        sizeSet: function() {
            width = $(window).width();
            height = $(window).height();
            docH = $(document).height();
            if (width <= 770 || Modernizr.touch) isMobile = true;
            if (isMobile) {
                if (width >= 770) {
                    //location.reload();
                    isMobile = false;
                }
            }
        },
        distortContent: function() {
            var scrollTime = 0.7; //Scroll time
            var scrollDistance = 70; //Distance. Use smaller value for shorter scroll and greater value for longer scroll
            $(window).on("mousewheel DOMMouseScroll", function(event) {
                //event.preventDefault();
                var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
                console.log(delta);
                //var scrollTop = $window.scrollTop();
                //var finalScroll = scrollTop - parseInt(delta * scrollDistance);
                TweenMax.to($('#selected-projects'), scrollTime, {
                    skewY: 10 * delta,
                    transformOrigin: 'center',
                    ease: Power1.easeOut,
                    //autoKill: true,
                    overwrite: 5
                });
            });
        },
        goIndex: function() {
            History.pushState({
                type: 'index'
            }, $sitetitle, window.location.origin + $root);
        },
        loadContent: function(url, target) {
            $.ajax({
                url: url,
                success: function(data) {
                    $(target).html(data);
                }
            });
        },
        deferImages: function() {
            var imgDefer = document.getElementsByTagName('img');
            for (var i = 0; i < imgDefer.length; i++) {
                if (imgDefer[i].getAttribute('data-src')) {
                    imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                }
            }
        }
    };
    app.init();
});

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Array.prototype.rand = function() {
    return this[Math.floor(Math.random() * this.length)];
};