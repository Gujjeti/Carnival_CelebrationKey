

let tl = gsap.timeline({
  ease: "Power1.easeInOut",
  // repeat:3,
  // repeatDelay: 3,
});

tl.from('.content span',{
  y:10,
  duration:0.8,
  stagger:0.2,
  opacity:0
})

.from('.Carnival_logo img',{
  y:10,
  duration:0.8,
  stagger:0.2,
  opacity:0
}, "-=1.6")











