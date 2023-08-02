const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loder() {
    let tl = gsap.timeline();

    tl
        .to(".page1", {
            y: "100vh",
            scale: 0.5,
            duration: 0,
        })
        .to(".page1", {
            y: "10vh",
            duration: 1,
            delay: 0.5,
        })
        .to(".page1", {
            y: "0vh",
            rotate: -360,
            scale: 1,
            duration: 0.6,
        })
}

// loder();

