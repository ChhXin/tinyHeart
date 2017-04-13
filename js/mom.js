/**
 * Created by 14334 on 2017/4/12.
 */
var momObj = function(){
    this.x;
    this.y;
    this.angle;  //角度;
    //this.bigEye = new Image();
    //this.bigBody = new Image();
    //this.bigTail = new Image();

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInerval = 1000;

    this.momBodyCount = 0;
}

momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    //this.bigEye.src = "./src/bigEye0.png";
    //this.bigBody.src = "./src/bigSwim0.png";
    //this.bigTail.src = "./src/bigTail0.png";

}

momObj.prototype.draw = function(){

    //lerp x,y   //使大鱼的位置趋向目标值
    this.x = lerpDistance(mx, this.x, 0.97);
    this.y = lerpDistance(my, this.y, 0.96);

    //delta angle
    //Math.atan2(y,x)
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY,deltaX) - Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //tail
    this.momTailTimer += deltaTime;
    if(this.momTailTimer > 50){
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }
    //eye
    this.momEyeTimer += deltaTime;
    if(this.momEyeTimer > this.momEyeInerval){
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInerval;
        //小鱼眼睛状态判定
        if(this.momEyeCount == 0){
            this.momEyeInerval = Math.random() * 1500 + 2000;
        }else {
            this.momEyeInerval = 200;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);//大鱼依据角度旋转画布

    var momTailCount = this.momTailCount;
    var momEyeCount = this.momEyeCount;
    var momBodyCount = this.momBodyCount;
    ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width * 0.5 + 30,-momTail[momTailCount].height * 0.5);
    if(data.double == 1){
        ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width * 0.5,-momBodyOra[momBodyCount].height * 0.5);
    }else{
        ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width * 0.5,-momBodyBlue[momBodyCount].height * 0.5);
    }
    ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width * 0.5,-momEye[momEyeCount].height * 0.5);
    ctx1.restore();

}