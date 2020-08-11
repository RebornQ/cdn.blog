var now = new Date();

function createtime() {
    var grt = new Date("07/16/2018 15:00:00");//此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime() + 250);
    var years = (now - grt) / 1000 / 60 / 60 / 24 / 365;
    var ynum = Math.floor(years);
    var days = (now - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    var hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
        hnum = "0" + hnum;
    }
    var minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    var mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
        mnum = "0" + mnum;
    }
    var seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    var snum = Math.round(seconds);
    if (String(snum).length === 1) {
        snum = "0" + snum;
    }
    var elements = document.getElementsByClassName("timeDate");
    var i;
    for (i = 0; i < elements.length; i++) {
        /*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/
        elements[i].innerHTML =  " " + ynum + " 年 " + (dnum - ynum * 365) + " 天 ";
    }
    elements = document.getElementsByClassName("times");
    for (i = 0; i < elements.length; i++) {
        /*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/
        elements[i].innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    }
}

setInterval("createtime()", 250);
