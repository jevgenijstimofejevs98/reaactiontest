let output = document.querySelector('#output');




//setInterval(myFunction, 1)
var c = document.getElementById("output");
var ctx = c.getContext("2d");

var id = setInterval("FirstTest()", 2000);//2000
var secTest = setInterval("SecondTest()", 3000);//3000
var thirdTest = setInterval("ThirdTest()", 3000);//3000
var m = setInterval("stopWatch()", 10); //time = 100, kogda srabativajet funkcija Timer1(), esli u m intervala budet 1 milisekunda to togda time budet 500 (???ograni4enije???)
var n = setInterval("targetCounter()", 10);
var j = setTimeout("ForthTest()", 100);
var Ninetht = setInterval("NinghthTest()", 2000);
var tw = setTimeout("WriteAbout1stTest()", 100);

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

var firstTest = true;///true


//firstTest = false;/////delete
var TestNumber = 0;//0

//var functionforDubug = setInterval("IntervFuncForDebug()", 250);
function IntervFuncForDebug() {
    /////DEBUG/////

    //console.log("time:", time);
/*
    console.log("DEBUG FLAGS:");
    console.log("oneTimeStrike ", oneTimeStrike)
    console.log("oneTimeMakeRed ", oneTimeMakeRed)
*/

}
var one = true;

function WriteAbout1stTest(){
    if (one == true){
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText("Pirmajā testā ar kursoru ir jānoklikšķina uz zaļajiem apļiem, ja", 50, 100);
        ctx.fillText("palaidīsiet garām, tad būs ieskaitīta pabaidīšana.", 50, 150);
        ctx.fillText("Laiks uz katru mērķī ir ierobežots, ja ne paspēsiet, būs", 50, 200);
        ctx.fillText("ieskaitīts, kā jūs nepaspējat.", 50, 250);
        ctx.fillText("Nospiediet start lai saktu pirmu testu. ", 50, 600);



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
    if (targetCount > 0)
    if (firstCycle == 1)
    if (time>197) {

        

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
            
            time4++ 
            if (cursorIsOutside == true){timeCloseDropDownList++;}

            if (timeCloseDropDownList > 55){
                listCloseTimer = 6;
                timeCloseDropDownList = 0;
                console.log("DropDownListClosed");
            } 

            //

                

//console.log("menuBarlvl " + menuBarLevel + "MaxLevel " + MaxDropDownListLevel);
            if (menuBarLevel == 2 && MaxDropDownListLevel == menuBarLevel)
            if(x < 61 && x > 0 && y < 875 && y > 855 || x < 110 && x > 60 && y > 775 && y < 875){listCloseTimer = 0; cursorIsOutside = false;}
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
        if (menuBarLevel == 3 && MaxDropDownListLevel == menuBarLevel)
    if(x < 160 && x > 60 && y < 815 && y > 795 || x < 160 && x > 110 && y > 715 && y < 815){listCloseTimer = 0;  cursorIsOutside = false;}
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
    if(x < 210 && x > 110 && y < 735 && y > 715 || x < 210 && x > 160 && y > 635 && y < 735){listCloseTimer = 0; cursorIsOutside = false;}
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
    if(x < 260 && x > 160 && y < 715 && y > 695 || x < 260 && x > 210 && y > 615 && y < 715){listCloseTimer = 0; cursorIsOutside = false;}
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
    if(x < 61 && x > 0 && y < 875 && y > 855 || x < 110 && x > 60 && y > 775 && y < 875){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 160 && x > 60 && y < 815 && y > 795 || x < 160 && x > 110 && y > 715 && y < 815){listCloseTimer = 0;  cursorIsOutside = false;}
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
if(x < 210 && x > 110 && y < 735 && y > 715 || x < 210 && x > 160 && y > 635 && y < 735){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 260 && x > 160 && y < 715 && y > 695 || x < 260 && x > 210 && y > 615 && y < 715){listCloseTimer = 0; cursorIsOutside = false;}
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
    if(x < 61 && x > 0 && y < 875 && y > 855 || x < 110 && x > 60 && y > 775 && y < 875){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 160 && x > 60 && y < 815 && y > 795 || x < 160 && x > 110 && y > 715 && y < 815){listCloseTimer = 0;  cursorIsOutside = false;}
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
if(x < 210 && x > 110 && y < 735 && y > 715 || x < 210 && x > 160 && y > 635 && y < 735){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 260 && x > 160 && y < 715 && y > 695 || x < 260 && x > 210 && y > 615 && y < 715){listCloseTimer = 0; cursorIsOutside = false;}
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
    if(x < 111 && x > 0 && y < 875 && y > 855 || x < 210 && x > 110 && y > 775 && y < 875){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 210 && x > 110 && y < 815 && y > 795 || x < 310 && x > 208 && y > 715 && y < 815){listCloseTimer = 0;  cursorIsOutside = false;}
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
if(x < 410 && x > 210 && y < 735 && y > 715 || x < 410 && x > 310 && y > 635 && y < 735){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 510 && x > 310 && y < 715 && y > 695 || x < 510 && x > 410 && y > 615 && y < 715){listCloseTimer = 0; cursorIsOutside = false;}
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
    if(x < 111 && x > 0 && y < 908 && y > 894 || x < 210 && x > 110 && y > 854 && y < 908){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 210 && x > 110 && y < 878 && y > 864 || x < 310 && x > 208 && y > 824 && y < 878){listCloseTimer = 0;  cursorIsOutside = false;}
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
if(x < 410 && x > 210 && y < 838 && y > 824 || x < 410 && x > 310 && y > 784 && y < 838){listCloseTimer = 0; cursorIsOutside = false;}
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
if(x < 510 && x > 310 && y < 828 && y > 814 || x < 510 && x > 410 && y > 774 && y < 828){listCloseTimer = 0; cursorIsOutside = false;}
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

    start = false;
    makeAllWhite = true;
    TestNumber = 9;
    v = 0;

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, 1600, 900);


    ctx.font = "70px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText("Pēdējais tests būs tāds", 50, 100);
    ctx.fillText("pats, ka pirmais,", 50, 200);
    ctx.fillText("tikai apļam būs dažādi izmērī. ", 50, 300);
    ctx.fillText("Nospiediet start lai saktu pēdēju testu. ", 5, 400);

    console.log("EightTest: " + time8);
    registredForthTest = true;

    

    
} 


    }

   
}


document.getElementById("Start").addEventListener("click", function () {
    start = true;
    //if (secondTest == false)
    //console.clear();
});

var SaveSpawnX = [];
var SaveSpawnY = [];
var SaveCursorX = [];
var SaveCursorY = [];
var v = 0;

var makeAllWhite = true;
function FirstTest() {

    if (start == true && secondTest == false && thirdTest == false && firstTest == true) {


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
            forthTest = true;

            SaveSpawnX[v] = "firstTestEnded";
            SaveSpawnY[v] = "firstTestEnded";
            SaveCursorX[v] = "firstTestEnded";
            SaveCursorY[v] = "firstTestEnded";
            v++;


            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.arc(prevxSpawn, prevySpawn, 16, 0, 2 * Math.PI);
            ctx.fill();

            ctx.font = "50px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama testā jums ar menu bar palīdzību un ", 50, 50);
            ctx.fillText("drop-down sarakstiem jāsaliek vārdu TIMER.", 50, 150);
            ctx.fillText("Kad kursors būs uz pēdējās burtas, šitais uzdevums būs pabeigts.", 50, 250);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 5, 350);


            var eximg12 = document.getElementById("img12example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg12, 700, 450, 238, 267);
            ctx.font = "60px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Tā tas viss izskatīsies. ", 500, 850);


            counter = 0;
            time = 0;

            times[mouseDownNumber] = "first test ended          \n";
            mouseDownNumber++;
            firstTest= false;

            makeAllWhite = true;

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
            ctx.fillText("Nākamais tests izvadās jums web lapaspusēs.", 10, 350);
            ctx.fillText("Jums jānoklikšķina uz meklēšanas lauka (ievade meklēšanai). ", 10, 450);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 10, 550);
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

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.arc(prevxSpawn, prevySpawn, test9thSize[v - 1], 0, 2 * Math.PI);
            ctx.arc(prevxSpawn, prevySpawn, test9thSize[v], 0, 2 * Math.PI);
            ctx.fill();

            ctx.font = "50px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText(" ", 50, 50);
            ctx.fillText("Paldies par jūsu uzmanību un sadarbību, lūdzu", 50, 150);
            ctx.fillText("uzspīdiet uz pogu Save, un atsūtiet", 50, 250);
            ctx.fillText("uz pastu brownsky98@gmail.com", 5, 350);



            counter = 0;
            time = 0;

            times[mouseDownNumber] = "last test ended";
            mouseDownNumber++;
            

            makeAllWhite = true;

        }

    }
}



function ThirdTest() {

    if (start == true && secondTest == false && thirdTest == true) {

if (makeAllWhite == true){
        
        ctx.beginPath();
        //ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, 300, 150);
        makeAllWhite = false;
    }





        counter++;
        

        oneTimePressSearch = false;
        oneTimeStriked = false;

    if (counter == 1) { 
    //SPAWN
    var img2 = document.getElementById("img2");
            //1188
            ctx.drawImage(img2, 0, 0, 1600, 900);
    }
    if (counter == 2) { 
        //SPAWN
        var img2 = document.getElementById("img3");
        //1188
        ctx.drawImage(img3, 0, 0, 1600, 900);
        }
    if (counter == 3) { 
        //SPAWN
        var img2 = document.getElementById("img4");
        //1188
        ctx.drawImage(img4, 0, 0, 1600, 900);
        }
    if (counter == 4) { 
        //SPAWN
        var img2 = document.getElementById("img5");
        //1188
        ctx.drawImage(img5, 0, 0, 1600, 900);
        }
    if (counter == 5) { 
        //SPAWN
        var img2 = document.getElementById("img6");
        //1188
        ctx.drawImage(img6, 0, 0, 1600, 900);
        }
    if (counter == 6) { 
        //SPAWN
        var img2 = document.getElementById("img7");
        //1188
        ctx.drawImage(img7, 0, 0, 1600, 900);
        }
    if (counter == 7) { 
        //SPAWN
        var img2 = document.getElementById("img8");
        //1188
        ctx.drawImage(img8, 0, 0, 1600, 900);
        }
    if (counter == 8) { 
        //SPAWN
        var img2 = document.getElementById("img9");
        //1188
        ctx.drawImage(img9, 0, 0, 1600, 900);
        }
    if (counter == 9) { 
        //SPAWN
        var img2 = document.getElementById("img10");
        //1188
        ctx.drawImage(img10, 0, 0, 1600, 900);
        }
    if (counter == 10) { 
        //SPAWN
        var img2 = document.getElementById("img11");
        //1188
        ctx.drawImage(img11, 0, 0, 1600, 900);
        }

    



        

        

   //Dzest (new page screenshot)

    
    
    
    
        time = 0;
        if (counter == 11) {

            start = false;
            secondTest = false;
            thirdTest = false;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "60px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama testā atkal jums ar menu bar palīdzību un ", 50, 50);
            ctx.fillText("drop-down sarakstiem jāsaliek vārdu TIMER,.", 50, 120);
            ctx.fillText("bet tagad ja kursors bus arpus saraksta", 50, 190);
            ctx.fillText("visi sarkasti bus aizverti", 50, 260);
            ctx.fillText(" Nospiediet start lai saktu nākamu testu. ", 5, 330);


            var eximg12 = document.getElementById("img12example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg12, 700, 450, 238, 267);/*
            ctx.font = "60px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Tā tas viss izskatīsies. ", 500, 850);*/
            counter = 0;
            time = 0;
            makeAllWhite = true;
            mouseDownNumber++;
            TestNumber = 5;


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
document.addEventListener('mousemove', (e) => {
    x = e.pageX;

    var body = document.body;
    var html = document.documentElement;
    //page height
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    y = height - e.pageY;
    //var coor = "X: " + x + ", Y: " + y;
    //drawDot(pos, radius, color)

 


    if (x > 7 && y > 49 && x < 1609 && y < 951) {
    output.innerText = `X: ${x - 8} - Y: ${y - 50}`;
        
        coordsX[numb] = x;
        coordsY[numb] = y;
        //console.log("coords and numb: ", coordsX[numb], " ",  coordsY[numb], " ", numb)
        //console.log("x,y,numb: ", x, y, numb)
        numb++;
        /*
        ctx.beginPath();
        ctx.arc(50+numb, 100-numb, 1, 0, 2 * Math.PI);
        ctx.fill();
        */
    }

    
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
    if(x < 61 && x > 0 && y < 875 && y > 855){
        SecondBarMenu();
        menuBarLevel = 2;

        MaxDropDownListLevel = menuBarLevel;
        
    }


    

    

    if (menuBarLevel == 2)
    if(x < 110 && x > 60 && y > 795 && y < 815){
        ThirdBarMenu();
        menuBarLevel = 3;
        MaxDropDownListLevel = menuBarLevel;
        
    }

    

    if (menuBarLevel == 3)
    if(x < 160 && x > 110 && y > 715 && y < 735){
        ForthBarMenu();
        menuBarLevel = 4;
        MaxDropDownListLevel = menuBarLevel;
        
    }

    

    if (menuBarLevel == 4)
    if(x < 210 && x > 160 && y > 695 && y < 715){
        FifthBarMenu();
        menuBarLevel = 5;
        MaxDropDownListLevel = menuBarLevel;
    }

    
    
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 260 && x > 210 && y < 715 && y > 695){
            console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " ForthTest: " + time4;
            console.log("All click results ", times)
            */
           console.log("ForthTest: " + time4);


            
            registredForthTest = true;

            forthTest = false;
            secondTest = true;
            start = false;
            makeAllWhite = true;
            menuBarOneTime = true;
            menuBarLevel = 0;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
        

            ctx.font = "55px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama tests izvadās jums astoņus aplīšus.", 10, 350);
            ctx.fillText("Jums jānospiež uz aplītī ar ‘+’. ", 10, 450);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 10, 550);
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
    if(x < 61 && x > 0 && y < 875 && y > 855){
        SecondBarMenu();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 110 && x > 60 && y > 795 && y < 815){
        ThirdBarMenu();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 160 && x > 110 && y > 715 && y < 735){
        ForthBarMenu();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 210 && x > 160 && y > 695 && y < 715){
        FifthBarMenu();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == true){
            
        
        if (x < 260 && x > 210 && y < 715 && y > 695){
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
        

            ctx.font = "40px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākama testā ari jums ar menu bar palīdzību un ", 50, 50);
            ctx.fillText("drop-down sarakstiem jāsaliek vārdu TIMER,.", 50, 120);
            ctx.fillText("Bet tagad vel ja kursors būs ārpus burtai, kura atver", 50, 190);
            ctx.fillText("drop-down sarakstu, un ārpus drop-down saraksta, šitais drop-down saraksts", 50, 260);
            ctx.fillText("aizvērsies uzriez (iepriekšējos testos, tikai pēc 0.8 sekundes)", 50, 330);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 50, 400);


            var eximg12 = document.getElementById("img12example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg12, 700, 450, 238, 267);
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
    if(x < 61 && x > 0 && y < 875 && y > 855){
        SecondBarMenu();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 110 && x > 60 && y > 795 && y < 815){
        ThirdBarMenu();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 160 && x > 110 && y > 715 && y < 735){
        ForthBarMenu();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 210 && x > 160 && y > 695 && y < 715){
        FifthBarMenu();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 260 && x > 210 && y < 715 && y > 695){
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
        

            ctx.font = "70px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Nākamā testa būs viss tāds pats, tikai drop-down ", 50, 100);
            ctx.fillText("saraksta izmērī būs citādi", 50, 200);
            ctx.fillText("Zemāk var redzēt ka tie izskatīsies.", 50, 300);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 50, 400);


            var eximg12 = document.getElementById("img12example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg12, 700, 450, 238, 267);
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
    if(x < 111 && x > 0 && y < 875 && y > 855){
        SecondBarMenu7thTest();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 210 && x > 110 && y > 795 && y < 815){
        ThirdBarMenu7thTest();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 310 && x > 210 && y > 715 && y < 735){
        ForthBarMenu7thTest();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 410 && x > 310 && y > 695 && y < 715){
        FifthBarMenu7thTest();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 510 && x > 410 && y < 715 && y > 695){
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
            ctx.fillText("Nākamā testa būs viss tāds pats, tikai drop-down ", 50, 50);
            ctx.fillText("saraksta izmērī atkal imainīti.", 50, 150);
            ctx.fillText("Zemāk var redzēt ka tie izskatīsies.", 50, 200);
            ctx.fillText("Bus laika ierobežojums 15 sekundes.", 50, 250);
            ctx.fillText("Nospiediet start lai saktu nākamu testu. ", 50, 300);


            var eximg12 = document.getElementById("img12example");
            //img.src = '/webpages_screenshots/meklešnas_lauks.png';
            ctx.drawImage(eximg12, 700, 450, 238, 267);
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
    if(x < 111 && x > 0 && y < 908 && y > 895){
        SecondBarMenu8thTest();
        menuBarLevel = 2;
   
    }

    if (menuBarLevel == 2)
    if(x < 210 && x > 110 && y > 865 && y < 878){
        ThirdBarMenu8thTest();
        menuBarLevel = 3;
  
    }

    if (menuBarLevel == 3)
    if(x < 310 && x > 210 && y > 825 && y < 838){
        ForthBarMenu8thTest();
        menuBarLevel = 4;
   
    }

    if (menuBarLevel == 4)
    if(x < 410 && x > 310 && y > 815 && y < 828){
        FifthBarMenu8thTest();
        menuBarLevel = 5;
    }
 
        if(menuBarLevel == 5 && registredForthTest == false){
            
        
        if (x < 510 && x > 410 && y < 826 && y > 815){
            console.log("CHECKFORTHTESTEND " + x + " y= " + y + " menubarlvl= " + menuBarLevel);
            /*
            mouseDownNumber++;
            times[mouseDownNumber] = " EighthTest: " + time8;
            console.log("All click results ", times)
            */
           //88888
           console.log("EightTest: " + time8);
            registredForthTest = true;

            

            start = false;
            makeAllWhite = true;
            TestNumber = 9;


            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            v = 0;

            ctx.font = "70px Arial";
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillText("Pēdējais tests būs tāds", 50, 100);
            ctx.fillText("pats, ka pirmais,", 50, 200);
            ctx.fillText("tikai apļam būs dažādi izmērī. ", 50, 300);
            ctx.fillText("Nospiediet start lai saktu pēdēju testu. ", 50, 400);
        }
    }
}



});

var count = 0;


document.addEventListener('mousedown', (e) => {

//ForthTest
    if (start == true && forthTest == true && firstTest == false){
    if(menuBarLevel == 0)
    if(coordsX[numb - 1] < 60 && coordsX[numb - 1] > 0 && coordsY[numb - 1] < 935 && coordsY[numb - 1] > 915){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}
//FifthTest

//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 5){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 60 && x > 0 && y < 935 && y > 915){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}

//SixthTest
//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 6){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 60 && x > 0 && y < 935 && y > 915){
        
        FirstBarMenu();
        menuBarLevel = 1;
    }
}

//SeventhhTest
//console.log("start " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 7){
    console.log("dfgnhnodfniohnjiodfsjxiohjdfjghiopdjfiohjopdfjhojdfijhio[jsfijdopsjhiopjdfopji[sjdfjh");
    if(menuBarLevel == 0)
    if(x < 110 && x > 0 && y < 935 && y > 915){
        
        FirstBarMenu7thTest();
        menuBarLevel = 1;
    }
}

//8thTest
//console.log("star " + start + "TestNum " + TestNumber);
if (start == true && TestNumber == 8){
    console.log("BAM");
    if(menuBarLevel == 0)
    if(x < 110 && x > 0 && y < 935 && y > 925){
        
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
    mouseDown[mouseDownNumber] = mouseDownNumber;
    times[mouseDownNumber] = time;
    
    Strikes[mouseDownNumber] = Strike;



    // trapijuma regestrešana
    if (coordsX[numb - 1] < xSpawn + 25 && coordsX[numb - 1] > xSpawn - 5 && coordsY[numb - 1] < 936 - ySpawn + 15 && coordsY[numb - 1] > 936 - ySpawn - 15 && oneTimeStriked == false) {
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
    if (coordsX[numb - 1] < xSpawn + 25 && coordsX[numb - 1] > xSpawn - 5 && coordsY[numb - 1] < 936 - ySpawn + 15 && coordsY[numb - 1] > 936 - ySpawn - 15) {

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.arc(xSpawn, ySpawn, 16, 0, 2 * Math.PI);
        ctx.fill();
   
    }

    
    
        mouseDownNumber++;
    }

    //NineghthTest

    if (start == true && TestNumber == 9) {
        mouseDown[mouseDownNumber] = mouseDownNumber;
        times[mouseDownNumber] = time;
        
        Strikes[mouseDownNumber] = Strike;

    
        // trapijuma regestrešana
        if (x-10 < xSpawn + test9thSize[v] && x-10 > xSpawn - test9thSize[v] && y < 936 - ySpawn + test9thSize[v] && y > 936 - ySpawn - test9thSize[v] && oneTimeStriked == false) {
            console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
            console.log("All click results ", times)
            Strike = true;
            oneTimeStriked = true;
        }
        
    
        time = 0;

    


    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.arc(x-10, 936-y, 3, 0, 2 * Math.PI);
    ctx.fill();

    
        
    
        // merķa dzešana deļ trapijuma
        if (x-10 < xSpawn + test9thSize[v] && x-10 > xSpawn - test9thSize[v] && y < 936 - ySpawn + test9thSize[v] && y > 936 - ySpawn - test9thSize[v]) {
    
            ctx.beginPath();
            //ctx.strokeStyle = "white";
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, 1600, 900);
            console.log("WRKEDDDDDDDDDDDDDDD");
            
       
        }
        
            mouseDownNumber++;
        }


    //SecondTest
    if (start == true && secondTest == true && thirdTest == false) {
        
        

        // trapijuma regestrešana
        if (coordsX[numb - 1] < xSpawnOfPlus + 50 && coordsX[numb - 1] > xSpawnOfPlus - 20 && coordsY[numb - 1] < 936 - ySpawnOfPlus + 32 && coordsY[numb - 1] > 936 - ySpawnOfPlus - 30 && oneTimeStriked == false) {
            mouseDown[mouseDownNumber] = mouseDownNumber;
            times[mouseDownNumber] = time;
            Strikes[mouseDownNumber] = Strike;
            console.log("Mousedown number: ", mouseDownNumber, "Pressed on time: ", time, " sek/100, Striked, target count: ", targetCount)
            console.log("All click results ", times)
            Strike = true;
            oneTimeStriked = true;
            mouseDownNumber++;

        }
        


        time = 0;
        
        // merķis paliek sarkans, deļ tas trapišanas                                                                                                                                                                                                                                 oblīgati,o jo šeit ari veicas laika korektešana
        if (coordsX[numb - 1] < xSpawnOfPlus + 40 && coordsX[numb - 1] > xSpawnOfPlus - 20 && coordsY[numb - 1]< 936 - ySpawnOfPlus + 32 && coordsY[numb - 1]> 936 - ySpawnOfPlus - 30 ) {

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

    //ThirdTest
    if (start == true && secondTest == false && thirdTest == true && firstTest == false) {

        thirdTestXLeft = [413, 819,    1250, 960, 1082, 1325, 1234, 990, 1053, 89, 680]; //2
        thirdTestXRight = [780, 1180,  1480, 1295, 1235, 1579, 1289, 1127, 1220, 293, 1125]; //1

        thirdTestYDown = [822,  895, 181, 906, 886, 934, 707, 920, 643, 898]; //3
        thirdTestYUp = [794,    862, 159, 885, 855, 838, 679, 874, 619, 862]; //4
        
        
  
        if (counter == 1){
            if(coordsX[numb - 1] < 780 && coordsX[numb - 1] > 413 && coordsY[numb - 1] < 822 && coordsY[numb - 1] > 794 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1180 && coordsX[numb - 1] > 800 && coordsY[numb - 1] < 822 && coordsY[numb - 1] > 794 && oneTimeStriked == false){
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
        if (counter == 2){
            if(coordsX[numb - 1] < 1480 && coordsX[numb - 1] > 1250 && coordsY[numb - 1] < 895 && coordsY[numb - 1] > 862 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1295 && coordsX[numb - 1] > 960 && coordsY[numb - 1] < 181 && coordsY[numb - 1] > 159 && oneTimeStriked == false){
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
        if (counter == 4){
            if(coordsX[numb - 1] < 1235 && coordsX[numb - 1] > 1082 && coordsY[numb - 1] < 906 && coordsY[numb - 1] > 885 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1579 && coordsX[numb - 1] > 1325 && coordsY[numb - 1] < 886 && coordsY[numb - 1] > 860 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1289 && coordsX[numb - 1] > 1234 && coordsY[numb - 1] < 934 && coordsY[numb - 1] > 838 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1127 && coordsX[numb - 1] > 990 && coordsY[numb - 1] < 707 && coordsY[numb - 1] > 679 && oneTimeStriked == false){
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
            if(coordsX[numb - 1] < 1220 && coordsX[numb - 1] > 1053 && coordsY[numb - 1] < 920 && coordsY[numb - 1] > 874 && oneTimeStriked == false){
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
        if (counter == 9){
            if(coordsX[numb - 1] < 293 && coordsX[numb - 1] > 89 && coordsY[numb - 1] < 643 && coordsY[numb - 1] > 619 && oneTimeStriked == false){
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
        if (counter == 10){
            if(coordsX[numb - 1] < 1125 && coordsX[numb - 1] > 680 && coordsY[numb - 1] < 898 && coordsY[numb - 1] > 862 && oneTimeStriked == false){
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
    var blob = new Blob([times, "\n" , "SpawnX: ", SaveSpawnX, "\n" , " SpawnY: ", SaveSpawnY, "\n" , " CursorX: ", SaveCursorX, "\n" , " CursorY: ", SaveCursorY, "\n", "ForthTest: ", time4, ", FifthTest: ", time5, ", SixthTest: ", time6, ", SeventhTest ", time7, ", EighthTest: ", time8],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}



document.getElementById("Save").addEventListener("click", function () {
    saveStaticDataToFile();
});

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}


