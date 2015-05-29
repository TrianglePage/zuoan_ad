/**
 * Created by George on 2015/5/26.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    watchSlidesProgress: true,
    loop: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper){
        //     alert("df");
        swiperAnimate(swiper);
        building_animate(swiper.activeIndex);
    }
})

function building_animate(index)
{
    if(index == 1)
    {
        setTimeout(function(){
        $("#page_1_blue").css({
            "transition-property":"left 2s linear 0s",
            "-webkit-transition":"left 2s linear 0s",
            "-moz-transition":"left 2s linear 0s",
            "-o-transition":"left 2s linear 0s"});
            document.getElementById("page_1_blue").style.left = "100%";
        }, 500);
    }
    else
    {
        $("#page_1_blue").css({
            "transition-property":"left 0s linear 0s",
            "-webkit-transition":"left 0s linear 0s",
            "-moz-transition":"left 0s linear 0s",
            "-o-transition":"left 0s linear 0s"});
        document.getElementById("page_1_blue").style.left = "0";
    }

};

function text_animate(index)
{

}