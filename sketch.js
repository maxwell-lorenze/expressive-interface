let brush = "nah"
let errasure ="nah_bruvh"
let c = "nah_but_in_circle"
let sq = "nah_but_in_rect"
let weird = false
let def = true

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')
    background(255)
}



function draw() {

if(mouseIsPressed && mouseX>50 && mouseX<600){
if (def == true){
  noStroke()
  noFill()
}
else {
  //lines
  if(brush =="rainbow"){
  stroke(random(0,255),random(0,255),random(0,255), random(0,255))
  strokeWeight(5)
  line(pmouseX, pmouseY, mouseX, mouseY)
}
if(brush == "red") {
  stroke(255,0, 0)
  strokeWeight(5)
  line(pmouseX, pmouseY, mouseX, mouseY)
}
if(brush == "black") {
  stroke(0,0,0)
  strokeWeight(5)
  fill(0,0,0)
  line(pmouseX, pmouseY, mouseX, mouseY)
}
//circles
if (c== "the_rainbow_circle"){
  stroke(random(0,255),random(0,255),random(0,255), random(0,255))
  strokeWeight(3)
  fill(random(0,255),random(0,255),random(0,255), random(0,255))
  circle(pmouseX,pmouseY, random(0,50))
}
if(c == "black_circle"){
  stroke(0,0,0)
  strokeWeight(1)
  fill(255,255,255)
  circle(pmouseX,pmouseY,50)
}
if(sq == "black_rect"){
  stroke(0,0,0)
  strokeWeight(1)
  fill(0,0,0, random(0,200))
  rect(pmouseX, pmouseY, random(10,70),50 )
}
if(sq == "redbow_rect"){
  stroke(random(0,255),0,0,random(0,255))
  strokeWeight(1)
  fill(random(50,200),0,0,random(0,255))
  rect(pmouseX, pmouseY, random(10,40), random(10,40))
}
if(sq == "greenbow_rect"){
  stroke(0,random(0,255),0,random(0,255))
  strokeWeight(1)
  fill(0,random(50,200),0,random(0,255))
  rect(pmouseX, pmouseY, random(10,40), random(10,40))
}
if(sq == "bluebow_rect"){
  stroke(0,0,random(50,200),random(0,255))
  strokeWeight(1)
  fill(0,0,random(0,255),random(0,255))
  rect(pmouseX, pmouseY, random(10,40), random(10,40))
}
if(weird==true){
  fill(random(0,255), random(0,255), random(0,255))
  rectMode(CORNERS) // https://p5js.org/reference/#/p5/rectMode
  rect(mouseX, mouseY, pmouseX, pmouseY)
  rectMode(CORNER)
}

//errasure
if (errasure == "the_great_errasure"){
  stroke(255,255,255)
  strokeWeight(10)
  line(pmouseX, pmouseY, mouseX, mouseY)
}
}
}
  stroke(0)
  strokeWeight(1)


  fill(random(0,255),random(0,255),random(0,255))

  beginShape()
  vertex(25,10)
  vertex(30,15)
  vertex(30,40)
  vertex(20,40)
  vertex(20,15)
  vertex(25,10)
  endShape()

  fill(255,0, 0)
  beginShape()
  vertex(25,50)
  vertex(30,55)
  vertex(30,80)
  vertex(20,80)
  vertex(20,55)
  vertex(25,50)
  endShape()


  fill(0,0,0)
  beginShape()
  vertex(25,90)
  vertex(30,95)
  vertex(30,120)
  vertex(20,120)
  vertex(20,95)
  vertex(25,90)
  endShape()


  fill(0,0,0)
  circle(25,140,30)

  fill(random(0,255),random(0,255),random(0,255))
  circle(25,175,30)

  fill(0,0,0,random(0,100))
  rect(10,200,30,30)

  fill(200,100,50)
  beginShape()
  vertex(10,250)
  vertex(10,270)
  vertex(17,277)
  vertex(18,260)
  vertex(19,263)
  vertex(17, 240)
  vertex(20, 270)
  vertex(30, 267)
  vertex(35, 260)
  vertex(20,259)
  vertex(15, 265)
  vertex(10,250)
  endShape()

  fill

  fill(random(0,255),0,0)
  rect(10,280,30,30)

  fill(0, random(0,255), 0)
  rect(10,320,30,30)

  fill(0, 0, random(0,255))
  rect(10,360,30,30)

  fill(0,0,0)
  circle(615,25,20)


}

function mouseClicked() {

    print(int(mouseX), int(mouseY))
    if (mouseX>10 && mouseX<40 && mouseY> 245 && mouseY<275){
      if(weird==false){
      print("true")
      weird = true
      def = false
      sq = "nah_but_in_rect"
    }
    else{
      print("false")
      weird = false
      def = false
    }

    }
    if(mouseX > 10 && mouseX< 40 && mouseY> 10 && mouseY<40){
      print("rainbow")
      brush = "rainbow"
      errasure = "nah_bruvh"
      c = "nah_but_in_circle"
      sq = "nah_but_in_rect"
      def = false
    }
    if (mouseX> 10&&mouseX<40 && mouseY > 50 && mouseY<80){
      print("red")
      brush = "red"
      errasure = "nah_bruvh"
      c = "nah_but_in_circle"
      sq = "nah_but_in_rect"
      def = false
    }
    if(mouseX>10 && mouseX<40 && mouseY > 90 && mouseY<120) {
      print("black")
      brush = "black"
      errasure = "nah_bruvh"
      c = "nah_but_in_circle"
      sq = "nah_but_in_rect"
      def = false
    }

    if(mouseX>10 && mouseX<40 && mouseY > 120 && mouseY<150){
      print("black_circle")
      c = "black_circle"
      brush = "nah"
      errasure="nah_bruvh"
      sq = "nah_but_in_rect"
      def = false
    }
    if(mouseX>10 && mouseX<40 && mouseY > 160 && mouseY<190){
      print("the_rainbow_circle")
      c = "the_rainbow_circle"
      brush = "nah"
      errasure="nah_bruvh"
      sq = "nah_but_in_rect"
      def = false
    }
    if (mouseX> 10 && mouseX<40 && mouseY >200 && mouseY <230 ){
      print("black_rect")
      sq = "black_rect"
      brush = "nah"
      errasure="nah_bruvh"
      c = "nah_but_in_circle"
      def = false

    }
    if (mouseX> 10 && mouseX<40 && mouseY >280 && mouseY <310 ){
      print("redbow_rect")
      sq = "redbow_rect"
      brush = "nah"
      errasure="nah_bruvh"
      c = "nah_but_in_circle"
      def = false
      weird = false

    }
    if (mouseX> 10 && mouseX<40 && mouseY >320 && mouseY <350 ){
      print("greenbow_rect")
      sq = "greenbow_rect"
      brush = "nah"
      errasure="nah_bruvh"
      c = "nah_but_in_circle"
      def = false
      weird = false

    }
    if (mouseX> 10 && mouseX<40 && mouseY >360 && mouseY <390 ){
      print("bluebow_rect")
      sq = "bluebow_rect"
      brush = "nah"
      errasure="nah_bruvh"
      c = "nah_but_in_circle"
      def = false
      weird = false

    }
    if(mouseX> 600 && mouseX< 630 && mouseY > 10 && mouseY<40){
      print("the_great_errasure")
      errasure="the_great_errasure"
      brush = "nah"
      c = "nah_but_in_circle"
      sq ="nah_but_in_rect"
      def = false
      weird = true
    }

}
function keyPressed() {

    print(key)

}
