/**
 * Created by 14334 on 2017/4/13.
 */
//检测果实碰撞,判断大鱼和果实距离

function momFruitCollison(){
    for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i]){
            //calculate length
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if(l < 900){
                //fruit eaten
                fruit.dead(i);
            }
        }
    }
}
