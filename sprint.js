var slides = [
    { src: "https://live.staticflickr.com/65535/54744571789_2f051166b4.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54744574009_8244a563d8_z.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54746878805_5b9f4eed71_z.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54744700985_031c1c0a20_w.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54746747278_b400a23063_z.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54707981879_03f07197fb_z.jpg", title: "", caption: "" },
    { src: "https://live.staticflickr.com/65535/54676446026_a93c90012b_z.jpg", title: "", caption: "" }
];

var imgEl = document.getElementById("slide_pics");
var titleEl = document.getElementById("slide_title");
var captionEl = document.getElementById("slide_caption");
var nextBtn = document.querySelector("#silde .prev");
var prevBtn = document.querySelector("#slide .next");
var currentIndex = 0;

function nextSlide() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}