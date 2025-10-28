const bottles = [
    {
        img: "./images/Bottle1.png",
        bg: "radial-gradient(circle, #49d176 0%, #1a7a3f 100%)",
        title: "Nature’s Sip",
        desc: "Crafted from nature's finest, each bottle blends pure ingredients with vibrant flavor — made to refresh your body and awaken your senses.",
        mainText: "JUICY",
        textColor: "#ffffff"
    },
    {
        img: "./images/Bottle2.png",
        bg: "radial-gradient(circle, #f7d154 0%, #d69e1a 100%)",
        title: "Pineapple Splash",
        desc: "Bright, zesty, and full of energy — a burst of sunshine in every sip.",
        mainText: "ZE ST",
        textColor: "#fff7cc"
    },
    {
        img: "./images/Bottle3.png",
        bg: "radial-gradient(circle, #f55b5b 0%, #b81d1d 100%)",
        title: "Berry Bliss",
        desc: "Sweet and tangy — refresh your mood with the taste of ripe berries.",
        mainText: "SWEET",
        textColor: "#ffe0e0"
    },
    {
        img: "./images/Bottle4.png",
        bg: "radial-gradient(circle, #d15bf5ff 0%, #b81db0ff 100%)",
        title: "Pure Bliss",
        desc: "Sweet and tangy — refresh your mood with the taste of ripe berries.",
        mainText: "BERRY",
        textColor: "#ffe0e0"
    }
];

let index = 0;
let isScrolling = false;


// Preload all bottle images
bottles.forEach(b => {
    const img = new Image();
    img.src = b.img;
});

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) index++;
    else index--;

    if (index < 0) index = bottles.length - 1;
    if (index >= bottles.length) index = 0;

    const bottle = document.getElementById("bottle");
    const hero = document.querySelector(".hero");
    const title = document.getElementById("flavorTitle");
    const desc = document.getElementById("flavorDesc");
    const mainText = document.getElementById("mainText");

    // Start transition out
    bottle.style.opacity = 0;
    bottle.style.transform = "translate(-50%, -60%) rotate(-10deg)";
    title.style.opacity = 0;
    desc.style.opacity = 0;
    mainText.style.opacity = 0;
    mainText.style.transform = "translateY(40px) scale(1.1)";

    setTimeout(() => {
        const bottleData = bottles[index];
        const tempImg = new Image();
        tempImg.src = bottleData.img;

        tempImg.onload = () => {
            bottle.src = bottleData.img;
            hero.style.background = bottleData.bg;
            title.textContent = bottleData.title;
            desc.textContent = bottleData.desc;
            mainText.textContent = bottleData.mainText;
            mainText.style.color = bottleData.textColor;

            // Fade in new content
            bottle.style.opacity = 1;
            bottle.style.transform = "translate(-50%, -50%) rotate(0deg)";
            title.style.opacity = 1;
            desc.style.opacity = 1;
            mainText.style.opacity = 1;
            mainText.style.transform = "translateY(0) scale(1)";
        };
    }, 400);


    setTimeout(() => (isScrolling = false), 1000);
});
