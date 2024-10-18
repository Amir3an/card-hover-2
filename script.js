const show1 = document.querySelector(".flex1");
const show2 = document.querySelector(".flex2");
const show3 = document.querySelector(".flex3");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

img1.addEventListener("mouseover" , () => {
    show1.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show1.style.transform = "translateY(-110px)";
        img1.style.overflow = "initial";
    }, 500)
});

img1.addEventListener("mouseout" , () => {
    show1.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show1.style.transform = "translateY(0px)";
        img1.style.overflow = "hidden";
    }, 500)
});

img2.addEventListener("mouseover" , () => {
    show2.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show2.style.transform = "translateY(-110px)";
        img2.style.overflow = "initial";
    }, 500)
});

img2.addEventListener("mouseout" , () => {
    show2.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show2.style.transform = "translateY(0px)";
        img2.style.overflow = "hidden";
    }, 500)
});

img3.addEventListener("mouseover" , () => {
    show3.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show3.style.transform = "translateY(-110px)";
        img3.style.overflow = "initial";
    }, 500)
});

img3.addEventListener("mouseout" , () => {
    show3.style.transform = "translateY(-165px)";
    setTimeout(() => {
        show3.style.transform = "translateY(0px)";
        img3.style.overflow = "hidden";
    }, 500)
});