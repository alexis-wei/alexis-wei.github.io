
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

function changeSize(){
    var theImg = document.getElementById('name');
}

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