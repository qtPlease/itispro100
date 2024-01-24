// cursor selector blinking on the ad window

document.querySelector("#blink").animate(
    [{opacity: 1}, {opacity: 0.1}],
    {
        duration: 450,
        easing: "ease-in",
        iterations: Infinity,
        direction: "alternate",
    },
);