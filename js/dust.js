/**
 * Created by 14334 on 2017/4/14.
 */
//漂浮物

var dustObj = function(){
    this.x = [];
    this.y = [];
    this.alpha;
    this.amp = [];
    this.NO = [];
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
    for( var i = 0; i < this.num; i++){
        this.x[i] = Math.random() * canWidth;   //Math.random返回数值 [0,1)
        this.y[i] = Math.random() * canHeight;   //Math.random返回数值 [0,1)
        this.NO[i] = Math.floor(Math.random() * 7);
        this.amp[i] = Math.random() * 25 + 20;
    }
    this.alpha = 0;
}
dustObj.prototype.draw = function(){
    this.alpha += deltaTime * 0.0008;
    var l =Math.sin(this.alpha);
    for(var i = 0; i < this.num; i++){
        var no =this.NO[i];
        ctx1.drawImage(dustPic[no],this.x[i] + this.amp[i] * l,this.y[i]);
    }
}