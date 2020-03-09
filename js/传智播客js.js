function info() {
    //var href1 =document.getElementById("href1");
    var city = document.getElementById("city");
    //if判断obj对象的属性状态
    city.style.display = "block"
    //city.getAttribute(display,block)
}

function out() {
    var city = document.getElementById("city");
    city.style.display = "none"
}

//一下是侧边导航显示js
function show() {
    var hide = document.getElementById("hide");
    hide.style.display = "block";
}

function hide() {
    var hide = document.getElementById("hide");
    hide.style.display = "none";
}


function left_click() {
    //左箭头点击，切换轮播图
    // debugger;
    var tus = document.getElementById("carousel").getElementsByTagName("li");
    var rounds = document.getElementById("rounds").getElementsByTagName("i");
    for (var i = 0; i < tus.length; i++) {
        //如果当前图片的zindex=1
        if (parseInt(tus[i].style.zIndex) == 1) {
            //江当前图片zindex设置为0；
            tus[i].style.zIndex = 0;
            rounds[i].innerHTML = "&#xe637;"
            if (i - 1 < 0) {//判断他是否是第一张，如果是
                tus[tus.length - 1].style.zIndex = 1;//将最后一张的zindex设置为1
                rounds[rounds.length - 1].innerHTML = "&#xe71e;";//将圆点变成实心圆
                break;
            } else {
                tus[i - 1].style.zIndex = 1//如果不是将当前图片之前的一张显示出来；
                rounds[i - 1].innerHTML = "&#xe71e;"//将圆点变成实心圆
                break;
            }


        }

    }

}

//右箭头点击，切换轮播图
function right_click() {
    //debugger;
    var tus = document.getElementById("carousel").getElementsByTagName("li");
    var rounds = document.getElementById("rounds").getElementsByTagName("i");
    // console.log(tus)
    for (var i = 0; i < tus.length; i++) {
        if (parseInt(tus[i].style.zIndex) == 1) {
            rounds[i].innerHTML = "&#xe637;"
            if (i + 1 == tus.length) {
                tus[0].style.zIndex = 1;
                rounds[0].innerHTML = "&#xe71e;"
            } else {
                tus[i + 1].style.zIndex = 1;
                rounds[i + 1].innerHTML = "&#xe71e;"
            }
            tus[i].style.zIndex = 0;

            break;

        }
    }
}

//以下是鼠标经过小圆点切换轮播图；并且被点击的小圆点变成实心圆；
function y_click(node) {
    //获取到圆点li标签
    var rounds = document.getElementById("rounds").getElementsByTagName("li");
    //获取圆点
    var rounds = document.getElementById("rounds").getElementsByTagName("i");
    //获取到图片数组
    var tus = document.getElementById("carousel").getElementsByTagName("li");
    var index = parseInt(node.getAttribute("index"));
    //遍历图片数组，找到图片的角标，如果node.zindex=i;那么将当前图片显示在最前面；
    for (var i = 0; i < tus.length; i++) {
        if (index == i) {
            //点击当前小圆点，将圆点i改变为实心圆，并将其他的圆设置为空心圆；
            rounds[i].innerHTML = "&#xe71e;"
            tus[i].style.zIndex = 1;
        } else {
            tus[i].style.zIndex = 0;
            rounds[i].innerHTML = "&#xe637;"
        }
    }
}

//以下是计时器功能代码;
//1.计时器执行函数
function time() {
    //debugger;
    var tus = document.getElementById("carousel").getElementsByTagName("li");
    //获取圆点
    var rounds = document.getElementById("rounds").getElementsByTagName("i");
    // console.log(tus)
    for (var i = 0; i < tus.length; i++) {
        if (parseInt(tus[i].style.zIndex) == 1) {
            if (i + 1 == tus.length) {
                tus[0].style.zIndex = 1;
                rounds[0].innerHTML = "&#xe71e;";
            } else {
                tus[i + 1].style.zIndex = 1;
                rounds[i + 1].innerHTML = "&#xe71e;"
            }
            tus[i].style.zIndex = 0;
            rounds[i].innerHTML = "&#xe637;"
            break;
        }
    }
}

//2.封装计时器函数；
function reHearTimer() {
    headerPicTimer = setInterval(time, 3000);
}

//3.调用计时器
reHearTimer();

//当鼠标经过轮播ul时，计时器关闭，当鼠标离开ul时，计时器重新开启
function enter() {
    // 当鼠标经过ul时，计时器清零，重置；
    clearInterval(headerPicTimer);
    //如果停留超过5秒，没有做任何操作，那么计时器重新开启
}

//当鼠标离开ul时，计时器重新激活
function leave() {
    reHearTimer();
}

//实现点击播放按钮，播放视频

//点击按钮时，将图片div影藏
function play() {
    //获取图片数组
    var play = document.getElementById("play");
    //获取到video节点
    var video = document.getElementById("videos")
    //将图片隐藏
    play.style.display = "none";
    //将视频显示出来，修改video属性
    video.style.display = "block";
    //设置video属性，自动播放
    video.play();
}


//网页右侧绝对定位聊天窗口代码
//页面加载完毕20秒弹出，并且隐藏在线客服小窗口

function show_chat() {
    var chat = document.getElementById("chat");
    chat.style.display = "block";
}

window.onload = setInterval(show_chat, 20000);

//聊天窗口内的点击事件
function facial() {
    var face = document.getElementById("facial");
}

//聊天窗口 隐藏
function alert_hide() {
    var chat = document.getElementById("chat");
    chat.style.display = "none";
}
