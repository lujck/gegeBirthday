$(function(){
    str = '<p>"老婆，祝你生日快乐;",先送上我诚挚的祝福,嘿嘿。多希望能够站在你面前亲口给你说,陪着你一起给你过这个生日,而不是通过文字或者语音把我的祝福从千里外带过去。</p><br>'
    +'<p>前年因为疫情,匆匆忙忙赶到北京。晚上只在面包店买了几个小面包,也没有带老婆出去吃饭,也没有买一个像样的生日蛋糕，其实对这件事我挺遗憾，毕竟这是老婆和我在一起的婚后的第一个生日，本应该过的很隆重。老婆总说没事，说自己之前也不怎么过生日，其实我想因为我的存在，能给老婆带来一些不同，让生活多几分色彩，我也想有我的时候，能让老婆多开心，每一天都开心，我想让老婆过好每一个生日，过好每一天。</p><br>'
    +'<p>去年你怀孕，大着肚子，说生日的时候我原本想要给老婆买个大的，好的生日蛋糕，弥补上一年的遗憾，老婆说自己不能吃甜的，对宝宝不好，我知道老婆喜欢吃甜的，只是一直在控制，说等到下一年能吃了，再买个一起吃。</p><br>'
    +'<p>其实我一直期盼着，期盼着下一个生日，一定要给老婆好好的过一次，可是事情总是不如预期。很遗憾在你生日的这天没能够陪着你，当面给你说一句：“老婆，生日快乐”，看着你许下生日愿望。我想好好的珍惜和老婆的每一天，现在，以前和以后，或许生活中难免有些小的吵闹，但是都不会影响我对老婆的爱。</p><br>'
    +'<p>其实这一辈子很长，就是选一个对的人相伴终老，结伴而行，我希望有我的存在，能够让老婆每一天都开开心心，以后我想多陪老婆出去走走，去我们想要去的地方，做我们没做过的事情，吃喜欢吃的东西。</p><br>'
    +'<p>时间过的很快，一年又一年，这几年我觉得很开心，很幸福，因为一直有老婆的陪伴，我喜欢和老婆一起出去散散步，一起去买菜，一起做饭，一起吃饭。和老婆在一起我每天上班的期盼，就是希望快点下班，然后回去去接老婆一块回家,老婆，我想在以后的每一天，都能陪着你。</p><br>'
    +'<p style="font-size:30px;color:#ff4000">老婆，生日快乐</p><br>'
    var H = $(window).height();
    var W = $(window).width();
    console.log('w',W)
    $("body").width(W).height(H);
    function type(){
        var self = $('.text')
        var index = 0,
        timer = setInterval(function () {
            var current = str.substr(index, 1);
            if (current == '<') {
              index = str.indexOf('>', index) + 1;
            } else {
              index++;
            }
            self.html(str.substring(0, index) + ( (index & 1) && (index != str.length) ? '__' : ''));
            if (index >= str.length) {
              clearInterval(timer);
            }
        }, 150);
    }
    type()
 });