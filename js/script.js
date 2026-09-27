const tlIntro = gsap.timeline({});
const tlHero = gsap.timeline({
    paused: true
});

tlIntro.from("h1", {
   opacity: 0,
   scale: 50,
   ease: "bounce.out",
   duration: 2
})

.from(".btn-intro", {
   scale: 0,
   opacity: 0,
   ease: "power4.out",
   duration: 1
})



tlHero.to("h1", {
    opacity: 0,
    x: '-100%',
    ease: "elastic.out(1, 1)",
    duration: 1
})

tlHero.to(".btn-intro", {
    opacity: 0,
    scale: 300,
    duration: 4,
    pointerEvents: "none"
})

.to('.screen-intro', {
    pointerEvents: "none"
})



.from("h1, h2, h3, p, .btn-hero", {
   x: '-100%',
   opacity: 0,
   stagger: 0.3,
   ease: "power1.out",
})

.from (".burger" , {
    scale: 0.8,
    opacity: 0,
    rotate: -150,
  
})

.to(".burger", {
    scale: 1.03,
    ease: "power4.inOut",
    reapeat: -1,
    yoyo: true,
    duration: 3
})

.to(".smoke",{
    opacity: 1,
    y: -150,
    duration: 15,
    filter: "blur(5px)",
    reapeat: -1
},'<')

const btnIntro = document.querySelector(".btn-intro");

btnIntro.addEventListener("click", function() {
    tlHero.play();
})








