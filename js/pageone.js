window.onscroll = function() {scrollFunction()};
window.onload = trocaProg();

// funcao de reduzir a logo do menu
console.log(document.documentElement.scrollTop);

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementsByClassName("menu-li").style.padding = "30px 10px";
    document.getElementById("image-logo").style.width = "10%";
    // document.getElementsByClassName("sec1").style.opacity = ".5";
    document.getElementById("player").style.background = "rgba(0, 0, 0, 0.642)";
  } else {
    // document.getElementById("menu-li").style.padding = "80px 10px";
    document.getElementById("image-logo").style.width = "20%";
    document.getElementById("player").style.background = "black";
  }
}

// funcao pra atualizar o programa q esta tocando
function trocaProg(){
  var hora = new Date();

  if(hora.getHours() >= 6 && hora.getHours() < 7){
    document.getElementById("toca").innerHTML = "Igreja Shalom";
    document.getElementById("hora").innerHTML = "06:00 às 07:00";
    document.getElementById("imgprog").src = "./images/shalom.png";
  }else if(hora.getHours() >= 7 && hora.getHours() < 10){
    document.getElementById("toca").innerHTML = "Tribuna 101";
    document.getElementById("hora").innerHTML = "07:00 às 10:00";
    document.getElementById("imgprog").src = "./images/tribuna.png";
  }else if(hora.getHours() >= 10 && hora.getHours() < 13){
    document.getElementById("toca").innerHTML = "Estação Cidade";
    document.getElementById("hora").innerHTML = "10:00 às 13:00";
    document.getElementById("imgprog").src = "./images/estacao.png";
    document.getElementById("imgprog").style.width = "45%";
    document.getElementById("imgprog").style.marginLeft = "25%";
  }else if(hora.getHours() >= 13 && hora.getHours() < 14){
    document.getElementById("toca").innerHTML = "Celebrai";
    document.getElementById("hora").innerHTML = "13:00 às 14:00";
    document.getElementById("imgprog").src = "./images/celebrai.png";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "25%";
  }else if(hora.getHours() >= 14 && hora.getHours() < 16){
    document.getElementById("toca").innerHTML = "Fuzooê";
    document.getElementById("hora").innerHTML = "14:00 às 16:00";
    document.getElementById("imgprog").src = "./images/fuzooe.png";
  }else if(hora.getHours() >= 16 && hora.getHours() < 18){
    document.getElementById("toca").innerHTML = "Puxa o fole";
    document.getElementById("hora").innerHTML = "16:00 às 18:00";
    document.getElementById("imgprog").src = "./images/puxafole.png";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "29%";
  }else if(hora.getHours() >= 18 && hora.getHours() < 19){
    document.getElementById("toca").innerHTML = "Por do Sol";
    document.getElementById("hora").innerHTML = "18:00 às 19:00";
    document.getElementById("imgprog").src = "./images/pordosol.jpeg";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "29%";
  }else if(hora.getHours() >= 19 && hora.getHours() < 20 ){
    document.getElementById("toca").innerHTML = "Voz do Brasil";
    document.getElementById("hora").innerHTML = "19:00 às 20:00";
    document.getElementById("imgprog").src = "./images/vozdobrasil.jpg";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "29%";
  }else if(hora.getHours() >= 20 && hora.getHours() <= 23){
    document.getElementById("toca").innerHTML = "Voo Noturno";
    document.getElementById("hora").innerHTML = "20:00 às 23:59";
    document.getElementById("imgprog").src = "./images/voonoturno.jpeg";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "29%";
  }else if(hora.getHours() >= 0 && hora.getHours() < 7){
    document.getElementById("toca").innerHTML = "De Volta Pro Futuro";
    document.getElementById("hora").innerHTML = "00:00 às 06:00";
    document.getElementById("imgprog").src = "./images/voonoturno.jpeg";
    document.getElementById("imgprog").style.width = "40%";
    document.getElementById("imgprog").style.marginLeft = "29%";
  }
  var dia = "";
  var mes = "";

  if(hora.getDay() == 4)
    dia = "QUI";
  else if(hora.getDay() == 5)
    dia = "SEX";
  else if(hora.getDay() == 6)
    dia = "SAB";
  else if(hora.getDay() == 0)
    dia = "DOM";
  else if(hora.getDay() == 1)
    dia = "SEG";
  else if(hora.getDay() == 2)
    dia = "TER";    
  else if(hora.getDay() == 3)
    dia = "QUA";
  
  
    if(hora.getMonth() == 0)
      mes = "Janeiro";
    else if(hora.getMonth() == 1)
      mes = "Fevereiro";
    else if(hora.getMonth() == 2)
      mes = "Março";
    else if(hora.getMonth() == 3)
      mes = "Abril";
    else if(hora.getMonth() == 4)
      mes = "Maio";
    else if(hora.getMonth() == 5)
      mes = "Junho";
    else if(hora.getMonth() == 6)
      mes = "Julho";
    else if(hora.getMonth() == 7)
      mes = "Agosto";
    else if(hora.getMonth() == 8)
      mes = "Setembro";
    else if(hora.getMonth() == 9)
      mes = "Outubro";
    else if(hora.getMonth() == 10)
      mes = "Novembro";
    else if(hora.getMonth() == 11)
      mes = "Dezembro";

  document.getElementById("dia").innerHTML = " <b>" + dia + "</b> &nbsp;" + hora.getHours() + ":" + hora.getMinutes() + " - &nbsp;" + hora.getDate() + " de " + mes + " de " + hora.getFullYear();

  console.log(hora.getDate() + " - " + hora.getDay() + " - " + hora.getFullYear())
}