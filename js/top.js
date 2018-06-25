// 需求：设置定时器，先让opacity变为0；然后隐藏
// 1.获取相关元素 
var topBanner=document.getElementById("top-banner");
var closeBanner=document.getElementById("banner-close");
// 定义定时器
var timer=null;


// 2.绑定事件
closeBanner.onclick=function(){
// 书写事件驱动程序，书写定时器，opacity为0，清楚定时器，隐藏盒子
    timer=setInterval(function(){
        topBanner.style.opacity-=0.1;
        if(topBanner.style.opacity<0){
            topBanner.style.display="none";
            clearInterval(timer);
        }
    },50)
}





