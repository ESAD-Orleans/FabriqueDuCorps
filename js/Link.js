var Link = function(options){
    
    var self = _(options).extend({
        draw:function(){
            push();
            var a = self.getPoint(0),
                b = self.getPoint(1);
            stroke(33,148,135);
            strokeWeight(0.5);
            line(a.x,a.y,b.x,b.y);
            pop();
        },
        getShape:function(n){
            return _(shapes).findWhere({id:self[n][0]});
        },
        getAnchor:function(n){
            return _(self.getShape(n).anchors).findWhere({id:self[n][1]});
        },
        getPoint:function(n){
            return self.getShape(n).getAnchorAsGlobalPoint(self[n][1]);
        }
    });
    
    // setup
    
    //
    
    return self;
};