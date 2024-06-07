var tl = gsap.timeline();

tl.from("nav h1",{
    y:35,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
.from("nav h4 ,nav button",{
    y:35,
    opacity:0,
    duration:0.4,
    stagger:0.15
})
// .from("#part2 button",{
//     y:35,
//     opacity:0,
//     // duration:0.4,
//     stagger:0.3,
//     // backgroundColor:"#B9FF66",
// })
.from(".centerPart1 h1",{
    x:-100,
    duration:0.5,
    stagger:0.3,
    opacity:0
})
.from(".centerPart1 p",{
    x:-100,
    duration:0.5,
    stagger:0.3,
    opacity:0
})
.from(".centerPart1 button",{
    x:-100,
    duration:0.5,
    stagger:0.3,
    opacity:0
})
.from(".centerPart2 img",{
    x:100,
    duration:0.5,
    stagger:0.3,
    opacity:0
},"-=0.5")
.from(".Section1Bottom img",{
    y:30,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".Section1Bottom img",
        scroller:"body",
       
        start:"top 50%",
        end:"top 80%",
        scrub:1
    }
})
.from(".services h3, .services p",{
    y:30,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        start:"top 50%",
        end:"top 80%",
        scrub:1
    }
})










var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:true,
        start:"20%",
        end:"0%",
        scrub:1
    }
})

tl2.from("#elem1",{
    x:-300,
    opacity:0,
    duration:1,

},"anim")

tl2.from("#elem2",{
    x:300,
    opacity:0,
    duration:1,

},"anim")

tl2.from("#elem3",{
    x:-300,
    opacity:0,
    duration:1,

},"ani")

tl2.from("#elem4",{
    x:300,
    opacity:0,
    duration:1,

},"ani")