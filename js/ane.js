/**
 * Created by 14334 on 2017/4/12.
 */
//绘制海葵

var aneObj = function () {
    this.x = [];
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.len = [];
    this.alpha = 0;
    this.amp = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
    for( var i = 0; i < this.num; i++){
        this.rootx[i] = i * 16 + Math.random() * 20;   //Math.random返回数值 [0,1)
        this.headx[i] = this.rootx;
        this.heady[i] = canHeight - 200 + Math.random() * 50;
        this.len[i] = 200 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }

}
aneObj.prototype.draw = function(){
    ctx2.save();
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";
    //console.log(123);
    for(var i = 0; i < this.num; i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        //ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i] * l * this.amp[i], this.heady[i]);
        ctx2.lineTo(this.rootx[i], canHeight - this.len[i]);
        ctx2.stroke();
        //console.log(this.headx[i]);
    }
    ctx2.restore();
}

