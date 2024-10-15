

// Load footer content
let footerContent = `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </a>
            <span>©${new Date().getFullYear()} Khariza Viloria</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://github.com/kharizzakaye">
                    <image src="./images/icons/icon-github.svg" width="38" height="38" alt="Github icon link" />
                </a>
            </li>
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://www.linkedin.com/in/kharizzaviloria/">
                    <image src="./images/icons/icon-linkedin.svg" width="38" height="38" alt="Linkedin icon link" />
                </a>
            </li>
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://www.behance.net/kviloria">
                    <image src="./images/icons/icon-behance.svg" width="38" height="38" alt="Behance icon link" />
                </a>
            </li>
        </ul>
    </footer>
  `
document.querySelector("#footer").innerHTML = footerContent;








// gsap.registerPlugin(ScrollTrigger);

// let tl1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#subtitle-expertise",
//         start: "top 70%",
//         // end: "bottom 100px",
//         toggleActions: "play reverse play reverse",
//         markers: true,
        
//     },
// })

// tl1
//     .from("#subtitle-expertise", {
//         opacity: 0,
//         duration: 1,
//     })
//     .to("#subtitle-expertise", {
//         opacity: 1,
//         duration: 1,
//     });

// gsap.to("#expertise-cards-section", {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#expertise-cards-section",
//         start: "top 70%",
//         // end: "bottom 100px",
//         toggleActions: "play reverse play reverse",
//         markers: true,
        
//     },
// })

// gsap.to("#subtitle-projects", {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#subtitle-projects",
//         start: "top 70%",
//         // end: "bottom 100px",
//         toggleActions: "play reverse play reverse",
//         markers: true,
        
//     },
// })

// gsap.to("#project-cards-section", {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#project-cards-section",
//         start: "top 70%",
//         // end: "bottom 100px",
//         toggleActions: "play reverse play reverse",
//         markers: true,
        
//     },
// })

// gsap.to("#expertise-web-devt", {
//     scrollTrigger: {
//         trigger: "#expertise-web-devt", // element - can be a different element
       
//         toggleActions: "restart none reverse none",
//         // toggleActions: "play none none none", --> default
//         // toggleActions values: play, pause, resume, reverse, restart, reset. complete, none
//         // restart - restart each time

//         // start: "top center", // top of trigger element, center of viewport
//         // top, center, bottom
//         start: "20px 80%", //-> 20px from the top of the trigger element, 80% down from top of viewport

//         markers: true,

//         // end: "bottom 100px"
//         // end: "bottom top" -> end when bottom of element hits the top of viewport
//         // end: "+=300" -> end value relative to start value
//         end: () => "+=" + document.querySelector("#expertise-web-devt").offsetWidth, // for resizing screen sizes
//         // endTrigger: "#expertise-graphic-design"

//         // scrub: true,
//         scrub: 1, // 1 sec delay
//     },
//     x: 400,
//     rotation: 360,
//     duration: 2,
// })



// // use a timeline
// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#expertise-web-devt",
//         start: "top center",
//         markers: true,
//         end: "top 100px",
//         scrub: 1,
//         pin: true,
//     },
// })



// tl.to("#expertise-web-devt", {
//     x: 400,
//     rotation: 360,
//     duration: 2,
//     ease: "none",
// })






// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 90%",
//     end: "bottom 10%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     // onLeave: function () {
//     //   gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     // },
//     // onEnterBack: function () {
//     //   gsap.fromTo(
//     //     elem,
//     //     { y: -100, autoAlpha: 0 },
//     //     {
//     //       duration: 1.25,
//     //       y: 0,
//     //       autoAlpha: 1,
//     //       ease: "back",
//     //       overwrite: "auto"
//     //     }
//     //   );
//     // },
//     // onLeaveBack: function () {
//     //   gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     // }
//   });
// });
