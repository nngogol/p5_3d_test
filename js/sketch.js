let point1
let point2


function setup() {
    createCanvas(900, 400, WEBGL)
    point1 = createVector(30, 40, 50)
    point2 = createVector(30, -40, 70)
}


function draw() {
    // draw grey background
    push()
    colorMode(HSB)
    background(frameCount%300,30,60)
    pop()


    // auto-rotation
	    rotateX(radians(frameCount*.5))
	    rotateZ(radians(frameCount*.5))
    // 3 line - coordinates
	    stroke(255, 0, 0); line(0,0,0, 0,0,100);
	    stroke(0, 250, 0); line(0,0,0, 0,100,0);
	    stroke(0,0,255); line(0,0,0, 100,0,0);
    // 1 plane
	    push()
	    	stroke(255,100,0)
	    	// noFill()
	    	rotateX(radians(90))
		    translate(0,0,0)
		    plane(50,50)
	    pop()
    // 2 plane
	    push()
	    	stroke(255,100,0)
	    	// noFill()
	    	rotateX(radians(0))
		    translate(0,0,0)
		    plane(50,50)
	    pop()
	// 3 plane
	    push()
	    	stroke(255,100,0)
	    	// noFill()
	    	rotateY(radians(90))
		    translate(0,0,0)
		    plane(50,50)
	    pop()

	// setting
	point1.x = map(mouseX, 0, width, -100,100)

    // first point
	    push()
		    translate(point1.x, point1.y, point1.z)
	    	stroke(51)
		    ellipsoid(5)
	    pop()

    // second point
	    push()
		    translate(point2.x, point2.y, point2.z)
	    	stroke(51)
		    ellipsoid(5)
	    pop()

	// main line
	stroke(155)
    line(point1.x, point1.y, point1.z, point2.x, point2.y, point2.z)

    // text
    // text(4,1,5,6)

    // 1 way
    let part_1 = pow(point2.x - point1.x, 2)
    let part_2 = pow(point2.y - point1.y, 2)
    let part_3 = pow(point2.z - point1.z, 2)
    let res_by_hand = sqrt(part_1 + part_2 + part_3)

    // 2 way
    let res_by_func = dist(point1.x, point1.y, point1.z, point2.x, point2.y, point2.z)

    // console.log(`${res_by_hand} = res_by_hand`)
    // console.log(`${res_by_func} = res_by_func`)


    // line(point1.x, point1.y, point1.z, point2.x, point2.y, point2.z)


    // point(point2.x,point2.y,point2.z)

    // box(20)



}