let output = document.querySelector('#output');




//setInterval(myFunction, 1)
var c = document.getElementById("output");
var ctx = c.getContext("2d");

var id = setInterval("FirstTest()", 4000);//2000
var joj = 397;

var secTest = setInterval("SecondTest()", 3000);//3000
var thirdTest = setInterval("ThirdTest()", 3000);//3000
var m = setInterval("stopWatch()", 10); //time = 100, kogda srabativajet funkcija Timer1(), esli u m intervala budet 1 milisekunda to togda time budet 500 (???ograni4enije???)
var n = setInterval("targetCounter()", 10);
var j = setTimeout("ForthTest()", 100);
var Ninetht = setInterval("NinghthTest()", 2000);
var tw = setTimeout("WriteAbout1stTest()", 100);
var justTIMER = setInterval("JustTimer()", 100);

//var IntervalFuvcForDebug = setInterval("IntervFuncForDebug()", 500);

//var delay = setTimeout("delay250()", 1000);
var trinterv = ("trinterv()", 10)

var counter = 0;
var xSpawn = 0;
var ySpawn = 0;
var prevxSpawn = 0;
var prevySpawn = 0;
var time = 0;
var time2 = 0;
var timeSecTest = 0;
var timethirdTest = 0;
var mouseDownNumber = 0;
var Strike = false;
var targetCount = 0;
var targetCount2 = 0;
var targetCount3 = 0;
var firstCycle = 1;  //=0//lai saktu ar pirmo testu
var start = false;
var secondTest = false; 
var thirdTest = false; //false//
var forthTest = false;
var secondTestNotClickedRegDelay = 0;
var oldTime = 0;


var oneTimeStriked = false;
var oneTimeMakeRed = false; //otrajam testam
var oneTimePressSearch = false;

//function delay250() { console.log(counter-counter) }

var time4 = 0; //for forthTest
var time5 = 0; //for fifth test
var time6 = 0; //for sixth test
var time7 = 0; //for seventh test
var time8 = 0;
var timeCloseDropDownList = 0;
var cursorIsOutside = false;
var menuBarOneTime = true;
var menuBarLevel = 0;
var listCloseTimer = 0;
var registredForthTest = false;
var TotalTime;
var canvashyperlink = false;

var firstTest = true;///true


//firstTest = false;/////delete
//thirdTest = true;
var TestNumber = 0;//0

//var functionforDubug = setInterval("IntervFuncForDebug()", 250);
function JustTimer() {

    TotalTime++;

    /////DEBUG/////

    //console.log("time:", time);
/*
    console.log("DEBUG FLAGS:");
    console.log("oneTimeStrike ", oneTimeStrike)
    console.log("oneTimeMakeRed ", oneTimeMakeRed)
*/

}
var one = true;

document.getElementById("block2").style.display = "none";

function WriteAbout1stTest(){
    if (one == true){
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText("Pirmajā testā ar kursoru ir jānoklikšķina uz zaļajiem apļiem, jo", 50, 100);
        ctx.fillText("ātrāk, jo labāk.", 50, 150);
        ctx.fillText("Nospiediet start lai saktu pirmo testu. ", 50, 250);
        ctx.fillText("Turiet Ctrl un nomēriet ar peles riteni tā, lai sarkanā rāmī un sākuma poga būtu redzama.", 50, 200);
        ctx.fillText("Spiediet pogu show video lai uzzinātu vairāk.", 50, 300);

        document.addEventListener('DOMContentLoaded', function(){
            var v1 = document.querySelector('#v1');
            var canvas1 = document.querySelector('#output');

            v1.addEventListener('loadedmetadata', function()
            {
                canvas1.width = this.videoWidth;
                canvas1.height = this.videoHeight;
            });

            var draw = function() {
                canvas1.getContext('2d').drawImage(v1, 0, 0);
            }

            v1.addEventListener('play', function(){
                    if (v1.paused || v1.ended) return;
                    draw();
            });
        });

        one = false;
    }
}


function targetCounter() {
    time2++;

    if (start == true && secondTest == false && thirdTest == false && firstTest == true) 
    if (time2 > 197) {
        time2 = 0;
        targetCount++;
        }

    if (start == true && secondTest == true && thirdTest == false) 
        if (timeSecTest > 299) {
            timeSecTest = 0;
            targetCount++;
        }
    if (start == true && thirdTest == true) 
        if (timethirdTest > 297) {
            timethirdTest = 0;
            targetCount++;
        }
        
}
var MaxDropDownListLevel = 0;
function stopWatch() {



    if (start == true && secondTest == false && thirdTest == false && firstTest == true) {
    time++
    //bilo if(time == 200) iz-za etogo ne vsegda sla regestracija

    //if (id == setInterval("FirstTest()", 4000))
    if (targetCount > 0)
    if (firstCycle == 1)
    if (time>joj) {

        

        mouseDown[mouseDownNumber] = mouseDownNumber;
       //console.log("REREG: " + times[mouseDownNumber])
        times[mouseDownNumber] = "notClicked";
        
        console.log("miss, target count: ", targetCount)
        console.log("All click results ", times)

        mouseDownNumber++;
        time = 0;

        

        }

       
    firstCycle = 1;
    }

    

    if (start == true && secondTest == true && thirdTest == false) {
        time++
       
        
        if (counter > 1)
        //if (targetCount > 0)
            //if (firstCycle == 1)
                if (time > 294) {  //297<3000(((
                    /*
                    if (secondTestNotClickedRegDelay == 0) {
                        secondTestNotClickedRegDelay++;
                        time = time - 160;
                    }
                    */
                    mouseDown[mouseDownNumber] = mouseDownNumber;
                    //console.log("REREG: " + times[mouseDownNumber])
                    
                    times[mouseDownNumber] = "notClicked";
                    console.log("miss, target count: ", targetCount)
                    console.log("All click results ", times)

                    mouseDownNumber++;
                    time = 0;



                }
        firstCycle = 1;
        oneTimeMakeRed = false; 
    }

    var pressedOutside = false;
    
    
    if (start == true && secondTest == false && thirdTest == true) {
        time++
        
        if (time>294) {
    
            
    
            mouseDown[mouseDownNumber] = mouseDownNumber;

            times[mouseDownNumber] = "notClicked";
            
            console.log("miss, target count: ", targetCount)
            console.log("All click results ", times)
    
            mouseDownNumber++;
            time = 0;
    
            
    
            }
        firstCycle = 1;
        oneTimePressSearch = false;
        }
        if (start == true && TestNumber == 9) {
            time++
            
            if (time>197) {
        
                
        
                mouseDown[mouseDownNumber] = mouseDownNumber;
    
                times[mouseDownNumber] = "notClicked";
                
                console.log("miss, target count: ", targetCount)
                console.log("All click results ", times)
        
                mouseDownNumber++;
                time = 0;
        
                
        
                }
            firstCycle = 1;
            oneTimePressSearch = false;
            }
        //ForthTest
        if (start == true && firstTest == false && forthTest == true) {
            canvashyperlink = false;
            
            time4++ 
            if (cursorIsOutside == true){timeCloseDropDownList++;}

            if (timeCloseDropDownList > 55){
                listCloseTimer = 6;
                timeCloseDropDownList = 0;
                console.log("DropDownListClosed");
            } 

            //

                


            if (menuBarLevel == 2 && MaxDropDownListLevel == menuBarLevel)
            if(x < 46 && x > 0 && y < 875-36 && y > 855-36 || x < 110-8 && x > 60-15 && y > 775-36 && y < 875-36){listCloseTimer = 0; cursorIsOutside = false;}
            else{
                cursorIsOutside = true;
                if (listCloseTimer == 6){
                menuBarLevel = 1;
                ctx.beginPath();
                    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                    ctx.fillRect(51, 0, 1499, 900);
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                    ctx.fillRect(0, 101, 1600, 834);
                    makeAllWhite = false;
                    //listCloseTimer = 0;
                    pressedOutside = false;
            }
        
        }
//11111(bookmark(ctrl-F))
        if (menuBarLevel == 3 && MaxDropDownListLevel == menuBarLevel)
    if(x < 160-10 && x > 60-10 && y < 815-36 && y > 795-36 || x < 160-8 && x > 110-10 && y > 715-36 && y < 815-36){listCloseTimer = 0;  cursorIsOutside = false;}
    else{
        cursorIsOutside = true;
        //listCloseTimer++;
        if (listCloseTimer == 6){
        menuBarLevel = 2;
        
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(101, 0, 1399, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 161, 1500, 600);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
        }
    }
    //
    if (menuBarLevel == 4 && MaxDropDownListLevel == menuBarLevel)
    if(x < 210-10 && x > 110-10 && y < 735-36 && y > 715-36 || x < 210-8 && x > 160-10 && y > 635-36 && y < 735-36){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        cursorIsOutside = true;
        //listCloseTimer++;
        if (listCloseTimer == 6){
        menuBarLevel = 3;
        
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(151, 0, 1299, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 221, 1500, 600);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
        }
    }
    //
    if (menuBarLevel == 5 && MaxDropDownListLevel == menuBarLevel)
    if(x < 260-10 && x > 160-10 && y < 715-36 && y > 695-36 || x < 260-8 && x > 210-10 && y > 615-36 && y < 715-36){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        //listCloseTimer++;
        cursorIsOutside = true;
        if (listCloseTimer == 6){
        menuBarLevel = 4;
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(201, 0, 1299, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 301, 1500, 600);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
        }
    }

//}//4




            }

//FifthTest
//22222
if (start == true && TestNumber == 5) {
            
    time5++ 
    if (cursorIsOutside == true){timeCloseDropDownList++;}

    if (timeCloseDropDownList > 55){
        listCloseTimer = 6;
        timeCloseDropDownList = 0;
        console.log("DropDownListClosed");
    } 


//console.log("menuBarlvl " + menuBarLevel + "MaxLevel " + MaxDropDownListLevel);
    if (menuBarLevel == 2)
    if(x < 61-10 && x > 0 && y < 875-36 && y > 855-36 || x < 110-8 && x > 60-10 && y > 775-36 && y < 875-36){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        //listCloseTimer++;
        cursorIsOutside = true;
        if (listCloseTimer == 6){
        menuBarLevel = 1;
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(51, 0, 1499, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 101, 1600, 834);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
    }

}
//11111(bookmark(ctrl-F))
if (menuBarLevel == 3)
if(x < 160-10 && x > 60-10 && y < 815-36 && y > 795-36 || x < 160-8 && x > 110-10 && y > 715-36 && y < 815-36){listCloseTimer = 0;  cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;
if (listCloseTimer == 6){
menuBarLevel = 2;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(101, 0, 1399, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 161, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;
}
}
//
if (menuBarLevel == 4)
if(x < 210-10 && x > 110-10 && y < 735-36 && y > 715-36 || x < 210-8 && x > 160-10 && y > 635-36 && y < 735-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;
if (listCloseTimer == 6){
menuBarLevel = 3;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(151, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 221, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;
}
}
//
if (menuBarLevel == 5)
if(x < 260-10 && x > 160-10 && y < 715-36 && y > 695-36 || x < 260-8 && x > 210-10 && y > 615-36 && y < 715-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
//listCloseTimer++;
cursorIsOutside = true;
if (listCloseTimer == 6){
menuBarLevel = 4;
ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(201, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 301, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;
}
}

//}//4




    }


//SixthTest
//66666

if (start == true && TestNumber == 6) {
            
    time6++ 
    if (cursorIsOutside == true){timeCloseDropDownList++;}

    
        listCloseTimer = 6;
        timeCloseDropDownList = 0;
        console.log("DropDownListClosed");
    


//console.log("menuBarlvl " + menuBarLevel + "MaxLevel " + MaxDropDownListLevel);
    if (menuBarLevel == 2)
    if(x < 61-10 && x > 0 && y < 875-36 && y > 855-36 || x < 110-8 && x > 60-10 && y > 775-36 && y < 875-36){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        //listCloseTimer++;
        cursorIsOutside = true;
        
        menuBarLevel = 1;
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(51, 0, 1499, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 101, 1600, 834);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
    

}
//11111(bookmark(ctrl-F))
if (menuBarLevel == 3)
if(x < 160-10 && x > 60-10 && y < 815-36 && y > 795-36 || x < 160-8 && x > 110-10 && y > 715-36 && y < 815-36){listCloseTimer = 0;  cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 2;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(101, 0, 1399, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 161, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 4)
if(x < 210-10 && x > 110-10 && y < 735-36 && y > 715-36 || x < 210-8 && x > 160-10 && y > 635-36 && y < 735-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 3;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(151, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 221, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 5)
if(x < 260-10 && x > 160-10 && y < 715-36 && y > 695-36 || x < 260-8 && x > 210-10 && y > 615-36 && y < 715-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
//listCloseTimer++;
cursorIsOutside = true;

menuBarLevel = 4;
ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(201, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 301, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}

//}//6




    }

    //SeventhTest
//77777

if (start == true && TestNumber == 7) {
            
    time7++ 
    if (cursorIsOutside == true){timeCloseDropDownList++;}

    
        listCloseTimer = 6;
        timeCloseDropDownList = 0;
        console.log("DropDownListClosed");

//console.log("menuBarlvl " + menuBarLevel + "MaxLevel " + MaxDropDownListLevel);
    if (menuBarLevel == 2)
    if(x < 111-10 && x > 0 && y < 875-36 && y > 855-36 || x < 210-8 && x > 110-10 && y > 775-36 && y < 875-36){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        //listCloseTimer++;
        cursorIsOutside = true;
        
        menuBarLevel = 1;
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(101, 0, 1499, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 101, 1600, 834);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
    

}
//11111(bookmark(ctrl-F))
if (menuBarLevel == 3)
if(x < 210-10 && x > 110-10 && y < 815-36 && y > 795-36 || x < 310-8 && x > 208-10 && y > 715-36 && y < 815-36){listCloseTimer = 0;  cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 2;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(201, 0, 1399, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 161, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 4)
if(x < 410-10 && x > 210-10 && y < 735-36 && y > 715-36 || x < 410-8 && x > 310-10 && y > 635-36 && y < 735-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 3;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(301, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 221, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 5)
if(x < 510-10 && x > 310-10 && y < 715-36 && y > 695-36 || x < 510-8 && x > 410-10 && y > 615-36 && y < 715-36){listCloseTimer = 0; cursorIsOutside = false;}
else{
//listCloseTimer++;
cursorIsOutside = true;

menuBarLevel = 4;
ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(401, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 301, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}

//}//7




    }

    //8thTest
//88888

if (start == true && TestNumber == 8) {
            
    time8++ 
    if (cursorIsOutside == true){timeCloseDropDownList++;}

    
        listCloseTimer = 6;
        timeCloseDropDownList = 0;
        console.log("DropDownListClosed");

//console.log("menuBarlvl " + menuBarLevel + "MaxLevel " + MaxDropDownListLevel);
    if (menuBarLevel == 2)
    if(x < 111-10 && x > 0 && y < 908-38 && y > 894-36 || x < 210-8 && x > 110-10 && y > 854-38 && y < 908-34){listCloseTimer = 0; cursorIsOutside = false;}
    else{
        //listCloseTimer++;
        cursorIsOutside = true;
        
        menuBarLevel = 1;
        ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(101, 0, 1499, 900);
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 51, 1600, 834);
            makeAllWhite = false;
            //listCloseTimer = 0;
            pressedOutside = false;
    

}
//11111(bookmark(ctrl-F))
if (menuBarLevel == 3)
if(x < 210-10 && x > 110-10 && y < 878-38 && y > 864-36 || x < 310-8 && x > 208-10 && y > 824-36 && y < 878-38){listCloseTimer = 0;  cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 2;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(201, 0, 1399, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 81, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 4)
if(x < 410-10 && x > 210-10 && y < 838-38 && y > 824-36 || x < 410-8 && x > 310-10 && y > 784-36 && y < 838-38){listCloseTimer = 0; cursorIsOutside = false;}
else{
cursorIsOutside = true;
//listCloseTimer++;

menuBarLevel = 3;

ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(301, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 111, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}
//
if (menuBarLevel == 5)
if(x < 510-10 && x > 310-10 && y < 828-38 && y > 814-36 || x < 510-8 && x > 410-10 && y > 774-36 && y < 828-38){listCloseTimer = 0; cursorIsOutside = false;}
else{
//listCloseTimer++;
cursorIsOutside = true;

menuBarLevel = 4;
ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(401, 0, 1299, 900);
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 151, 1500, 600);
    makeAllWhite = false;
    //listCloseTimer = 0;
    pressedOutside = false;

}

//}//8

//88888
if (time8 == 1500 && TestNumber == 8){
    //console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
    /*
    mouseDownNumber++;
    times[mouseDownNumber] = "EighthTest: " + time8;
    console.log("All click results ", times)
    */
   console.log("EighthTest : " + time8);
    registredForthTest = true;
    registredForthTest = true;
            firstTest = false;
            TestNumber = 30;

            start = false;
            makeAllWhite = true;

    start = false;
    makeAllWhite = true;
    TestNumber = 30;
    v = 0;

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, 1600, 900);


    ctx.font = "50px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(" ", 50, 50);
    ctx.fillText("Paldies par jūsu uzmanību un sadarbību, lūdzu", 50, 150);
    ctx.fillText("uzspīdiet uz pogu Save, un atsūtiet", 50, 250);
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.fillText("uz pastu brownsky98@gmail.com", 50, 350);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    canvashyperlink = true;

    document.getElementById("block2").style.display = "block";

    canvashyperlink1 = true;

    console.log("EightTest: " + time8);
    registredForthTest = true;

    

    
} 


    }

   
}


document.getElementById("Start").addEventListener("click", function () {
    start = true;
    document.getElementById("block1").style.display = "none";

    //if (secondTest == false)
    //console.clear();
});

var SaveSpawnX = [];
var SaveSpawnY = [];
var SaveCursorX = [];
var SaveCursorY = [];
var v = 0;
var calibrate = 0;

var makeAllWhite = true;
function FirstTest() {

    if (start == true && secondTest == false && thirdTest == false && firstTest == true) {

if (calibrate < 4){

if (calibrate == 0){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, 1600, 900);

ctx.beginPath();
ctx.fillStyle = 'rgba(0, 255, 0, 1)';
ctx.arc(15, 15, 15, 0, 2 * Math.PI);
ctx.fill();
}
if (calibrate == 1){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, 1600, 900);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    ctx.arc(1585, 885, 15, 0, 2 * Math.PI);
    ctx.fill();
    }
    if (calibrate == 2){
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 1600, 900);

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 255, 0, 1)';
        ctx.arc(15, 15, 15, 0, 2 * Math.PI);
        ctx.fill();
        }
        if (calibrate == 3){
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);

            ctx.beginPath();
            ctx.fillStyle = 'rgba(0, 255, 0, 1)';
            ctx.arc(1585, 885, 15, 0, 2 * Math.PI);
            ctx.fill();

            clearInterval(id);
            id = setInterval("FirstTest()", 2000);
            joj = 197;
            }
time = 0;
calibrate++;
}
else {
    calibrate++;



        if (makeAllWhite == true){
            
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
        }

        oneTimeStriked = false;

        counter++;

    xSpawn = 50 + Math.floor(Math.random() * 1500);
    ySpawn = 50  + Math.floor(Math.random() * 800);
    SaveSpawnX[v] = xSpawn;
    SaveSpawnY[v] = ySpawn;
    SaveCursorX[v] = x;
    SaveCursorY[v] = y;


    //setTimeout("delay250()", 1000)

    //setTimeout(() => { console.log("World!"); }, 1000);


    v++;
    if (counter > 1) { 
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.arc(prevxSpawn, prevySpawn, 16, 0, 2 * Math.PI);
    ctx.fill();
    oneTimeStrike = false; //lai nebutu iespejas spiest uz merķa vietu un dabut vairak trapijumus
    }

    

    prevxSpawn = xSpawn;
    prevySpawn = ySpawn;

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    ctx.arc(xSpawn, ySpawn, 15, 0, 2 * Math.PI);
    ctx.fill();

    
    
    
    
        time = 0;
        if (counter == 11) {
            start = false;
            forthTest = false;
            //secondTest = true;
            TestNumber = 9;

            SaveSpawnX[v] = "firstTestEnded";
            SaveSpawnY[v] = "firstTestEnded";
            SaveCursorX[v] = "firstTestEnded";
            SaveCursorY[v] = "firstTestEnded";
            v++;


            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.arc(prevxSpawn, prevySpawn, 16, 0, 2 * Math.PI);
            ctx.fill();

            ctx.font = "40px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nakamis tests būs tāds, pats", 50, 100);
            ctx.fillText("tikai apļam būs dažādi izmērī. ", 50, 200);
            ctx.fillText("Atkal spidiet start lai saktu nākamu testu. ", 50, 300);
            ctx.fillText("Par katru uzdevumu ir video,", 50, 400);
            ctx.fillText("nospiedziet pogu show video.", 50, 500);


           
            v = 0;
           


            counter = 0;
            time = 0;

            times[mouseDownNumber] = "first test ended          \n";
            mouseDownNumber++;
            firstTest= false;

            makeAllWhite = true;

        }
    }
}
}

var prevxSpawn2 = []
var prevySpawn2 = []
var xSpawnOfPlus = 0;
var ySpawnOfPlus = 0;



function SecondTest() {

    if (secondTest == true && start == true) {

        if (makeAllWhite == true){
            
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
        }

        counter++;

        oneTimeStriked = false;


        for (l = 0; l < 8; l++) {
            if (counter > 1) {
                ctx.beginPath();
                ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                ctx.arc(prevxSpawn2[l], prevySpawn2[l], 32, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        
        for (l = 0; l < 8; l++) {
            xSpawn = 50 + Math.floor(Math.random() * 1500);
            ySpawn = 50 + Math.floor(Math.random() * 800);

            if (xSpawn < 2) xSpawn = xSpawn+5;
            if (xSpawn > 286) xSpawn = xSpawn-5;

            if (ySpawn < 2) ySpawn = ySpawn+5;
            if (ySpawn > 136) ySpawn = ySpawn-5;


            prevxSpawn2[l] = xSpawn;
            prevySpawn2[l] = ySpawn;
            

            ctx.beginPath();
            ctx.fillStyle = 'rgba(0, 0, 255, 1)';
            ctx.arc(xSpawn, ySpawn, 30, 0, 2 * Math.PI);
            ctx.fill();

            
            ctx.beginPath();
            ctx.font = "60px Arial";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';

            if (l == 7) {
                ctx.fillText("+", xSpawn - 18, ySpawn + 21);
                
                xSpawnOfPlus = xSpawn;
                ySpawnOfPlus = ySpawn;

            }
            if (l == 1)
                ctx.fillText("-", xSpawn - 10, ySpawn + 18);
            if (l == 2)
                ctx.fillText("*", xSpawn - 13, ySpawn + 25);
            if (l == 3)
                ctx.fillText("=", xSpawn - 18, ySpawn + 20);
            if (l == 4)
                ctx.fillText(" ", xSpawn - 15, ySpawn + 15);
            if (l == 5)
                ctx.fillText("8", xSpawn - 16.5, ySpawn + 19);
            if (l == 6)
                ctx.fillText("w", xSpawn - 21.5, ySpawn + 16);
            if (l == 0)
                ctx.fillText(",", xSpawn-11, ySpawn + 8);
        }
        
        time = 0;

        l = 0; 
//if (counter < 8)
//counter = 9;/////////////////////////////////////////////////////

        oneTimeStriked = false; //lai nebutu iespejas spiest uz merķa vietu un dabut vairak trapijumus
        
        if (counter == 11) {
            start = false;
            secondTest = false;
            thirdTest = true;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "55px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākamais tests izvadās Jums web lapaspusēs.", 10, 350);
            ctx.fillText("Jums jānoklikšķina uz meklēšanas lauka (ievade meklēšanai). ", 10, 450);
            //ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 10, 550);
            //var img = new Image();
            var eximg = document.getElementById("img1example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg, 10, 600, 1470, 210);

            counter = 0;
            time = 0;
            makeAllWhite = true;

            
            
            times[mouseDownNumber] = "second test ended      \n";
            mouseDownNumber++;
            

        }

    }
}

var test9thX = [50, 150, 1400, 200, 300, 70, 1200, 1000, 450, 950, 100, 200];
var test9thY = [50, 870, 55, 555, 680, 900, 320, 400, 250, 150, 100, 700];
var test9thSize = [60, 20, 100, 10 , 30, 8, 80, 20, 200, 20, 300, 5]

//99999
function NinghthTest() {

    if (start == true && TestNumber == 9) {


        if (makeAllWhite == true){
        
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
            console.log(" makeallwhite " + makeAllWhite);


        }

        oneTimeStriked = false;

        counter++;

    xSpawn = test9thX[v];
    ySpawn = test9thY[v];
    SaveSpawnX[v] = xSpawn;
    SaveSpawnY[v] = ySpawn;
    SaveCursorX[v] = x;
    SaveCursorY[v] = y;
    console.log("9thTEST");


    //setTimeout("delay250()", 1000)

    //setTimeout(() => { console.log("World!"); }, 1000);


    v++;
    if (counter > 1) { 
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.arc(prevxSpawn, prevySpawn, test9thSize[v - 1]+2, 0, 2 * Math.PI);
    ctx.fill();
    oneTimeStrike = false; //lai nebutu iespejas spiest uz merķa vietu un dabut vairak trapijumus
    }

    

    prevxSpawn = xSpawn;
    prevySpawn = ySpawn;

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    ctx.arc(xSpawn, ySpawn, test9thSize[v], 0, 2 * Math.PI);
    ctx.fill();
/*

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.arc(xSpawn-test9thSize[v], ySpawn, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.arc(xSpawn, ySpawn+test9thSize[v], 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.arc(xSpawn+test9thSize[v], ySpawn, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.arc(xSpawn, ySpawn-test9thSize[v], 2, 0, 2 * Math.PI);
    ctx.fill();
*/
    
    
    
    
        time = 0;
        if (counter == 11) {
            start = false;
            TestNumber = 10;
            secondTest = true;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.arc(prevxSpawn, prevySpawn, test9thSize[v - 1], 0, 2 * Math.PI);
            ctx.arc(prevxSpawn, prevySpawn, test9thSize[v], 0, 2 * Math.PI);
            ctx.fill();

            

            ctx.font = "55px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama tests izvadās jums astoņus aplīšus.", 10, 350);
            ctx.fillText("Jums jānospiež uz aplītī ar ‘+’. ", 10, 450);
            //ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 10, 550);



            counter = 0;
            time = 0;

            times[mouseDownNumber] = "last test ended";
            mouseDownNumber++;
            

            makeAllWhite = true;

        }

    }
}

var TheHundreth = Math.floor(Math.random() * 100);
var rdtestVer = 1;
var drtestVer = 1;
    
    if (TheHundreth > 50){
        rdtestVer = 2;
    }

    if (TheHundreth > 32)
        drtestVer = 2;
    
    if (TheHundreth > 62)
        drtestVer = 3;

function ThirdTest() {

    if (start == true && secondTest == false && thirdTest == true) {

if (makeAllWhite == true){
        
        ctx.beginPath();
        //ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 300, 150);
        makeAllWhite = false;
    }


    //3232

        //counter = 14;
        
    counter++;
    
        

        oneTimePressSearch = false;
        oneTimeStriked = false;

    if (counter == 1) { 
    //SPAWN
    if (rdtestVer == 1){
    var img2 = document.getElementById("img2");
            //1188
            ctx.drawImage(img2, 0, 0, 1600, 900);
    }
    else{
        var img12 = document.getElementById("img12");
            //1188
            ctx.drawImage(img12, 0, 0, 1600, 900);
    }
    }
    if (counter == 2) { 
        if (rdtestVer == 1){
        var img2 = document.getElementById("img3");
        ctx.drawImage(img3, 0, 0, 1600, 900);
    }
    else{
        var img2 = document.getElementById("img17");
        ctx.drawImage(img17, 0, 0, 1600, 900);
    }
        }
    if (counter == 3) { 
        if (drtestVer == 1){
            var img2 = document.getElementById("img4");
            ctx.drawImage(img4, 0, 0, 1600, 900);
        }
        if (drtestVer == 2){
            var img2 = document.getElementById("img7");
            ctx.drawImage(img7, 0, 0, 1600, 900);
        }

        if (drtestVer == 3){
            var img2 = document.getElementById("img14");
            ctx.drawImage(img14, 0, 0, 1600, 900);
        }
        }
    if (counter == 4) { 
        if (rdtestVer == 1){
        var img2 = document.getElementById("img5");
        ctx.drawImage(img5, 0, 0, 1600, 900);
    }
    else{
        var img2 = document.getElementById("img19");
        ctx.drawImage(img19, 0, 0, 1600, 900);
    }
        }
    if (counter == 5) { 
        //SPAWN
        var img2 = document.getElementById("img6");
        //1188
        ctx.drawImage(img6, 0, 0, 1600, 900);
        }
    if (counter == 6) { 
        if (rdtestVer == 1){
        var img2 = document.getElementById("img8");
        ctx.drawImage(img8, 0, 0, 1600, 900);
    }
else{
        var img2 = document.getElementById("img25");
        ctx.drawImage(img25, 0, 0, 1600, 900);
    }
        }
    if (counter == 7) { 
        var img2 = document.getElementById("img9");
        ctx.drawImage(img9, 0, 0, 1600, 900);
        }
    if (counter == 8) { 
        if(rdtestVer == 1){ 
            var img2 = document.getElementById("img10");
            ctx.drawImage(img10, 0, 0, 1600, 900);
        }
        else{
            var img2 = document.getElementById("img24");
            ctx.drawImage(img24, 0, 0, 1600, 900);
        }
    }
    if (counter == 9) { 
        if (rdtestVer == 1){
            var img2 = document.getElementById("img11");
            ctx.drawImage(img11, 0, 0, 1600, 900);
        }
        else{
            var img2 = document.getElementById("img26");
            ctx.drawImage(img26, 0, 0, 1600, 900);
        }
    }
    if (counter == 10) { 
        var img2 = document.getElementById("img13");
        ctx.drawImage(img13, 0, 0, 1600, 900);
        }
    if (counter == 11) { 
        if (rdtestVer == 1){
            var img2 = document.getElementById("img21");
            ctx.drawImage(img21, 0, 0, 1600, 900);
        }
        else{
            var img2 = document.getElementById("img23");
            ctx.drawImage(img23, 0, 0, 1600, 900);
        }
        }
    if (counter == 12) { 
            var img2 = document.getElementById("img15"); //steam(2009)
            ctx.drawImage(img15, 0, 0, 1600, 900);
        }
    if (counter == 13) { 
            var img2 = document.getElementById("img16"); //amazon(2001)
            ctx.drawImage(img16, 0, 0, 1600, 900);
        }
    if (counter == 14) { 
            var img2 = document.getElementById("img22"); //amazon(2001)
            ctx.drawImage(img22, 0, 0, 1600, 900);
        }

    
//webpagess


        

        

   //Dzest (new page screenshot)

    
    
    
    
        time = 0;
        if (counter == 15) {

            start = false;
            secondTest = false;
            thirdTest = false;
            forthTest = true;
            TestNumber = 4;
            
            document.getElementById("block2").style.display = "block";

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            
            ctx.font = "20px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Paldies par Jūsu uzmanību un sadarbību, lūdzu", 50, 200);
            ctx.fillText("uzspīdiet uz pogu Save, un atsūtiet", 50, 250);
            ctx.fillStyle = 'rgba(0, 0, 255, 1)';
            ctx.fillText("uz pastu brownsky98@gmail.com", 50, 300);
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Vai nospiedziet pogu start lai izdarītu", 50, 350);
            ctx.fillText("papild testus.", 50, 400);
            ctx.fillText("Nākama testā jums jāsaliek vārdu TIMER,", 50, 450);
            ctx.fillText("jo ātrāk, jo labāk.", 50, 500);
           // ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 5, 350);


           

           canvashyperlink = true;



            counter = 0;
            time = 0;
            makeAllWhite = true;
            mouseDownNumber++;
            //TestNumber = 5;


            times[mouseDownNumber] = "third test ended.     \n";
            mouseDownNumber++;


        }
    }
}

function MAKEALLWHITE() {
    ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
}


function ForthTest() {
    if (start == true && forthTest == true && firstTest == false) {

        if (makeAllWhite == true){
        
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
        }
        

        ctx.font = "14px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText("WORD", 8, 15);

        ctx.beginPath();
        ctx.rect(0, 0, 50, 20);
        ctx.stroke();
        
        canvashyperlink = false;

        



    }
}


    var coordsX = [];
    var coordsY = [];
    var mouseDown = [];
    var times = [];
    var Strikes = [];
    var numb = 0;
    var zero = 0;
    





function BackToBegining (){
    MAKEALLWHITE();
        ctx.beginPath();
        ctx.font = "14px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText("Word", 8, 15);

        ctx.beginPath();
        ctx.rect(0, 0, 50, 20);
        ctx.stroke();
        menuBarLevel = 0;
}


//ctx.moveTo(0, 0);
var x;
var y;


    function getMousePos(c, evt) {
        var rect = c.getBoundingClientRect();
        return {
          XX: evt.clientX - rect.left,
          YY: evt.clientY - rect.top
        };
      }
  

c.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(c, evt);
    //x = e.pageX;
    x = mousePos.XX;
    var body = document.body;
    var html = document.documentElement;
    //page height
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    //y = height - e.pageY;
    y = 900 - mousePos.YY;
    

    if (canvashyperlink == true){
        if (x > 50 && x < 360 && y > 590 && y < 620 && canvashyperlink1 == false){
            document.getElementById("output").style.cursor = "pointer";
        }
      //  else{document.getElementById("output").style.cursor = "auto";}
        if (x > 50 && x < 806 && y > 530 && y < 580 && canvashyperlink1 == true){
            document.getElementById("output").style.cursor = "pointer";
        }
       // else{document.getElementById("output").style.cursor = "auto";}
    }
    else{document.getElementById("output").style.cursor = "auto";}

 

    //var coor = "X: " + x + ", Y: " + y;
    //drawDot(pos, radius, color)

 


    /*if (x > 7 && y > 49 && x < 1609 && y < 951) {
    output.innerText = `X: ${x - 8} - Y: ${y - 50}`;*/
        
        coordsX[numb] = x;
        coordsY[numb] = y;
        //console.log("coords and numb: ", coordsX[numb], " ",  coordsY[numb], " ", numb)
        //console.log("x,y,numb: ", x, y, numb)
        numb++;
        /*
        ctx.beginPath();
        ctx.arc(50+numb, 100-numb, 1, 0, 2 * Math.PI);
        ctx.fill();
        
    }*/

    
    if (start == true && forthTest == true && firstTest == false && menuBarOneTime == true){

        if (makeAllWhite == true){
        
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            makeAllWhite = false;
            console.log(" makeallwhite " + makeAllWhite);


        }


    ctx.font = "14px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText("word", 8, 15);

        ctx.beginPath();
        ctx.rect(0, 0, 50, 20);
        ctx.stroke();

        menuBarOneTime = false;  
    }
    

    //ForthTest
    if (start == true && forthTest == true && firstTest == false){
        
        
        
        
///////////////
        //console.log(x+ "  " + y); //check koords of cursor
///////////////
//console.log("44444test");


/*if (time4%4==0){
    console.log("time4 " + time4)
}*/

    

    
    /*
    if (menuBarLevel == 1)
    if (y > 835 && y < 945 && x > 8 && x < 60 && menuBarLevel == 1){
        //console.log("BAM");
        
    }
    else{
        BackToBegining();
        menuBarLevel = 0;
    }*/
    

    if (menuBarLevel == 1)
    if(x < 61-8 && x > 0 && y < 875-36 && y > 855-36){
        SecondBarMenu();
        menuBarLevel = 2;

        MaxDropDownListLevel = menuBarLevel;
        
    }


    

    

    if (menuBarLevel == 2)
    if(x < 110-8 && x > 60-10 && y > 795-36 && y < 815-36){
        ThirdBarMenu();
        menuBarLevel = 3;
        MaxDropDownListLevel = menuBarLevel;
        
    }

    

    if (menuBarLevel == 3)
    if(x < 160-8 && x > 110-10 && y > 715-36 && y < 735-36){
        ForthBarMenu();
        menuBarLevel = 4;
        MaxDropDownListLevel = menuBarLevel;
        
    }

    

    if (menuBarLevel == 4)
    if(x < 210-8 && x > 160-10 && y > 695-36 && y < 715-36){
        FifthBarMenu();
        menuBarLevel = 5;
        MaxDropDownListLevel = menuBarLevel;
    }

    
    
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 260-8 && x > 210-10 && y < 715-36 && y > 695-36){
            console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " ForthTest: " + time4;
            console.log("All click results ", times)
            */
           console.log("ForthTest: " + time4);


            
            registredForthTest = true;

            forthTest = false;
            secondTest = false;
            TestNumber = 5;
            start = false;
            makeAllWhite = true;
            menuBarOneTime = true;
            menuBarLevel = 0;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            

           
            ctx.font = "35px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Būs vēl četri tādā veida uzdevumi", 50, 50);
            ctx.fillText("Nākamā uzdevumā Jums jāsaliek vārdu TIMER,", 50, 100);
            ctx.fillText("jo ātrāk, jo labāk.", 50, 150);
            //ctx.fillText("Nospiediet start lai sāktu nākamo testu. ", 50, 330);


            
        }
    }

}


//22222(bookmark)
if (TestNumber == 5 && menuBarOneTime == true && start == true){

    if (makeAllWhite == true){
    
        ctx.beginPath();
        //ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 1600, 900);
        makeAllWhite = false;
        console.log(" makeallwhite " + makeAllWhite);
        menuBarLevel = 0;


    }


ctx.font = "14px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText("word", 8, 15);

    ctx.beginPath();
    ctx.rect(0, 0, 50, 20);
    ctx.stroke();

    menuBarOneTime = false;  
}

if (TestNumber == 5 && start == true){

///////////////
    //console.log(x+ "  " + y); //check koords of cursor
///////////////
console.log("5555test");


    if (menuBarLevel == 1)
    if(x < 61-8 && x > 0 && y < 875-36 && y > 855-36){
        SecondBarMenu();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 110-8 && x > 60-10 && y > 795-36 && y < 815-36){
        ThirdBarMenu();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 160-8 && x > 110-10 && y > 715-36 && y < 735-36){
        ForthBarMenu();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 210-8 && x > 160-10 && y > 695-36 && y < 715-36){
        FifthBarMenu();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == true){
            
        
        if (x < 260-8 && x > 210-10 && y < 715-36 && y > 695-36){
            console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " FifthTest: " + time5;
            console.log("All click results ", times)
            */
           console.log("FifthTest: " + time5);
            registredForthTest = true;

            
            start = false;
            makeAllWhite = true;
            TestNumber = 6;
            menuBarOneTime = true;
            menuBarLevel = 0;


            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "35px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākamā uzdevumā Jums jāsaliek vārdu TIMER,", 50, 50);
            ctx.fillText("jo ātrāk, jo labāk.", 50, 150);
            //ctx.fillText("Bet tagad vēl ja kursors būs ārpus burtai, kura atver", 50, 190);
            //ctx.fillText("drop-down sarakstu, un ārpus drop-down saraksta, šitais drop-down saraksts", 50, 260);
            //ctx.fillText("aizvērsies uzriez (iepriekšējos testos, tikai pēc 0.8 sekundes)", 50, 330);
            //ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 50, 400);


           
        }
    }
}

if (TestNumber == 6 && menuBarOneTime == true && start == true){
    registredForthTest = false;
    if (makeAllWhite == true){
    
        ctx.beginPath();
        //ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 1600, 900);
        makeAllWhite = false;
        console.log(" makeallwhite " + makeAllWhite);


    }


ctx.font = "14px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText("word", 8, 15);

    ctx.beginPath();
    ctx.rect(0, 0, 50, 20);
    ctx.stroke();
console.log("DDDDDDDDDDDDDDDDDDDDS");
    menuBarOneTime = false;  
}

if (TestNumber == 6 && start == true){

///////////////
    //console.log(x+ "  " + y); //check koords of cursor
///////////////



    if (menuBarLevel == 1)
    if(x < 61-8 && x > 0 && y < 875-36 && y > 855-36){
        SecondBarMenu();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 110-8 && x > 60-10 && y > 795-36 && y < 815-36){
        ThirdBarMenu();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 160-8 && x > 110-10 && y > 715-36 && y < 735-36){
        ForthBarMenu();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 210-8 && x > 160-10 && y > 695-36 && y < 715-36){
        FifthBarMenu();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 260-8 && x > 210-10 && y < 715-36 && y > 695-36){
            //console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " SixthTest: " + time6;
            console.log("All click results ", times)
            */
            console.log("SixthTest: " + time6);
            registredForthTest = true;

            start = false;
            makeAllWhite = true;
            TestNumber = 7;
            menuBarOneTime = true;
            menuBarLevel = 0;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "50px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama jums jāsaliek vārdu TIMER,", 50, 50);
            ctx.fillText("jo ātrāk, jo labāk.", 50, 150);


           
        }
    }
}

if (TestNumber == 7 && menuBarOneTime == true && start == true){
    registredForthTest = false;
    if (makeAllWhite == true){
    
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 1600, 900);
        makeAllWhite = false;
        console.log(" makeallwhite " + makeAllWhite);


    }


    ctx.font = "14px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText("word", 33, 15);

    ctx.beginPath();
    ctx.rect(0, 0, 100, 20);
    ctx.stroke();
    console.log("DDDDDDDDDDDDDDDDDDDDS");
    menuBarOneTime = false;  
}

if (TestNumber == 7 && start == true){

///////////////
    //console.log(x+ "  " + y); //check koords of cursor
///////////////



    if (menuBarLevel == 1)
    if(x < 111-8 && x > 0 && y < 875-36 && y > 855-36){
        SecondBarMenu7thTest();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 210-8 && x > 110-10 && y > 795-36 && y < 815-36){
        ThirdBarMenu7thTest();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 310-8 && x > 210-10 && y > 715-36 && y < 735-36){
        ForthBarMenu7thTest();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 410-8 && x > 310-10 && y > 695-36 && y < 715-36){
        FifthBarMenu7thTest();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 510-8 && x > 410-10 && y < 715-36 && y > 695-36){
            //console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " SeventhTest: " + time7;
            console.log("All click results ", times)
            */
           console.log("SeventTest: " + time7);
            registredForthTest = false;

            start = false;
            makeAllWhite = true;
            TestNumber = 8;
            menuBarOneTime = true;
            menuBarLevel = 0;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "50px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākamā Jums jāsaliek vārdu TIMER,", 50, 50);
            ctx.fillText("jo ātrāk, jo labāk.", 50, 120);


           
        }
    }
}
//8thTest

if (TestNumber == 8 && menuBarOneTime == true && start == true){
    registredForthTest = false;
    if (makeAllWhite == true){
        menuBarLevel = 0;
        ctx.beginPath();
        //ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 1600, 900);
        makeAllWhite = false;
        console.log(" makeallwhite " + makeAllWhite);


    }


ctx.font = "10px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText("word", 33, 9);

    ctx.beginPath();
    ctx.rect(0, 0, 100, 10);
    ctx.stroke();
console.log("DDDDDDDDDDDDDDDDDDDDS");
    menuBarOneTime = false;  
}

if (TestNumber == 8 && start == true){

///////////////
    //console.log(x+ "  " + y); //check koords of cursor
///////////////



    if (menuBarLevel == 1)
    if(x < 111-8 && x > 0 && y < 908-38 && y > 895-36){
        SecondBarMenu8thTest();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 210-8 && x > 110-10 && y > 865-36 && y < 878-38){
        ThirdBarMenu8thTest();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 310-8 && x > 210-10 && y > 825-36 && y < 838-38){
        ForthBarMenu8thTest();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 410-8 && x > 310-10 && y > 815-36 && y < 828-38){
        FifthBarMenu8thTest();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 510-8 && x > 410-10 && y < 826-36 && y > 815-36){
            console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " EighthTest: " + time8;
            console.log("All click results ", times)
            */
           //88888
           console.log("EightTest: " + time8);
            registredForthTest = true;
            firstTest = false;
            TestNumber = 0;

            start = false;
            makeAllWhite = true;

            document.getElementById("block2").style.display = "block";
            canvashyperlink = true;
            canvashyperlink1 = true;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            v = 0;


            ctx.font = "50px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText(" ", 50, 50);
            ctx.fillText("Paldies par Jūsu uzmanību un sadarbību, lūdzu", 50, 150);
            ctx.fillText("nospiedziet uz pogu Save, un atsūtiet", 50, 250);
            ctx.fillStyle = 'rgba(0, 0, 255, 1)';
            ctx.fillText("uz pastu brownsky98@gmail.com", 50, 350);
            canvashyperlink1 = true;
            

            
        }
    }
}



});

var canvashyperlink1 = false;

var count = 0;
var calib = 0;
var calib1 = 0;
var calib2 = 0;


document.addEventListener('mousedown', (e) => {
    //callibrate
    console.log("MousePos: " + x + ", " +  y);
    Strikes[mouseDownNumber] = Strike;
    /*
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.arc(x, 900 - y, 3, 0, 2 * Math.PI);
    ctx.fill();
    */

//ForthTest
    if (start == true && forthTest == true && firstTest == false){
    if(menuBarLevel == 0)
    if(coordsX[numb - 1] < 60 && coordsX[numb - 1] > 0 && coordsY[numb - 1] < 900 && coordsY[numb - 1] > 880){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}
//FifthTest

//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 5){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 60 && x > 0 && y < 900 && y > 880){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}

//SixthTest
//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 6){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 60 && x > 0 && y < 900 && y > 880){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}

//SeventhhTest
//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 7){
    console.log("dfgnhnodfniohnjiodfsjxiohjdfjghiopdjfiohjopdfjhojdfijhio[jsfijdopsjhiopjdfopji[sjdfjh");
    if(menuBarLevel == 0)
    if(x < 110 && x > 0 && y < 900 && y > 880){
        
        FirstBarMenu7thTest();
        menuBarLevel = 1;
    }
}

//8thTest
//console.log("star " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 8){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 110 && x > 0 && y < 900 && y > 880){
        
        FirstBarMenu8thTest();
        menuBarLevel = 1;
    }
}


//11111\
/*
if(firstTest == true || secondTest == true || thirdTest == true || TestNumber == 9)
    if(x < 61 && x > 0 && y < 875 && y > 855 || x < 110 && x > 60 && y > 775 && y < 875 ||
        x < 160 && x > 60 && y < 815 && y > 795 || x < 160 && x > 110 && y > 715 && y < 815 ||
        x < 210 && x > 110 && y < 735 && y > 715 || x < 210 && x > 160 && y > 635 && y < 735 ||
        x < 260 && x > 160 && y < 715 && y > 695 || x < 260 && x > 210 && y > 615 && y < 715 ||
        x < 60  && x > 6 && y < 940 && y > 835 || TestNumber == 8 || TestNumber == 7){} //make all white (close drop-down lists)
                else{
                        console.log("DropDownListClosed");
                    cursorIsOutside = true;
                    
                    menuBarLevel = 0;
                    ctx.beginPath();
                        //ctx.strokeStyle = "white";
                        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                        ctx.fillRect(51, 0, 1499, 900);
                        
                        ctx.beginPath();
                        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                        ctx.fillRect(0, 21, 1600, 834);
                        makeAllWhite = false;
                        //listCloseTimer = 0;
                        pressedOutside = false;
                
                    
                }*/
                




    //FirstTest
    if (start == true && secondTest == false && thirdTest == false && firstTest == true) {

        if (calibrate < 5){

            if (x < 30 && x > 0 && y > 900 - 30 && y < 900 - 0 && calibrate == 1){
            calib++;
            calib1++;
            time = 0;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("STRIKE CALIB");

            }
            if (x < 1600 && x > 1570 && y > 900 - 900 && y < 900 - 870 && calibrate == 2){
                calib++;
                calib2++;
                time = 0;
                ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("STRIKE CALIB");

                }
                if (x < 30 && x > 0 && y > 900 - 30 && y < 900 - 0 && calibrate == 3){
                    calib++;
                    calib1++;
                    time = 0;
                    ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("STRIKE CALIB");

                    }
                    if (x < 1600 && x > 1570 && y > 900 - 900 && y < 900 - 870 && calibrate == 4){
                        time = 0;
                        calib++;
                        calib2;
                        ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("STRIKE CALIB");
                        }
                        
            }
            else{


    mouseDown[mouseDownNumber] = mouseDownNumber;
    times[mouseDownNumber] = time;

    console.log("Spawn: " + xSpawn + ", " + (900 - ySpawn) + "; mousCoords: " + x + ", " + y);
    
    


    // trapijuma regestrešana
    if (x < xSpawn + 15 && x > xSpawn - 15 && y < 900 - ySpawn + 15 && y > 900 - ySpawn - 15 && oneTimeStriked == false) {
        console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
        console.log("All click results ", times)
        Strike = true;
        oneTimeStriked = true;
    }
    else {
        if (oneTimeStriked == false){
            time = "missclick " + time;
            times[mouseDownNumber] = time;
            console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Not striked, target count: ", targetCount)
            Strike = false;
            console.log("All click results ", times)
            oneTimeStriked = true;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        }
 
    }

    time = 0;


    

    // merķa dzešana deļ trapijuma
    if (x < xSpawn + 15 && x > xSpawn - 15 && y < 900 - ySpawn + 15 && y > 900 - ySpawn - 15) {

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.arc(xSpawn, ySpawn, 16, 0, 2 * Math.PI);
        ctx.fill();
   
    }

    
    
        mouseDownNumber++;
    }
    }


    //end hyperlink inside canvas
    if (canvashyperlink == true){
        if (x > 50 && x < 360 && y > 590 && y < 620){
            window.open('mailto:brownsky98@gmail.com');
        }
        if (x > 50 && x < 806 && y > 530 && y < 580 && canvashyperlink1 == true){
            window.open('mailto:brownsky98@gmail.com');
        }
    }

    //NineghthTest

    if (start == true && TestNumber == 9) {
        

    
        // trapijuma regestrešana
        if (x < xSpawn + test9thSize[v] && x > xSpawn - test9thSize[v] && y < 900 - ySpawn + test9thSize[v] && y > 900 - ySpawn - test9thSize[v] && oneTimeStriked == false) {
            
            Strike = true;
            oneTimeStriked = true;
            mouseDown[mouseDownNumber] = mouseDownNumber;
        times[mouseDownNumber] = time;
        
        Strikes[mouseDownNumber] = Strike;
        mouseDownNumber++;
        time = 0;
        console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
            console.log("All click results ", times)
        }
    
        
    
        
        //console.log("x: " + x + " xSpawn + test9size: " + (xSpawn + test9thSize[v]) + ", " + (xSpawn - test9thSize[v]));
        //console.log("y: " + y + " 900 - ySpawn + test9size: " + (900 - ySpawn + test9thSize[v]) + ", " + (900 - ySpawn - test9thSize[v]));
    

/*
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.arc(x, 900-y, 3, 0, 2 * Math.PI);
    ctx.fill();
*/
    
        
    
        // merķa dzešana deļ trapijuma
        if (x < xSpawn + test9thSize[v] && x > xSpawn - test9thSize[v] && y < 900 - ySpawn + test9thSize[v] && y > 900 - ySpawn - test9thSize[v]) {
    
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("WRKEDDDDDDDDDDDDDDD");
            
       
        }
        
            
        }


    //SecondTest
    if (start == true && secondTest == true && thirdTest == false) {
        
        

        // trapijuma regestrešana
        if (coordsX[numb - 1] < xSpawnOfPlus + 35 && coordsX[numb - 1] > xSpawnOfPlus - 35 && coordsY[numb - 1] < 900 - ySpawnOfPlus + 35 && coordsY[numb - 1] > 900 - ySpawnOfPlus - 35 && oneTimeStriked == false) {
            mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
            console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
            console.log("All click results ", times)
            Strike = true;
            oneTimeStriked = true;
            mouseDownNumber++;
            time = 0;

        }
        


        
        
        // merķis paliek sarkans, deļ tas trapišanas                                                                                                                                                                                                                                 oblīgati,o jo šeit ari veicas laika korektešana
        if (coordsX[numb - 1] < xSpawnOfPlus + 35 && coordsX[numb - 1] > xSpawnOfPlus - 35 && coordsY[numb - 1] < 900 - ySpawnOfPlus + 35 && coordsY[numb - 1] > 900 - ySpawnOfPlus - 35 ) {

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            ctx.arc(prevxSpawn2[7], prevySpawn2[7], 31, 0, 2 * Math.PI);
            ctx.fill();
            
            //if ( oneTimeMakeRed == false) {
                oldTime = time;
                

            //time = 0;
            //time = time - (300 - oldTime);  // vienreiz ja trapija!!! (???nezinams kapec pirmajam uzdevumam nebija timer un target respawn ne unisonas problema???)
            //}
            
            oneTimeMakeRed = true;

        }

        
    }
    //webpagess
    //ThirdTest
    //3232
    if (start == true && secondTest == false && thirdTest == true && firstTest == false) {

        thirdTestXLeft = [528, 1247, 20, 1077, 1317, 21, 983, 1045, 82, 671, 528, 481, 20]; //2
        thirdTestXRight = [1105, 1470, 81, 1225, 1584, 82, 1120, 1212, 285, 1117, 1105, 911, 109]; //1

        thirdTestYDown = [849, 827, 813, 850, 824, 67, 643, 835, 582, 827, 854, 803, 816]; //4
        thirdTestYUp = [880, 857, 840, 865, 850, 94, 674, 882, 604, 862, 883, 843, 836]; //3
        
        
  
        if (counter == 1){
            if (rdtestVer ==1){
            if(coordsX[numb - 1] < 1105 && coordsX[numb - 1] > 528 && coordsY[numb - 1] < 880 && coordsY[numb - 1] > 849 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;

            }
        }
        else{

            if(coordsX[numb - 1] < 1105 && coordsX[numb - 1] > 528 && coordsY[numb - 1] < 883 && coordsY[numb - 1] > 854 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;

            }
        }
        }
        if (counter == 2){
            
            if(coordsX[numb - 1] < 1470 && coordsX[numb - 1] > 1247 && coordsY[numb - 1] < 857 && coordsY[numb - 1] > 827 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
       
        }
        if (counter == 3){
            if (drtestVer == 1 || drtestVer == 3){
            if (coordsX[numb - 1] < 106 && coordsX[numb - 1] > 20 && coordsY[numb - 1] < 840 && coordsY[numb - 1] > 813 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
            else {
            if (coordsX[numb - 1] < 82 && coordsX[numb - 1] > 21 && coordsY[numb - 1] < 94 && coordsY[numb - 1] > 67 && oneTimeStriked == false){
                    mouseDown[mouseDownNumber] = mouseDownNumber;
                    times[mouseDownNumber] = time;
                    Strikes[mouseDownNumber] = Strike;
                    ctx.font = "160px Arial";
                    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                    ctx.fillText("Striked", 600, 450);
                    console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                    console.log("All click results ", times)
                    time = 0;
                    mouseDownNumber++;
                    oneTimeStriked = true;
                }
            }
        }
        if (counter == 4){
            if(coordsX[numb - 1] < 1230 && coordsX[numb - 1] > 1072 && coordsY[numb - 1] < 868 && coordsY[numb - 1] > 852 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        if (counter == 5){
            if(coordsX[numb - 1] < 1584 && coordsX[numb - 1] > 1317 && coordsY[numb - 1] < 850 && coordsY[numb - 1] > 824 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        if (counter == 6){
            if(coordsX[numb - 1] < 1120 && coordsX[numb - 1] > 983 && coordsY[numb - 1] < 674 && coordsY[numb - 1] > 634 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        if (counter == 7){
            if(coordsX[numb - 1] < 1212 && coordsX[numb - 1] > 1045 && coordsY[numb - 1] < 882 && coordsY[numb - 1] > 835 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        if (counter == 8){
            if (rdtestVer == 1){
            if(coordsX[numb - 1] < 343 && coordsX[numb - 1] > 98 && coordsY[numb - 1] < 631 && coordsY[numb - 1] > 609 && oneTimeStriked == false){
                ctx.font = "160px Arial";
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        else{
            if(coordsX[numb - 1] < 345 && coordsX[numb - 1] > 97 && coordsY[numb - 1] < 795 && coordsY[numb - 1] > 775 && oneTimeStriked == false){
                ctx.font = "160px Arial";
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        }
        if (counter == 9){
            if(coordsX[numb - 1] < 1117 && coordsX[numb - 1] > 671 && coordsY[numb - 1] < 862 && coordsY[numb - 1] > 827 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
            }
        }
        if (counter == 10){
            if(coordsX[numb - 1] < 911 && coordsX[numb - 1] > 483 && coordsY[numb - 1] < 843 && coordsY[numb - 1] > 803 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;

            }
        }
        if (counter == 11){
            if(coordsX[numb - 1] < 1288 && coordsX[numb - 1] > 954 && coordsY[numb - 1] < 142 && coordsY[numb - 1] > 122 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
        }
    }
        if (counter == 12){
            if(coordsX[numb - 1] < 133 && coordsX[numb - 1] > 13 && coordsY[numb - 1] < 609 && coordsY[numb - 1] > 588 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
        }
        }
        if (counter == 13){
            if(coordsX[numb - 1] < 558 && coordsX[numb - 1] > 426 && coordsY[numb - 1] < 866 && coordsY[numb - 1] > 843 && oneTimeStriked == false){
                mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
                ctx.font = "160px Arial";
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                ctx.fillText("Striked", 600, 450);
                console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                console.log("All click results ", times)
                time = 0;
                mouseDownNumber++;
                oneTimeStriked = true;
        }

            }
            if (counter == 14){
                if(coordsX[numb - 1] < 1203 && coordsX[numb - 1] > 227 && coordsY[numb - 1] < 892 && coordsY[numb - 1] > 851 && oneTimeStriked == false){
                    mouseDown[mouseDownNumber] = mouseDownNumber;
                times[mouseDownNumber] = time;
                Strikes[mouseDownNumber] = Strike;
                    ctx.font = "160px Arial";
                    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
                    ctx.fillText("Striked", 600, 450);
                    console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
                    console.log("All click results ", times)
                    time = 0;
                    mouseDownNumber++;
                    oneTimeStriked = true;
            }
    
                }
        }
    
        
    //Forth Test Last letter mousedown
    if (start == true && forthTest == true && firstTest == false){
        //console.log("CHECKFORTHTESTEND " + xx + " y= " + yy + " menubarlvl= " + menuBarLevel);
        if(menuBarLevel == 5){
        var yy = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - e.pageY; 
        var xx = e.pageX;
        if (xx < 260 && xx > 210 && yy < 715 && yy > 695){
            mouseDownNumber++;
            times[mouseDownNumber] = "ForthTest: " + time4;
            console.log("All click results ", times)
        }
    }
    }
    
    
        
    });


document.getElementById("Clear console").addEventListener("click", function () {
    console.clear();
});



document.getElementById("draw trajectory").addEventListener("click", function () {
   
    for (; zero < numb; zero++) {

        
        //sdesj ctx vidit canvas s id =output ne 1600*900 a 300*150
        ctx.beginPath();
        if (zero < 2)
            ctx.fillStyle = 'rgba(0, 0, 255)';
        else
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';

        //ctx.arc(coordsX[zero] * 0.0935 * 2, 150 - coordsY[zero] * 0.06899 * 2, 0.1, 0, 2 * Math.PI);
        if (zero < 2)
            ctx.arc(coordsX[zero] , 936 - coordsY[zero] , 1, 0, 2 * Math.PI);
        else
            ctx.arc(coordsX[zero], 936 - coordsY[zero], 1, 0, 2 * Math.PI);

        //ctx.arc(150, 75, 1, 0, 2 * Math.PI);
            ctx.fill();

            




        // console.log(coordsX[zero], coordsY[zero], zero)

    }
});

function saveStaticDataToFile() {
    var blob = new Blob([times, "\n" , "SpawnX: ", SaveSpawnX, "\n" , " SpawnY: ", SaveSpawnY, "\n" , " CursorX: ", SaveCursorX, "\n" , " CursorY: ", SaveCursorY, "\n", "ForthTest: ", time4, ", FifthTest: ", time5, ", SixthTest: ", time6, ", SeventhTest ", time7, ", EighthTest: ", time8, "\n", "Calibration: ", calib ,  "\n", "Calibration1: ", calib1 ,  "\n", "Calibration2: ", calib2,  "\n", "ThirdTestVariant: ", rdtestVer, ", ", drtestVer, 
"\n", pele, "\n", operatajsistema, "\n", HowOften, "\n", Temp, "\n", coordination, "\n", sport, "\n", "TotalTime: ", TotalTime],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");

    anchor = document.createElement('a');

anchor.download = "hello.txt";
anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
anchor.click();
}



document.getElementById("Save").addEventListener("click", function () {
    saveStaticDataToFile();
    
});

document.getElementById("v1").style.display = "none";
document.getElementById("v2").style.display = "none";
document.getElementById("v3").style.display = "none";
document.getElementById("v4").style.display = "none";
document.getElementById("v5").style.display = "none";


document.getElementById("Show").addEventListener("click", function () {
if (firstTest == true){
    document.getElementById("v1").style.display = "block";
    var elmnt1 = document.getElementById("v1");
}
if (TestNumber == 9){
    document.getElementById("v2").style.display = "block";
    var elmnt1 = document.getElementById("v2");
}
if (secondTest == true){
    document.getElementById("v3").style.display = "block";
    var elmnt1 = document.getElementById("v3");
}
if (thirdTest == true){
    document.getElementById("v4").style.display = "block";
    var elmnt1 = document.getElementById("v4");
}
if (forthTest == true || TestNumber == 4 || TestNumber == 5 || TestNumber == 6 || TestNumber == 7 || TestNumber == 8){
    document.getElementById("v5").style.display = "block";
    var elmnt1 = document.getElementById("v5");
}

    elmnt1.scrollIntoView();
});

document.getElementById("Hide").addEventListener("click", function () {
    if (firstTest == true){
    document.getElementById("v1").style.display = "none";
    document.getElementById("v2").style.display = "none";
    document.getElementById("v3").style.display = "none";
    document.getElementById("v4").style.display = "none";
    document.getElementById("v5").style.display = "none";
    }
    if (TestNumber == 9){
        document.getElementById("v1").style.display = "none";
    document.getElementById("v2").style.display = "none";
    document.getElementById("v3").style.display = "none";
    document.getElementById("v4").style.display = "none";
    document.getElementById("v5").style.display = "none";
    }
    if (secondTest == true){
        document.getElementById("v1").style.display = "none";
    document.getElementById("v2").style.display = "none";
    document.getElementById("v3").style.display = "none";
    document.getElementById("v4").style.display = "none";
    document.getElementById("v5").style.display = "none";
    }
    if (thirdTest == true){
        document.getElementById("v1").style.display = "none";
        document.getElementById("v2").style.display = "none";
        document.getElementById("v3").style.display = "none";
        document.getElementById("v4").style.display = "none";
        document.getElementById("v5").style.display = "none";
    }
    if (forthTest == true || TestNumber == 4 || TestNumber == 5 || TestNumber == 6 || TestNumber == 7 || TestNumber == 8){
        document.getElementById("v1").style.display = "none";
    document.getElementById("v2").style.display = "none";
    document.getElementById("v3").style.display = "none";
    document.getElementById("v4").style.display = "none";
    document.getElementById("v5").style.display = "none";
    }
    
});

var pele;
var operatajsistema;
var HowOften;
var Temp;
var coordination;
var sport;


document.getElementById("Submit").addEventListener("click", function () {
    if (document.getElementById("irPele").checked == true){
        pele = "pele Ir";
    }
    if (document.getElementById("nauPeles").checked == true){
        pele = "peles nau";
    }

    if (document.getElementById("Windows").checked == true){
        operatajsistema = "Windows";
    }
    if (document.getElementById("MacOS").checked == true){
        operatajsistema = "MacOS";
    }
    if (document.getElementById("Linux").checked == true){
        operatajsistema = "Linux";
    }

    if (document.getElementById("Nekad").checked == true){
        HowOften = "Nekad";
    }
    if (document.getElementById("Vienu reizi divas nedēļas").checked == true){
        HowOften = "One time per teo weeks";
    }
    if (document.getElementById("Katru nedēļu").checked == true){
        HowOften = "Every week";
    }
    if (document.getElementById("Katru dienu").checked == true){
        HowOften = "Every day";
    }

    if (document.getElementById("IrTemp").checked == true){
        Temp = "Temperature";
    }
    if (document.getElementById("NauTemp").checked == true){
        Temp = "No temperature";
    }

    if (document.getElementById("IrKordTrauc").checked == true){
        coordination = "Coordination troubles";
    }
    if (document.getElementById("NauKordTrauc").checked == true){
        coordination = "No coordination troubles";
    }

    if (document.getElementById("IrSport").checked == true){
        sport = "Sport";
    }
    if (document.getElementById("NauSport").checked == true){
        sport = "No sport";
    }

    document.getElementById("Submit").style.display = "none";
    document.getElementById("irPele").style.display = "none";
    document.getElementById("nauPeles").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("label2").style.display = "none";

    document.getElementById("block1").style.display = "none";

   

});

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}


