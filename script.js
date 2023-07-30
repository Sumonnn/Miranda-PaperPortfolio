const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loder() {
    let tl = gsap.timeline();

    tl
        .to(".main", {
            y: "100vh",
            scale: 0.4,
            duration: 0,
        })
        .to(".main", {
            y: "-60vh",
            duration: 1,
            delay: 0.5,
        })
        .to(".main", {
            y: 0,
            rotate: 360,
            scale: 1,
            duration: 0.6,
        })
}

// loder();

