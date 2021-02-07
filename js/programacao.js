window.onload = prog();

function prog(){
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var days = document.getElementsByClassName('week')
console.log(width)

if(width <= 950){
    for(let i=0;i<days.length;i++){
        days[i].style.fontSize = "1.3vw"
        days[0].innerHTML = "DOM"
        days[1].innerHTML = "SEG"
        days[2].innerHTML = "TER"
        days[3].innerHTML = "QUA"
        days[4].innerHTML = "QUI"
        days[5].innerHTML = "SEX"
        days[6].innerHTML = "SAB"
    }
}else if(width <= 450){
    for(let j=0;j<days.length;j++){
        days[j].style.fontSize = "1.3vw"
        days[0].innerHTML = "D"
        days[1].innerHTML = "S"
        days[2].innerHTML = "T"
        days[3].innerHTML = "Q"
        days[4].innerHTML = "Q"
        days[5].innerHTML = "S"
        days[6].innerHTML = "S"
    }
}
var liweek = document.getElementsByClassName('week')
for(let i=0;i<liweek.length;i++){
    liweek[i].style.marginLeft = "2%"
    liweek[i].style.fontSize = "2vh"
}

document.querySelector('ul.weekdays').style.width = "100%"

}