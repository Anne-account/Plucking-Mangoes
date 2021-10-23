class Stone
{
	constructor(x,y,r)
	{
		var options={
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.r=r;
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(x, y, r/2, options)
		World.add(world, this.body);
	}
	
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop();	
	}
}