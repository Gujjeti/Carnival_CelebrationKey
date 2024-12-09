

let tl = gsap.timeline({
  ease: "Power1.easeInOut",
  // repeat:3,
  // repeatDelay: 3,
});

tl.from(['.fistCopy span, .secondCopy'],{
  y:15,
  duration:0.8,
  stagger:0.2,
  opacity:0
})

.from(['.pricetxt span, .Carnival_logo'],{
  y:10,
  duration:0.8,
  stagger:0.2,
  opacity:0
},"-=0.5")











