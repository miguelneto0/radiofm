function changeNews1(){
    src = document.querySelector("#imgli1").src;
    console.log(document.getElementById("imgli1").src);
    // console.log(document.getElementById("noticprinc").style.backgroundImage);
    document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
    var aux = "";
    aux = document.querySelector(".legenda").innerText;
    document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
    document.querySelector(".pnew").innerText = aux;
    // console.log(src);
    
}

function changeNews2(){
    src = document.querySelector("#imgli2").src;
    
    document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
    // console.log(src);
    var aux = "";
    aux = document.querySelector(".legenda").innerText;
    document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
    document.querySelector(".pnew").innerText = aux;
}   

function changeNews3(){
    src = document.querySelector("#imgli3").src;
    
    document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
    // console.log(src);
    var aux = "";
    aux = document.querySelector(".legenda").innerText;
    document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
    document.querySelector(".pnew").innerText = aux;
}   