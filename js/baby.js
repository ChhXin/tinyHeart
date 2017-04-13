/**
 * Created by 14334 on 2017/4/13.
 */
//小鱼类

var babyObj = function(){
    this.x;
    this.y;
    this.angle;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
}

babyObj.prototype.init = function(){
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5+ 50;
    this.angle = 0;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";

}

babyObj.prototype.draw = function(){
    //lerp //跟随大鱼
    this.x = lerpDistance(mom.x, this.x, 0.95);
    this.y = lerpDistance(mom.y, this.y, 0.95);
    //lerp angle 旋转小鱼
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) - Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //ctx1;
    ctx1.save();//在save和restore这对函数中间的函数对其它函数不产生影响
    //
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);//小鱼鱼依据角度旋转画布

    ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
    ctx1.restore();
}