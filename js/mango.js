class Mango{

	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.r=r;
		this.image=loadImage("images/mango.png");
		this.body=Bodies.circle(x, y, r/2, options);
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x,pos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r);
		pop()
 }
}