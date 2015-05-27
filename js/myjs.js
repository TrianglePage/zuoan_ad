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
            document.getElementById("page_1_blue").style.left = "400px";
        }, 1000);
    }
    else
    {
        document.getElementById("page_1_blue").style.left = "0px";
    }

};