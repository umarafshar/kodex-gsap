document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    // gsap code here!


    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.feature',
            // pin: true, // pin the trigger element while active
            start: '0% 50%', // when the top of the trigger hits the top of the viewport
            end: '0% 0', // end after scrolling 500px beyond the start
            // markers: true,
            scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    })

    let split = new SplitText(".about__content", {
        type: "chars",
        mask: "chars",
    });


    tl.from(split.chars, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.05,
        // ease: "bounce.out",
        ease: 'back.out(1.7)',
    })


    let tl2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.main',
            pin: true, // pin the trigger element while active
            start: '50% 50%', // when the top of the trigger hits the top of the viewport
            end: '150% 0', // end after scrolling 500px beyond the start
            // markers: true,
            scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    })


    tl2.to('.card-1', {
        top: '10%',
        // left: '50%',
        // tranform: 'translate(-50%, -50%)',
    })


        .to('.card-2', {
            top: '10%',
            // left: '50%',
            // tranform: 'translate(-50%, -50%)',
            
        }, 'first')

        .to('.card-1', {
            scale: 0.7,
            transform: 'rotateX(45deg) rotateZ(15deg)',
            rotate: '8deg',
            opacity: 0,
        }, 'first')

        .to('.card-3', {
            top: '10%',
            // left: '50%',
            // tranform: 'translate(-50%, -50%)',
        }, 'senond')

        .to('.card-2', {
            scale: 0.7,
            transform: 'rotateX(45deg) rotateZ(15deg)',
            rotate: '8deg',
            opacity: 0,
        }, 'senond')

        .to('.card-4', {
            top: '10%',
            // left: '50%',
            // tranform: 'translate(-50%, -50%)',
        }, 'third')
        .to('.card-3', {
            scale: 0.7,
            transform: 'rotateX(45deg) rotateZ(15deg)',
            rotate: '8deg',
            opacity: 0,
        }, 'third')

        .to('.card-4', {
            scale: 0.3,
            // transform: 'rotateY(360deg)',
            rotate: '-45deg',
            opacity: .5,
        });

});
