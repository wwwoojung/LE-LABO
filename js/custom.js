$(function () {
    const VISUAL_SLIDE = new Swiper('.MainVisual .visual_slide', {
        loop: true,
        on: {
            slideChange: function () {
                const index_currentSlide = this.realIndex;
                const currentSlide = this.slides[index_currentSlide]
                console.log(index_currentSlide);
                if (index_currentSlide == 3) {
                    $('.visual_slide_vid').trigger('play')
                } else {
                    $('.visual_slide_vid').trigger('pause')
                }
            },
        }
    });
})