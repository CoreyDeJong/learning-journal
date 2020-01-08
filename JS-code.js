// starting a js file with 'use strict'; at the top of the js file

// Alert
var name = ("Hello, what is you name?")        
alert("hello" + name + "nice to meet you")

console.log(name) //lets you see what the person has input and distribute them


// Array

        var myFriend = "Sophia";

        var myFriends = ["Sophia", "John", "Leif", "Winston", "OhNoes Guy!!"];

        // myFriends[1]
        fill(255, 0, 0);
        text( myFriends[0], 10, 30);
        text( myFriends[1], 10, 80);
        text( myFriends[2], 10, 130);

        text("I have " + myFriends.length + " friends!!!", 10, 150); 
        //.length will automatically count the number of items in the array


// Array with a while Loop

        var myFriends = ["Sophia", "John", "Leif", "Winston", "OhNoes Guy", "Sal"];

        fill(255, 0, 0);

        var friendNum = 0;
        while(friendNum < myFriends.length) {
        text(myFriends[friendNum], 10, 30+friendNum*30);
        friendNum++;
        }
        /*
        1. What do I want to repeat? 
        the text() command
        2. What do I want to change each time? 
        the friend num, and the y position
        3. How long should we repeat?
        until there are no more friends left
        */

// Array with for loop
        var myFriends = ["Sophia", "John", "Leif", "Winston", "OhNoes Guy", "Sal"];

        fill(255, 0, 0);

        var friendNum = 0;
        while(friendNum < myFriends.length) {
        text(myFriends[friendNum], 10, 30+friendNum*30);
        friendNum++;
        }

        for(var friendNum = 0; friendNum < myFriends.length; friendNum++) {
        text(myFriends[friendNum], 87, 30+friendNum*30);
        }

            // Repeating Rain Drops
            var xPositions = [10, 20, 50, 150, 200, 250, 350, 375];
            var yPositions = [0, 20, 0, 200, 100, 25, 15, 5];

            for (var rainDrops = 0; rainDrops<25; rainDrops++){
                xPositions.push(random(0,400));
                yPositions.push(random(0,400));
            }

            draw = function() {
                background(204, 247, 255);
                noStroke();
                fill(0, 200, 255);


                for (var i = 0; i < xPositions.length; i++) {
                    ellipse(xPositions[i], yPositions[i], 10, 10);
                    yPositions[i] += 7;
                
                if(yPositions[i] > 400){
                    yPositions[i]=0;
                }

                }
            };







//Array with push and mouseClicked (adding more items)
        var xPositions = [100, 200];
        var yPositions = [200, 200];

        var drawStars = function() {

        background(9, 5, 59);
        imageMode(CENTER);
        for (var i = 0; i < yPositions.length; i++) {
            image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
        }

        };
        mouseClicked = function(){
            xPositions.push(mouseX);
            yPositions.push(mouseY);
            drawStars();
        };


// Comparison Operators 
        && Logical And //requires both comparisons to be true 
        ((2<5) && (3>2) is true

        || Logical Or  // only requires one of the comparisons to be true
        ((2<1) && (3>2) is true
        
        !  Logical Not // opposite
        !(2<1) is true


// Conditionals
        if
        switch



// Draw function
        var draw = function() {
        };


// Document.write
        if(score>50){
            document.write("you passed");
        } else {
            document.write("try again");
        }





//HTML link
        //place links to HTML within the <script></script>


// If statements

        // position of the ball
        var x = 20;
        // how far the ball moves every time
        var speed = 5;

        draw = function() {
        background(202, 255, 97);

        fill(66, 66, 66);
        ellipse(x, 200, 50, 50);

        if (x > 375) {
            speed = -5;
        }
        if (x < 25) {
            speed = 5;
        }

        // move the ball
        x = x + speed;
        };

//linter
        //program that helps find issues in your code
        1. create file named eslint.json in the same folder with your HTMLAllCollection, css and json



// MouseIsPressed

        var position = 20;
        var speed = 3;

        draw = function() {
        background(202, 255, 97);

        fill(66, 66, 66);
        position = position + speed;
        // mouseX and mouseY
        // mouseIsPressed
        ellipse(position, mouseY, 50, 50);
        if (mouseIsPressed) {
            ellipse(mouseX, position, 50, 50);
        }

        if (position > 375) {
            speed = -5;
        }
        if (position < 25) {
            speed = 5;
        }
        };

//Mouse is pressed, accumulating items
        var xPositions = [100, 200];

        var draw = function() {
        if (mouseIsPressed) {
            xPositions.push(mouseX);
        }


// Objects

        // property is an item in object. every property has a key : property,
            // winston is the object
            // age is the first key
            // 19 is the first property

        // dot property is how the object is used: object name.key
            // winston.age will then display 19 in the code
            // array within an object: winston.likes[0] will display "programming"
            // object within an object: example written as winston.birthplace.city


        var winston = {
            age: 19,
            eyes: "black",
            likes: ["programming", "being programmed"],
            isCool: true,
            birthplace: {
                city: "Mountain View",
                state: "California"
            }
          };
          fill(0, 0, 0);
          textSize(16);
          text("All about Winston:", 10, 30);
          text("Winston is " + winston.age + " years old", 10, 50);
          text("Winston has " + winston.eyes + " eyes", 10, 70);
          text("Winston likes " + winston.likes[0] + " and " +  winston.likes[1], 10, 90);
          text("Winston was born in " + winston.birthplace.city + ", " + winston.birthplace.state, 10, 110);

          // Adding properties to objects with If statemetns

                    fill(0, 0, 0);
            textSize(16);
            while(winston.age <= 40) {
                text("Winston is " + winston.age + " years old", 10, winston.age*20 - 350);
                winston.age++;
                if (winston.age === 30) {
                    winston.wife = "Winnefer";
                }
                if (winston.age === 32) {
                    winston.twins = ["Winston, JR", "Winstonia"];
                }
            }

            // paintCanvas, paintBrush with mouseMoved
            var paintBrush = {
                x: 152,
                y: 118,
                img: getImage("cute/Star")
            };
            
            var paintCanvas = function() {
                imageMode(CENTER);
                image(paintBrush.img, paintBrush.x, paintBrush.y);
            };
                  
            mouseMoved = function(){
                paintBrush.x = mouseX;
                paintBrush.y = mouseY;
                paintCanvas();
               
            };

            // Arrays of Objects

                    var drawWinston = function(facePosition) {
                        var faceX = facePosition.x;
                        var faceY = facePosition.y;
                        
                        fill(255, 255, 0);
                        ellipse(faceX, faceY, 180, 180); // face
                        fill(46, 46, 41);
                        ellipse(faceX - 30, faceY - 50, 30, 30); // eyes
                        ellipse(faceX + 44, faceY - 55, 30, 30);
                        fill(252, 65, 65);
                        ellipse(faceX + 19, faceY + 32, 82, 81); // mouth
                    };
                    
                    // gives teh x and y position of the face
                    var positions = [
                    {x: 99, y: 117},
                    {x: 294, y: 117},
                    {x: 101, y: 316},
                    {x: 294, y: 316},
                    {x: 200, y: 200}
                    ];
                    
                    // for loop that will draw as many wintstons as are in the above array
                    for (var i = 0; i < positions.length; i++) {
                        drawWinston(positions[i]);
                        }

                    // array object for loop - displays title and review

                    var movies = [
                        {
                            title: "Puff the Magic Dragon",
                            review: "Best movie ever!!"
                        },
                        {
                            title: "Fubar",
                            review: "Giv'r!!"
                        }
                    ];
                    
                    for (var i = 0; i<movies.length; i++){
                    
                    fill(84, 140, 209);
                    textAlign(CENTER, CENTER);
                    textSize(20);
                    text(movies[i].title, 200, i*100+10);
                    textSize(15);
                    text(movies[i].review, 200, i*100+50);
                        
                    }

                    // multiple books on a book shelf

                            var book = [
                                { title: "The Giver",
                                stars: 4,
                                author: "Dr. Whommer",},
                                { title: "The Winner",
                                stars: 5,
                                author: "Charles Luck",},
                                { title: "It",
                                stars: 3,
                                author: "Stephen King",}
                            ];
                            
                            // draw shelf
                            fill(173, 117, 33);
                            rect(0, 120, width, 10);
                            
                            for(var i=0; i<book.length; i++){
                            
                            // draw one book
                            fill(214, 255, 219);
                            rect(10 + i*100, 20, 90, 100);
                            fill(0, 0, 0);
                            text(book[i].title, 15+i*100, 29, 70, 100);
                            text(book[i].author, 15+i*100, 50, 70, 100);
                            for (var j = 0; j < book[i].stars; j++) {
                                image(getImage("cute/Star"), 14 + j * 15 + i*102, 90, 20, 30);
                            }
                            }
                    // Object Oriented programming using this
                            var Winston = function(nickname, age, x, y) {
                                this.nickname = nickname;
                                this.age = age + "yrs old";
                                this.x = x;
                                this.y = y;
                            };
                            
                            var winstonTeen = new Winston("Winsteen", 15, 20, 50);
                            var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);
                            
                            var drawWinston = function(winston) {
                                fill(255, 0, 0);
                                var img = getImage("creatures/Winston");
                                image(img, winston.x, winston.y);
                                var txt = winston.nickname + ", " + winston.age;
                                text(txt, winston.x+20, winston.y-10);
                            };
                            
                            drawWinston(winstonTeen);
                            drawWinston(winstonAdult);
                    // Object Methods using .prototype
                                var SmileyFace = function(centerX, centerY){
                                    this.centerX=centerX;
                                    this.centerY=centerY;
                                };
                                
                                SmileyFace.prototype.draw= function() {
                                    fill(255, 234, 0);
                                    ellipse(this.centerX, this.centerY, 150, 150);
                                    fill(0, 0, 0);
                                    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
                                    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
                                    noFill(); 
                                    strokeWeight(3);
                                    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);  
                                };
                                
                                SmileyFace.prototype.speak= function(Howdy) {
                                    text(Howdy, this.centerX, this.centerY);
                                };
                                
                                var faceObj = new SmileyFace(100,100);
                                var face2 = new SmileyFace(250,250);
                                
                                faceObj.draw();
                                faceObj.speak("Howdy");
                                face2.draw();
                                face2.speak("Howdy Y'all");

                    // Object Inheritance
                                var Creature = function(nickname, age, x, y) {
                                    this.nickname = nickname;
                                    this.age = age + "yrs old";
                                    this.x = x;
                                    this.y = y;
                                };
                                
                                Creature.prototype.talk = function() {
                                    text("SUPPP!?!?!?!??!", this.x+20, this.y+140);  
                                };
                                
                                var Hopper = function(nickname, age, x, y) {
                                    Creature.call(this, nickname, age, x, y);
                                };
                                
                                Hopper.prototype = Object.create(Creature.prototype);
                                
                                Hopper.prototype.draw = function() {
                                    fill(217, 90, 0);
                                    var img = getImage("creatures/Hopper-Happy");
                                    image(img, this.x, this.y);
                                    var txt = this.nickname + ", " + this.age;
                                    text(txt, this.x+10, this.y-7);  
                                };
                                
                                Hopper.prototype.hooray = function() {
                                text("Hooooray!!!", this.x+29, this.y+140);  
                                };
                                
                                var Winston = function(nickname, age, x, y) {
                                    Creature.call(this, nickname, age, x, y);
                                };
                                
                                Winston.prototype = Object.create(Creature.prototype);
                                
                                Winston.prototype.draw = function() {
                                    fill(255, 0, 0);
                                    var img = getImage("creatures/Winston");
                                    image(img, this.x, this.y);
                                    var txt = this.nickname + ", " + this.age;
                                    text(txt, this.x+20, this.y-10);  
                                };
                                
                                
                                var winstonTeen = new Winston("Winsteen", 15, 20, 50);
                                var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);
                                
                                winstonTeen.draw();
                                winstonTeen.talk();
                                winstonAdult.draw();
                                
                                var lilHopper = new Hopper("Little Hopper", 15, 20, 240);
                                lilHopper.draw();
                                lilHopper.talk();
                                var bigHopper = new Hopper("Big Hopper", 30, 220, 240);
                                bigHopper.draw();
                                bigHopper.hooray();

//Random

        var randNum = random(0,10);


//Switch
        var fruite = "apple";
        
        switch(fruite.toLowerCase()){
        case 'apple':
            alert('you picked an apple');
            break;
        case 'orange':
            alert ('you picked an orange');
            break;
        default:
            alert ('you chose something we didn\'t have');
        }






































// function greet(name){
//     return "Hello," + name;
// }
// greet(Grace Hopper")



// var showOrder = funtion(){
//     var order = prompt("what do you want to order?");
//     var item, quantity;
//     var cart = "";


//     while (order !== "hotel" && order !== "house"){
//         prompt
//     }

// quantity=prompt("How many do you want?");
// quantity = Number(quantity);

// while ( isNaaN(quantity)){
//     quantity = prompt("Please give us a number...");
//     quantity = Number(quantity);
// }


//     if (order ==="hotel"){
//         item = '<img src="hotel.png">';
// }
//     else (order ==="hotel"){
//         item = '<img src="hotel.png">';
// }

// for( var i = 0; i < quantity; i = i + 1){
//     cart = cart + item;
// }

// return item + item;



 
}