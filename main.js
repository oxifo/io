window.onload = function(){
  function load(){
    const io ="https://raw.githubusercontent.com/oxifo/data/main/";
    const on = document.querySelector("#info ok");
    const nomal = document.querySelector("#normal");
    const info = document.querySelector("#info");
    const input = document.querySelector("#search");
    const off = document.querySelector("#normal search");
    const result = document.querySelector("result");
    const plane =document.querySelector("#plane");
    var pined =document.querySelector("#pined");
    var text = "SUGGEST POST FOR YOU";
    var i = 0;
    var el = document.querySelector("#w");
    const cancel =document.querySelector("cancel");
    function writer() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(writer, 70);
      }
    }
    function posting(){
    fetch("https://lulayapk.000webhostapp.com/poster.php").then(x=>setTimeout(function(){
            if(x.status ==404){
                location.reload();
            }else{
            x.text().then(i=>plane.innerHTML=i);
            plane.innerHTML =posted.join('');
            }
        },1500));
    }
    function search(){
      on.onclick = function(){
    if(input.value !=""){
      fetch("/apk/search.php?cdn="+input.value.toLowerCase()).then(x=>setTimeout(function(){
         if (x.status ==200) {
        x.text().then(x=>result.innerHTML=x);
         }else{
           alert("HTTP ERROR");
         }
      }),400);
      }
      if(input.value !=""){
        input.value="";
      }
      cancel.style.display="inline";
      this.style.display="none"
    }
      off.onclick =function(){
         nomal.style.display="none";
         info.style.display="block";
         result.style.display="block";
      }
    }
    cancel.onclick = function(){
      result.style.display="none";
      nomal.style.display = "flex";
      info.style.display = "none";
    }
    search();
    posting();
    writer();
  }
  setTimeout(load,500);
}
function loadpost(p) {
    let url = "post.php?dir=";
    var chk =p.indexOf("https://");
    if(chk > -1){
      open(p);
    }else{
      open(url+p);
    }
}
function reset(){
  const ok =document.querySelector("ok");
  const cancel =document.querySelector("cancel");
  var result=document.querySelector("result");
  result.innerHTML ="";
  ok.style.display="inline";
  cancel.style.display="none";
}
function download(i){
  open(i);
}
function details(i){
  open(i);
}
  var pageX =0;
  var page =0;
 let scrollBox =document.querySelector("#scrollBox");
 let items =document.getElementsByTagName("embed");
 for(var i =0 ;i<items.length;i++){
   items[i].onclick = function(x){
     pageX +=380;
     if(pageX < 380 * 3){
     scrollBox.scrollLeft =pageX;
     }else{
      pageX =0;
      scrollBox.scrollLeft=0;
     }
   }
 }
