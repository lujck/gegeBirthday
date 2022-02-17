$(function(){
    text = "广州，简称穗，别称羊城、花城，是广东省省会、副省级市、国家中心城市、超大城市、国际大都市、国际商贸中心、国际综合交通枢纽、国家综合性门户城市，首批沿海开放城市，是南部战区司令部驻地." 
    var H = $(window).height();
    var W = $(window).width();
    console.log('w',W)
    $("body").width(W).height(H);
    let txt = $('.text')
    let star = $('.star')
    let bool = true
    function flicker(){
        bool = !bool
        if(bool){
            star.text('__');
        } else {
            star.text('');
        } 
    }
    function type(i){
        //把每个字符分开
        str  = text.substr(0,i);
        //改变_字符
        txt.text(str);
        //计数器
        i++;
        //当i大于文本长度 返回
        if (i>=text.length){
            star.text('');
            return
        }
        //否则定时器一直执行，前面参数回调，后面参数10修改时间
        setTimeout(function(){
            type(i)
        },200);
        setTimeout(function(){
            flicker()
        },50);
    }
    type(0)
 });