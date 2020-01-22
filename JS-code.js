// starting a js file with 'use strict'; at the top of the js file

// Alert //////////////////////////////////////////////////////
            var name = ("Hello, what is you name?")        
            alert("hello" + name + "nice to meet you")

            console.log(name) //lets you see what the person has input and distribute them



// Array /////////////////////////////////////////////
            //adding up all the numbers in an array      
            var myArray = [4,8,15,16,23,42];
            var sum = 0;
            for(var i=0; i<myArray.length; i++){
                sum = sum + myArray[i]
            }

            //accumulates all the numbers within the array, shorthand version
            var myArray = [4,8,15,16,23,42];
            var altSum = 0;
            for(var i=0; i<myArray.length; i++){
                altSum += myArray[i]
            }

            // # of two arrays have same length
            var cats = ['josie', 'belle', 'frodo'];
            var catAges = ['9', '8', '10'];
            van answer = '';
            for(var i=0; i < cats.length; i++){
            answer += `${cats[i]} is ${catAges[i]} years old ||`;} // the ` is not an apostophe, is next to the number 1. Template literals is the ${}


            // Array, setting values in an array
                    var userScore = [];
                    userScore[0] = 10; //will add the value of 10 to the first index in the array
                    userScore[1]=20; // will add the value of 20 to the second index in the array

                    console.log(userScore) // will display the values of the array


            // Array with push
                    var userScore = {10, 20};        
                    userScore.push(30) //.push will add the value of 30 into the array as the 3rd value
                    userScore.unshift(-10) //.unshift will add the value of -10 to the left of the array


            // Array with a while Loop

                    var myFriends = ["Sophia", "John", "Leif", "Winston", "OhNoes Guy", "Sal"];

                    fill(255, 0, 0);

                    var friendNum = 0;
                    while(friendNum < myFriends.length) {
                    text(myFriends[friendNum], 10, 30+friendNum*30);
                    friendNum++;
                    }
                 
        
        
// Comparison Operators /////////////////////////////////////////
        && Logical And //requires both comparisons to be true 
        ((2<5) && (3>2) is true
        
        || Logical Or  // only requires one of the comparisons to be true
        ((2<1) && (3>2) is true
        
        !  Logical Not // opposite
        !(2<1) is true
        
        
// Constructor function ///////////////////////////////////////////
        //Constructor Function - blueprints/templates for a object, so you can create an object and repeat it for multiple occurrences
               //usually created at the very top of the page
               //the letter of the name of the constructor function is Capitalized
               //every property with start with ``this.`` 
               function Pokemon(name, hp, attack, defense, sa, sd, speed) {
                this.name = name;
                this.hp = hp;
                this.defense = defense;
                this.sa = sa;
                this.sd = sd;
                this.speed = speed;
                this.types = [];
              }
              
              //or you can use a prototype instead of creating a function within the constructor
              var badoof = new Pokemon();
              Pokemon.prototype.cute = 10;
              Pokemon.prototype.innerfocus = function(status) {
                if(status === 'posion'){
                  this.sd += 1;
                } else {
                  this.sd += 2;
                }
                return true;
              }
              
              Pokemon.prototype.render = function() {
                //create the elements
                var listEl = document.getElementById('pokemon-stats');
                var name = document.createElement('li');
                var hp = document.createElement('li');
                
                //given it how its displayed
                name.textContent = this.name;
                // defense.textContent = this.defense;
                listEl.appendChild(name);
                // console.log(listEl);
              }
              
              var badoof = new Pokemon(1, 1, 1, 1, 1, 1, 1);
              badoof.render();
              
              // badoof.cute = 20;
              // console.log(badoof.cute)
        
        

        
//DOM - Document Object Model ///////////////////////////////////////
        //Selecting Individual Elements
        getElementById()
        querySelector()
        //Selecting Multiple Elements
        getElementByClassName() //selects all emenents by class name
        getElementsByTagName()
        querySelectorA() //uses a CSS selector
        //Moving between element nodes
        parentNode
        previousSibling
        nextSibiling
        firstChild
        lastChild

// Document.write/////////////////////////////////////
        if(score>50){
            document.write("you passed");
        } else {
            document.write("try again");
        }


//Function////////////////////////////////////////////
        firstFunction(num1, num2);{
            console.log(num1 + num2)
            return num1 + num2;
            
        }

        firstFunction(2.4); // will result in 2 + 4 = 6
        

//Global locations?
        var locations = []; // this will need to be at the top of code
        var seattle = new CookieStore('seattle', 23, 45, 6.3);

        locations.push(seattle);


//HTML link/////////////////////////////////////////////
        //place links to HTML within the <script></script>


// If statements/////////////////////////////////////

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


//Loops////////////////////////////////////////////////////////////////
            //loop - for
            if (){}
            i = 0
            for (var i=0; i<some number; i++){}

            //loop - while
                    while(i<10){
                        console.log('this will run 10 times');
                        i++;
                    }

//Objects /////////////////////////////////////////////////////////

            var snoman = {
                name: 'Olaf',
                age: 6
                melt: function(){ //anonymous function
                    console.log('I\'m melting...');
                }    
                weather: [
                    temp: 32,
                    skies: "cloudy",
                    snowing: SVGComponentTransferFunctionElement
                ]
                }
            }

            console.log(snowman.name);
            snowman.melt();
            console.log(snowman.weather.temp) //an object within an object will have the object as the first



//Prompt/////////////////////////////////////
        //prompt creates a pop-up box asking the user questions
        //prompt will always convert a number into a string, require switching a comparison of <, >,... to needing to all be strings, use toString 
        var userName = prompt('what is your name?')

        
//Random////////////////////////////////////

        var randNum = random(0,10);

        // String to number
        parseInt
        toString
        Number(guess) // will translate the guess to a number
        
        
// Render /////////////////////////////////////
            // create an element in html with an id. Example <ul id="pokemon-stats"></ul>


//Switch//////////////////////////////////////
            var fruit = "apple";
                    
                    switch(fruit.toLowerCase()){
                        case 'apple':
                        alert('you picked an apple');
                        break;
                    case 'orange':
                        alert ('you picked an orange');
                        break;
                        default:
                        alert ('you chose something we didn\'t have');
                    }

//Tables///////////////////////////////////////////////////////
                // for loop for the rows and another loop for the header
                // once you have created a row, you will need to append it to the table
                
                        
                        //create an object using a constructor function by INSTANTIATE the object
                            // new is the instantiate 

            
            














































/////////////////////////////////Khan academy///////////////////////////
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