function openLink(link){
    window.location=link;
}

function rotateToPercent(id,event){

    //mouse pos
    var x=event.clientX;
    var y=event.clientY;

    //window size
    var width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    var height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;

    //rotate the logo accordingly
    //TODO: get this to ADD to current transform attribute instead of completely replacing it
    document.getElementById(id).style.transform="rotateY("+((x-(width/2))/(width/2))*20+"deg) rotateX("+-((y-(height/2))/(height/2))*20+"deg)";

    //The following did not work due to:
    //1. the missing unit in rotateY (deg)
    //2. the quotations need to be double not single (i think)
    //3. there being a semi-colon at the end, editing the style will put it there automatically i guess
    //document.getElementById(id).style.transform=document.getElementById(id).style.transform+'rotateY('+((y-(height/2))/(height/2))*20+') rotateX('+((x-(width/2))/(width/2))*20+'deg);';
}

function updateLogoPos(){

    var width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
/*
    document.getElementById("logoBG").style.left=((width/2)-(document.getElementById("logoBG").clientWidth/2))+"px";
    document.getElementById("logoBGBorder").style.left=((width/2)-(document.getElementById("logoBGBorder").clientWidth/2))+"px";
    document.getElementById("logo").style.left=((width/2)-(document.getElementById("logo").clientWidth/2))+"px";
*/

    document.getElementById("logoBG").style.left=((width/2)-((document.getElementById("logoBG").offsetWidth)/2))+"px";
    document.getElementById("logoBGBorder").style.left=((width/2)-((document.getElementById("logoBGBorder").offsetWidth)/2))+"px";
    document.getElementById("logo").style.left=((width/2)-((document.getElementById("logo").offsetWidth)/2))+"px";

}

function initLogoPos(){

    var width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

    document.getElementById("logoBG").style.top="47px";
    document.getElementById("logoBG").style.left=((width/2)-((document.getElementById("logoBG").offsetWidth)/2))+"px";
    document.getElementById("logoBGBorder").style.top="50px";
    document.getElementById("logoBGBorder").style.left=((width/2)-((document.getElementById("logoBGBorder").offsetWidth)/2))+"px";
    document.getElementById("logo").style.top="25px";
    document.getElementById("logo").style.left=((width/2)-((document.getElementById("logo").offsetWidth)/2))+"px";

}

//To rotate the logo depending on mouse pos.
document.onmousemove=function(e){
    e=e||window.event;
    rotateToPercent("logo",e);
}