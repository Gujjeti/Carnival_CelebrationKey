

let tl = gsap.timeline({
  ease: "Power1.easeInOut",
  // repeat:3,
  // repeatDelay: 3,
});

tl.from('.Main_content span',{
  y:15,
  duration:0.8,
  stagger:0.2,
  opacity:0
})
.from('.content span',{
  y:15,
  duration:0.8,
  stagger:0.2,
  opacity:0
}, "-=0.5")










