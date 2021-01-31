// function changeNews1(){
//     src = document.querySelector("#imgli1").src;
//     console.log(document.getElementById("imgli1").src);
//     // console.log(document.getElementById("noticprinc").style.backgroundImage);
//     document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
//     var aux = "";
//     aux = document.querySelector(".legenda").innerText;
//     document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
//     document.querySelector(".pnew").innerText = aux;
//     // console.log(src);
    
// }

// function changeNews2(){
//     src = document.querySelector("#imgli2").src;
    
//     document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
//     // console.log(src);
//     var aux = "";
//     aux = document.querySelector(".legenda").innerText;
//     document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
//     document.querySelector(".pnew").innerText = aux;
// }   

// function changeNews3(){
//     src = document.querySelector("#imgli3").src;
    
//     document.getElementById("noticprinc").style.backgroundImage = "url('" + src + "')";
//     // console.log(src);
//     var aux = "";
//     aux = document.querySelector(".legenda").innerText;
//     document.querySelector(".legenda").innerText = document.querySelector(".pnew").innerText;
//     document.querySelector(".pnew").innerText = aux;
// }   

// function changeNews(evt, img) {
//     var i, tabcontent, tablinks;
//     img = document.getElementsByClassName("img-news");
//     linews = document.getElementsByClassName("li-news");
//     principal = document.getElementsByClassName("news").style.backgroundImage; 
//     imgnews = document.getElementsByClassName("img-news");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(img).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  
//   // Get the element with id="defaultOpen" and click on it
//   document.getElementById("imgli1").click();

/* Abordagem isolada */
var linews2 = document.getElementById('news-snd')
linews2.addEventListener("click", changeNews2)

function changeNews2(){
    var imgnew = document.getElementById('imgli2')
    console.log(imgnew)
    console.log(imgnew.src)
    principal = document.getElementById("noticprinc")
    principal.style.backgroundImage = " url('" + imgnew.src + "')"
}

var linews3 = document.getElementById('news-trd')
linews3.addEventListener("click", changeNews3)

function changeNews3(){
    var imgnew = document.getElementById('imgli3')
    console.log(imgnew)
    console.log(imgnew.src)
    principal = document.getElementById("noticprinc")
    principal.style.backgroundImage = "url('" + imgnew.src + "')"
}

var linews4 = document.getElementById('news-th')
linews4.addEventListener("click", changeNews4)

function changeNews4(){
    var imgnew = document.getElementById('imgli4')
    console.log(imgnew)
    console.log(imgnew.src)
    principal = document.getElementById("noticprinc")
    principal.style.backgroundImage = "url('" + imgnew.src + "')"
}

var linews = document.getElementById('news-fst')
linews.addEventListener("click", changeNews)

function changeNews(){
    var imgnew = document.getElementById('imgli1')
    console.log(imgnew)
    console.log(imgnew.src)
    principal = document.getElementById("noticprinc")
    principal.style.backgroundImage = "url('" + imgnew.src + "')"
}

// function mousenews(){
//     principal = document.getElementById("noticprinc")
//     principal.style.backgroundImage = "linear-gradient(to bottom, rgba(126, 137, 231, 0.52), rgba(50, 6, 68, 0.73))"
// }

// var i = 0, j = 0
// var li_news = document.getElementsByClassName('li-news')
// var child = document.getElementsByClassName('img-news')

// for(i=0;i<li_news.length;i++){
//     li_news[i].addEventListener("click", change_News)
// }

// function change_News(){
//     for (i=0;i<li_news.length;i++)
//         for(j=0;j<child.length;j++)
//             if(i==j)
//                 console.log(child[i])
// }