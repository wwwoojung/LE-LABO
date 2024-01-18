$(function () {
    const VISUAL_SLIDE = new Swiper('.MainVisual .visual_slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                const index_currentSlide = this.realIndex;
                // console.log(index_currentSlide);
                if (index_currentSlide == 3) {
                    $('.visual_slide_vid').trigger('play')
                } else {
                    $('.visual_slide_vid').trigger('pause')
                }
            },

            slideChangeTransitionEnd: function () {
                $('.MainVisual .slide_nav .text_box').removeClass('on');
                $('.MainVisual .slide_nav .text_box').eq(this.realIndex).addClass('on');
            }
        },

        slideActiveClass: 'on',
    });

    $('.MainVisual .slide_nav .text_box').on('click', function () {
        const IDX = $(this).index();
        VISUAL_SLIDE.slideToLoop(IDX);
    })

    $('.MainVisual .slide_nav .nav_arrows .left').on('click', function () {
        VISUAL_SLIDE.slidePrev();
    })
    $('.MainVisual .slide_nav .nav_arrows .right').on('click', function () {
        VISUAL_SLIDE.slideNext();
    })

    $('.m_open').on('click', function () {
        $('#Header').toggleClass('on');
    })

    $(window).on('scroll', function (e) {
        const SCT = $(window).scrollTop();
        if (SCT > 0) {
            $('#Header .header_wrap').addClass('on')
        } else {
            $('#Header .header_wrap').removeClass('on')
        }
    })

    $('#Header').on('wheel touchmove', function (e) {
        if ($('#Header').hasClass('on')) {
            e.preventDefault();
        }
    })
})