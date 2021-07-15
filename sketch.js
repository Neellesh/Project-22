const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1 , bob2 , bob3 , bob4 , bob5 ;
var con1 , con2 , con3 , con4 , con5 ; 


function setup () {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	var roof_options={
		isStatic:true			
	};
	var bob_options = {
		restitution: 0.8
	  };

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(320,300,20,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(360,300,20,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,300,20,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(440,300,20,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(480,300,20,bob_options);
	World.add(world,bob5);

	

      con1 = Constraint.create({

	  	bodyA : roof,
	    bodyB : bob3,
		length:200,
	    stiffness:0.1
	  });

	 World.add(world,con1);

	 con2 = Constraint.create({

		pointA : {x:320,y:100},
		bodyB : bob1,
		pointB : {x:0,y:0},
		length:200,
		stiffness:0.1
	  });

     World.add(world,con2);
  
	con3 = Constraint.create({

		pointA : {x:360,y:100},
		bodyB : bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

     World.add(world,con3);

	 con4 = Constraint.create({

		pointA : {x:440,y:100},
		bodyB : bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
		
	  });
  
	 World.add(world,con4);

	 con5 = Constraint.create({

		pointA : {x:480,y:100},
		bodyB : bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1	
	  });
  
	 World.add(world,con5);
	
	
	}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);

  line(con2.pointA.x,con2.pointA.y,bob1.position.x,bob1.position.y);

  line(con3.pointA.x,con3.pointA.y,bob2.position.x,bob2.position.y);

  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
  
  line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
  
  pop();

  
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.06,y:-0.03});
    }
}


