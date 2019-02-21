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
    document.getElementById(id).style.transform="rotateY("+((x-(width/2))/(width/2))*20+"deg) rotateX("+-((y-(height/2))/(height/2))*20+"deg)";

}

//To rotate the logo depending on mouse pos.
document.onmousemove=function(e){
    e=e||window.event;
    rotateToPercent("logo",e);
}