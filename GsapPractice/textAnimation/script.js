var h1 = document.querySelector("h1");
var h1Text = h1.textContent

var splittedText = h1Text.split("");
var halfText = splittedText.length/2
console.log(halfText)

var clutter = "";

splittedText.forEach(function(e,idx){
    if(halfText<idx){
        clutter += `<span class="b">${e}</span>`
    }
    else{
        clutter += `<span class="a">${e}</span>`
    }
})
h1.innerHTML = clutter


gsap.from("h1 .a",{
    y:70,
    duration:0.5,
    delay:0.8,
    stagger:0.2,
    opacity:0
})
gsap.from("h1 .b",{
    y:70,
    duration:0.5,
    delay:0.8,
    stagger:-0.2,
    opacity:0
})