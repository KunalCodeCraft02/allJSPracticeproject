// gsap.from("#page1 #box1", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 270,
// });

// gsap.from("#page2 #box2", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     // rotate: 7,
//     scrollTrigger: {
//         trigger: "#page2 #box2", // Correct trigger to the section/page
//         scroller: "body",
//         markers: true,
//         start: "top 100%",
//         end: "top 10%",
//         scrub:1,
//         scale:1.2
//     }
// });


// TEXT ANIMATION 

// gsap.to("#page2 h1",{
//     transform:"translateX(-100%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"-100%",
//         scrub:2,
//         pin:true
//     }
// })



// gsap.to(".Div1",{
//     transform:"translateX(-120%)",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         markers:true,
//         start:"top 30%",
//         scrub:2,
//         pin:true
//     }
// })



Path = `M 10 100 Q 250 100 490 100`
FinalPath = `M 10 100 Q 250 100 490 100`


let string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    Path = `M 10 100 Q 250 ${dets.y} 490 100`
    gsap.to("svg path",{
        attr:{d:Path},
        duration:0.2,
        ease:"power3.out"
    })

});

string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path",{
        attr:{d:FinalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
});