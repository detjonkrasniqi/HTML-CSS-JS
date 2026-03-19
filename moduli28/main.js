var button1=document.getElementById("btn1");


button1.onclick=function(){
    alert("other button was clicked")
}


var button2=document.getElementById("btn2");


button2.onmouseover=function(){
    alert("Mouse is over");
}
var button3=document.getElementById("btn3");


button3.onmouseleave=function(){
    alert("mouse left")

}

var button4=document.getElementById("btn4");


button4.onmousewheel=function(){
    alert("mouse wheel")

}

var v_button = document.getElementById("btn6");

var v_txt = document.getElementById("txt1");
v_button.onclick = function(){
 v_text.style.color ="red"  
}


var button1=document.getElementById("btn11");
var teksti = document.getElementById("txt");

var button22=document.getElementById("btn22");
var teksti1 = document.getElementById("txt1");



button1.onclick = function(){
    teksti.style.color = 'red'
    teksti.style.backgroundColor = 'lightgrey'
    teksti.style.fontSize = '100px'
    teksti.style.padding = '20px'
    teksti.style.textAlign = 'center'
}

button22.onclick = function(){
    teksti1.style.cssText= 'color:blue; background-color:lightgrey; font-size:25px; font-family:fantasy'
}

var ifundit = document.getElementById('ifundit')
var pg = document.getElementById('pg')

ifundit.onclick = function(){
    pg.setAttribute("class","paragrafi")
}




  