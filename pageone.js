window.onscroll = function() {scrollFunction()};

console.log(document.documentElement.scrollTop);

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementsByClassName("menu-li").style.padding = "30px 10px";
    document.getElementById("image-logo").style.width = "10%";
    document.getElementsByClassName("sec1").style.opacity = ".5";
    document.getElementById("player").style.background = "rgba(0, 0, 0, 0.411)";
  } else {
    // document.getElementById("menu-li").style.padding = "80px 10px";
    document.getElementById("image-logo").style.width = "20%";
    document.getElementById("player").style.background = "black";
  }
}