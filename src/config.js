module.exports = {
    navLinks: [
        {
            name: "Home",
            url: "#home",
        },
        {
            name: "About",
            url: "#about",
        },
        {
            name: "Jobs",
            url: "#jobs",
        },
        {
            name: "Projects",
            url: "#projects",
        },
    ],
    srConfig: (delay = 200) => ({
        delay,
        distance: '20px',
        duration: 500,
        easing: 'ease-in',
        // reset: false,
        opacity: 0,
        viewFactor: 0.25,
    }),
}