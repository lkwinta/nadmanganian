var name,weight,z,symbol,url,a,lp,ln,le,color;
function OpenModal(name,weight,z,symbol,color){
    url = symbol.toLowerCase();
    a = Math.round(weight);
    
    lp = z;
    ln = a - z;
    le = z;
    
    if(color == "color1"){
        color = "150, 255, 155";
        console.log(color);
    }
    
    else if(color == "color2"){
        color = "255, 230, 150";
    }
    
    else if(color == "color3"){
        color = "240, 255, 112";
    }
    
    else if(color == "color4"){
        color = "165, 208, 255";
    }
    
    else if(color == "color5"){
        color = "87, 224, 142";
    }
    
    else if(color == "color6"){
        color = "255, 206, 252";
    }
    
    else if(color == "color7"){
        color = "255, 162, 112";
    }
    
    else if(color == "color8"){
        color = "215, 210, 247";
    }
    
    else if(color == "color9"){
        color = "181, 255, 248";
    }
    
    else if(color == "color10"){
        color = "209, 209, 209";
    }
    
    else{
        color = "255, 255, 255";
    }
    
    document.getElementById("modal-div").innerHTML = 
        '<div id="modal">'+
            '<div class="modal-content">'+
                '<div id="modal-header">'+
                    '<span class="close" onclick="CloseModal()">&times;</span>'+
                        '<h2 class="h2_popup">' +name+'</h2>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<p class="modal-text">Symbol: ' + '<b>' + symbol + '</b>'+ '</p>'+
                        '<p class="modal-text">Masa: '+ '<b>' + weight +'u' + '</b>' + '</p>'+
                        '<p class="modal-text">Liczba Atomowa(Z): ' + '<b>' +  z +'</b>'+ '</p>'+
                        '<p class="modal-text">Liczba Masowa(A): ' + '<b>' +  a  +'</b>'+ '</p>'+
                        '<p class="modal-text">Liczba Protonów: ' + '<b>' + lp  +'</b>'+ '</p>'+
                        '<p class="modal-text">Liczba Neutornów: ' +  '<b>' + ln  +'</b>'+ '</p>'+
                        '<p class="modal-text">Liczba Elektronów: ' + '<b>' + le  +'</b>'+ '</p>'+
                    '</div>'+
                    '<div id="modal-footer">'+
                        '<a href="../podstrony/pierwiastki/'+ url + '.html"><div class="moreBtn">Więcej</div></a>'+
                    '</div>'+
            '</div>'+
        '</div>';
    
    document.getElementById("modal-footer").style.background = "linear-gradient(to right, rgba(" + color +",0.4), rgba("+color+",0.95))";
    document.getElementById("modal-header").style.background = "linear-gradient(to left, rgba(" + color +",0.4), rgba("+color+",0.95))";
    
    
    document.getElementById("uop").style.filter = "blur(1px)";
    document.getElementById("uop_title").style.filter = "blur(1px)";
    document.getElementById("tlo_przycisk").style.filter = "blur(1px)";
    document.getElementById("info").style.filter = "blur(1px)";
}

var modal = document.getElementById("modal");

function CloseModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("uop").style.filter = "none";
    document.getElementById("uop_title").style.filter = "none";
    document.getElementById("tlo_przycisk").style.filter = "none";
    document.getElementById("info").style.filter = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
        document.getElementById("uop").style.filter = "none";
        document.getElementById("uop_title").style.filter = "none";
        document.getElementById("tlo_przycisk").style.filter = "none";
    }
    if (event.target == document.getElementById("modal-img")) {
        document.getElementById('modal-img').style.display = "none";
        document.getElementById("uop").style.filter = "none";
        document.getElementById("uop_title").style.filter = "none";
        document.getElementById("tlo_przycisk").style.filter = "none";
        document.getElementById("info").style.filter = "none";
    }
}

function Search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
    if(filter.length >= 40) alert("UWAGA \n \n Wygląda na to, że cierpisz na nerwicę lub nie masz co robić. Prosimy, opanuj swoje nerwy i nie wyżywaj się na naszej stronie. To nic nie da! Najlepiej  z kimś porozmawiaj. Pozdrawiamy! ");
}

function openImg(){
    var modal_img = document.getElementById('modal-img');
    var img = document.getElementById("legend_img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption-img");
    modal_img.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span_img = document.getElementsByClassName("close-img")[0];
    
    document.getElementById("uop").style.filter = "blur(1px)";
    document.getElementById("uop_title").style.filter = "blur(1px)";
    document.getElementById("tlo_przycisk").style.filter = "blur(1px)";
    document.getElementById("info").style.filter = "blur(1px)";

}

function closeImg(){
    var modal_img = document.getElementById('modal-img');
    modal_img.style.display = "none";
    
    document.getElementById("uop").style.filter = "none";
    document.getElementById("uop_title").style.filter = "none";
    document.getElementById("tlo_przycisk").style.filter = "none";
    document.getElementById("info").style.filter = "none";
}

function respoFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    //document.getElementById("#main").style.marginTop="0";
}


