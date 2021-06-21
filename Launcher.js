class launcher{
	constructor(bodyA,bodyB)
	{
		var options={
	    bodyA:bodyA,
	    pointB:bodyB,
		stiffness:0.004,
		length:1
			}
		this.bodyA=bodyA;
		this.pointB=bodyB;
		this.sling=Constraint.create(options);
		World.add(world, this.sling);
	}
	attach(bodyA){
	this.sling.bodyA=body;
	}
    fly(){
	this.sling.bodyA=null;
	}
	display()
	{
	if(this.sling.bodyA){
	var pointA=this.sling.bodyA.position;
	var pointB=this.pointB;
	strokeWeight(4);
	line(pointA.x,pointA.y,pointB.x,pointB.y);
	}
			
	}

}