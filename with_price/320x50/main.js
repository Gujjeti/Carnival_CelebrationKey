

let tl = gsap.timeline({
  ease: "Power1.easeInOut",
  // repeat:3,
  // repeatDelay: 3,
});
tl.from(['.fistCopy span, .Carnival_logo'],{
  y:15,
  duration:0.8,
  stagger:0.2,
  opacity:0
})
.to(['.fistCopy span'],{
  y:-5,
  duration:0.8,
  opacity:0,
  delay:1
})
.from('.secCopy span',{
  y:15,
  duration:0.8,
  stagger:0.2,
  opacity:0
})











