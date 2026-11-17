var offerbar=document.getElementById("offer")

var close=document.getElementById("close")
var closenav=document.getElementById("closenav")
var closeMenu=document.getElementById("closenav")
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

close.addEventListener("click",function(){
    offerbar.style.display="none";
})


menuicon.addEventListener("click",function(){
    sidenav.style.left="0";

})
closenav.addEventListener("click",function()
{
    sidenav.style.left="-100%";
})

closeMenu.addEventListener("click",function()
{
    sidenav.style.left="-100%";
})
