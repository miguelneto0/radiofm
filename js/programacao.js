var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var days = document.getElementsByClassName('week')

if(width <= 950){
    console.log("mudar....")
    for(let i=0;i<days.length;i++){
        days[i].style.fontSize = "14pt"
        days[0].innerHTML = "DOM"
        days[1].innerHTML = "SEG"
        days[2].innerHTML = "TER"
        days[3].innerHTML = "QUA"
        days[4].innerHTML = "QUI"
        days[5].innerHTML = "SEX"
        days[6].innerHTML = "SAB"
    }
}