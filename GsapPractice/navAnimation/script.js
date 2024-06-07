var menu = document.querySelector("#nav i");
var FullDiv = document.querySelector("#full");
var CloseBTN = document.querySelector("#full i");
 
var tl = gsap.timeline();
menu.addEventListener("click",function(dets){
    tl.to("#full",{
        right:0
    })
    tl.from("#full h4",{
        x:500,
        duration:0.5,
        delay:0.4,
        stagger:{
            amount:0.3
        }
    });
});
CloseBTN.addEventListener("click",function(dets){
    tl.to("#full",{
        right:"-30%",
        duration:1
    })
})