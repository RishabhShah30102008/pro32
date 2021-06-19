class Launcher{
    constructor(bodyA, pointB){
        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.Launch= Constraint.create(options);
        World.add(world, this.Launch);
    }

      attach(body){

        this.Launch.bodyA = body;
        
      }

      fly(){

        this.Launch.bodyA = null;

    }
      display(){

           if(this.Launch.bodyA){

            var pointA = this.Launch.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

     }
            
    }
    
}



