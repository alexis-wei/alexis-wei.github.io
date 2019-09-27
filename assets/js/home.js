
var w = 0;
var h = 0;
var nameImg = document.getElementById('name');
getWindowSize();
console.log(nameImg.naturalWidth);
console.log(nameImg.naturalHeight);
function getWindowSize(){
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    console.log(w);
    console.log(h);
}


// All the animations are here 
/* Intro animation order: line 1 7 2 3 4 6 5 
Line height to width ratios 

line 2: 3.477  *r
line 3: 3.376  *r
line 4: 3.271  *l
line 5: 2.475  *r
line 6: 3.398  *l
line 7: 2.538  *l */
function nameIntro(){
    $("#line1").animate({"right": "+=2141px"},"fast");
    $("#line7").animate({"right": "+=683.644px", "bottom": "+=1735.505px"},"fast");
    $("#line2").animate({"bottom": "+=2232.965px"},"fast");
    $("#line3").animate({"bottom": "+=2374.545px"},"fast");
    $("#line4").animate({"right": "+=769.33px", "bottom": "+=2516.361px"},"fast");
    $("#line6").animate({"right": "+=1052.623px", "bottom": "+=2605.306px"},"fast");
    $("#line5").animate({"bottom": "+=2639.222px"},"fast");
    document.getElementById("line1").style.opacity = "1";
    document.getElementById("line7").style.opacity = "1";
    document.getElementById("line2").style.opacity = "1";
    document.getElementById("line3").style.opacity = "1";
    document.getElementById("line4").style.opacity = "1";
    document.getElementById("line6").style.opacity = "1";
    document.getElementById("line5").style.opacity = "1";
    $( "#name" ).hide();
    $( "#home" ).hide();
    $( "#line1" ).animate({ "left": "+=2141px"}, "slow" );
    $("#line7").delay(200).animate({"left": "+=683.644px", "top": "+=1735.505px"},"slow");
    $("#line2").delay(400).animate({"top": "+=2232.965px"},"slow");
    $("#line3").delay(600).animate({ "top": "+=2374.545px"},"slow");
    $("#line4").delay(800).animate({"left": "+=769.33px", "top": "+=2516.361px"},"slow");
    $("#line6").delay(1000).animate({"left": "+=1052.623px", "top": "+=2605.306px"},"slow");
    $("#line5").delay(1200).animate({"top": "+=2639.222px"},"slow");
    document.getElementById("name").style.opacity = "1";
    $("#line,#line1").delay(2000).fadeOut(300);
    $( "#name").delay(2000).fadeIn();
    $("#name1, #name2, #enter").delay(2200).animate({"bottom": "+=100px"}, 1000);
}

$("#enter").click(function(){
    $("#name").fadeOut({ duration: 2000, queue: false });
    //$("#name").animate({"bottom": "+=800px"}, 2000);
    $("#name").animate({"bottom": "+=800px"}, { duration: 2000, queue: false });
    //$("#intro").animate({
       // backgroundColor: "transparent"}, 'slow');

    $("#home").show();
    document.getElementById("home").style.opacity = "1";
});




$(document).ready(function() {
    $('#circle').mouseover(function(){
        $("#circle .lower").hide();
        $('#circle .shadow').show();
        console.log(1);
    }, function() {
            $('#circle .shadow').hide();
            $('#circle .lower').show();
    }

    )
});