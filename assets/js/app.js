/* globals $:false */
var width,
    height,
    docH,
    isMobile = false,
    headerOn = false,
    gridOn = false,
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
                app.sizeSet();
                $('.project-title').hover(function() {
                    var parent = $(this).parent().parent();
                    var flying = parent.find('.video').show();
                    var top = parent.offset().top - $html.scrollTop() - $body.scrollTop() + parent.outerHeight() / 2;
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
                    var anchor = document.querySelector('#selected-projects');
                    smoothScroll.animateScroll(height / 1.3);
                });
                MorphSVGPlugin.convertToPath("circle, ellipse");
                var intro = new TimelineMax({
                    paused: true,
                    repeat: -1,
                    yoyo: true
                });
                intro.to('#el2', 10, {
                    rotation: -180,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el4'
                    },
                    ease: Power1.easeInOut
                }).to('#el2', 20, {
                    rotation: 60,
                    scaleY: -1,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el3'
                    },
                    ease: Power1.easeInOut
                }).to('#el2', 30, {
                    rotation: -50,
                    scaleY: 1,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el5'
                    },
                    ease: Power1.easeInOut
                }).to('#el2', 10, {
                    rotation: 10,
                    scaleY: -1,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el2'
                    },
                    ease: Power1.easeInOut
                }).to('#el2', 30, {
                    rotation: -60,
                    scaleY: 1,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el4'
                    },
                    ease: Power1.easeInOut
                }).to('#el2', 20, {
                    rotation: 45,
                    scaleY: 1,
                    transformOrigin: 'center',
                    morphSVG: {
                        shape: '#el3'
                    },
                    ease: Power1.easeInOut
                });
                $(window).load(function() {
                    $(".loader").fadeOut('fast', function() {
                        intro.play(0);
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
                    if ($body.scrollTop() > height / 1.9) {
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
                    if ($body.scrollTop() > docH - height * 1.5) {
                        if (!gridOn) {
                            $('#grid').addClass('visible');
                            gridOn = true;
                        }
                    } else {
                        if (gridOn) {
                            $('#grid').removeClass('visible');
                            gridOn = false;
                        }
                    }
                });
            });
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