var Shape = function(options){
    
    var img, touch_dist = -1, title_scale = 1, title_img, m = 0, self = _(options).extend({
        draw:function(){
            push();
            var t = self.getTransform();
            m+=self.speed/20;
            translate(t.x,t.y);
            scale(self.scale,self.scale);
            if(touchIsDown){
                touch_dist = dist(self.x,self.y,touchX-dX/2,touchY-dY/2);
                title_scale = Math.sqrt((200-touch_dist)/100);
                if(title_scale == NaN){title_scale = 0}
            }else{
                title_scale *= 0.9;
            }
            image(img,-img.width/2,-img.height/2);
            if(title_scale>0) image(title_img,-title_img.width*title_scale/2,-title_img.height*title_scale/2,title_img.width*title_scale,title_img.height*title_scale);
            /*stroke(0,0,255);
            noFill();
            rectMode(CENTER);
            ellipseMode(CENTER);
            rect(0,0,img.width,img.height);
            stroke(255,0,0);
            ellipse(0,0,10,10);*/
            fill(255,0,0);
            noStroke();
            _(self.anchors).each(function(anchor){
                /*ellipse(anchor.x-img.width/2,anchor.y-img.height/2,20,20);
                */
            });
            pop();
        },
        getPosition:function(){
            return {
                x:self.x+cos(m)*self.r,
                y:self.y+sin(m)*self.r
            };
        },
        getTransform:function(){
            var width = self.scale*img.width,
                height = self.scale*img.height,
                p = self.getPosition();
            return {
                x: p.x,
                y: p.y,
                dx: -width/2,
                dy: -height/2,
                width:width,
                height:height
            }
        },
        getAnchorAsGlobalPoint:function(anchorId){
            var anchor = _(self.anchors).findWhere({id:anchorId}), 
                t = self.getTransform();
            return {
                x:t.x+t.dx+anchor.x*self.scale,//+anchor.x+t.dx,
                y:t.y+t.dy+anchor.y*self.scale//
            }
        }
    });
    
    // setup
    
    //self.speed = Math.random()+.5;
    //self.speed *= Math.random()<.5 ? 1:-1;
    img = self.img = loadImage(self.src);
    console.log(self.title_src);
    title_img = self.title_img = loadImage(self.title_src);
    
    //
    
    return self;
};