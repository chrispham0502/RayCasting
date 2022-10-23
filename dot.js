class Dot{
    constructor(){
        this.pos = createVector(width / 2, height /2);
        this.rays = [];
        for (let a = 0; a < 360; a+= 0.5){
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x,y){
        this.pos.set(x,y);
    }

    look(walls){
        for (let ray of this.rays){
            let  smallest_d = Infinity;
            let closest = null;
            for (let wall of walls){
                const pt = ray.intersect(wall);
                if (pt){
                    const d = p5.Vector.dist(this.pos, pt);
                    if (d < smallest_d){
                        smallest_d = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                stroke(255, 50);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }

        }
        
    }

    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 1);
        for (let ray of this.rays){
            ray.show();
        }
    }
}