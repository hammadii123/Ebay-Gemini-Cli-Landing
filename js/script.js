document.addEventListener("DOMContentLoaded", function() {

    // --- Smooth Scrolling with Lenis ---
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // --- Hero Section Animation ---
    const tl = gsap.timeline();
    tl.from("nav a, nav .flex-items-center", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    .from(".left-col > div:nth-child(2) > div:first-child", { // Trusted Users
        y: 40,
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".left-col h1", {
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".left-col p", {
        y: 40,
        opacity: 0,
        duration: 1
    }, "-=0.7")
    .from(".left-col .mt-8 a", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.7")
    .from(".left-col .mt-20", {
        y: 40,
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".right-col", {
        opacity: 0,
        duration: 1.5,
        scale: 1.05
    }, "-=1.5")
    .from(".absolute.bottom-12.right-12 .flex.gap-4 > div", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.8");

    // --- Partners Section ---
    gsap.from(".container.mx-auto.flex.justify-around.items-center img", {
        scrollTrigger: {
            trigger: ".container.mx-auto.flex.justify-around.items-center",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
        },
        y: 30,
        opacity: 0,
        stagger: 0.15
    });

    // --- Horizontal Scroll Section ---
    let track = document.getElementById("horizontal-track");
    let container = document.getElementById("horizontal-scroll-container");

    let tween = gsap.to(track, {
        x: () => -(track.scrollWidth - container.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "center center",
            end: () => "+=" + (track.scrollWidth - container.clientWidth),
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
        },
    });

    // Animate cards within horizontal scroll
    gsap.from("#horizontal-track .card", {
        scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "top top",
            scrub: 2,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1
    });

    // --- Reviews Section ---
    gsap.from("#catalogue .review-card", {
        scrollTrigger: {
            trigger: "#catalogue",
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // --- CTA and Footer Sections ---
    gsap.from("#solutions h2, #solutions p, #solutions div", {
        scrollTrigger: {
            trigger: "#solutions",
            start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from("footer div > div", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
    });
});
