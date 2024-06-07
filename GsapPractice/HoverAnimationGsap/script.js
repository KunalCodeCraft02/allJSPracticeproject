let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let ImageDiv = document.querySelector("#image")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x+"px",
        y:dets.y+"px",
        ease:"back.out"
    })
})

ImageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:5
    })
});
ImageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
})