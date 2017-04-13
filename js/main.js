/**
 * Created by 14334 on 2017/4/12.
 */

var can1;
var can2;
var ctx1;
var ctx2;

//每帧更新时间和更新时间间隔
var lastTime;
var deltaTime;

//定义背景图片
document.body.onload = game;

//获取canvas尺寸
var canWidth;
var canHeight;

//定义海葵类
var ane;
//定义果实类
var fruit;
//定义大鱼类
var mom;
//定义小鱼类
var baby;

//定义鼠标位置
var mx;
var my;

var bgPic = new Image();
function game(){
    //console.log(123);
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

//获得canvas context
function init(){

    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");
    ctx2 = can2.getContext("2d");


    //添加鼠标移动事件监听
    can1.addEventListener('mousemove', onMouseMove, false);

    //设置背景
    bgPic.src = "./src/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;
}

function gameloop(){
    requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //优化果实变大的问题
    if(deltaTime > 40){
        deltaTime = 40;
    }
    drawBackground();//绘制背景;
    ane.draw();//绘制海葵
    fruitMonitor();
    fruit.draw();//绘制果实

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    momFruitCollison();
    baby.draw();
}

function onMouseMove(e){
    if (e.offsetX || e.layerX){
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;
        //console.log(mx);
    }
}