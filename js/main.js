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

//定义小鱼尾巴动画
var babyTail = [];
//定义小鱼眼睛动画
var babyEye = [];
//定义小鱼身体动画
var babyBody = [];
//定义大鱼尾巴动画
var momTail = [];
//定义大鱼眼睛动画
var momEye = [];
//定义大鱼身体动画
var momBodyOra = [];
var momBodyBlue = [];
//定义鼠标位置
var data;

//定义白色圈动画；
var wave;
//定义红色圈动画
var halo;
//定义漂浮物类；
var dust;
var dustPic = [];
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
    for(var i = 0; i < 8; i++){
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
    }
    for(var i = 0; i < 2; i++){
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
    }
    for(var i = 0; i < 20; i++){
        babyBody[i] = new Image();
        babyBody[i].src = "./src/babyFade" + i + ".png";
    }
    for(var i = 0; i < 8; i++){
        momTail[i] = new Image();
        momTail[i].src = "./src/bigTail" + i + ".png";
    }
    for(var i = 0; i < 2; i++){
        momEye[i] = new Image();
        momEye[i].src = "./src/bigEye" + i + ".png";
    }
    for(var i = 0; i < 8; i++){
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }
    data = new dataObj();
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";
    wave = new waveObj();
    wave.init();
    halo = new haloObj();
    halo.init();
    for(var i = 0; i < 7; i++){
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
    }
    dust = new dustObj();
    dust.init();
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
    baby.draw();
    momFruitCollison();
    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}

function onMouseMove(e){
    if(!data.gameOver){
        if (e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
            //console.log(mx);
        }
    }
}