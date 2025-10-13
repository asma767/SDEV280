var slides = [
    { src: "https://live.staticflickr.com/65535/54746751923_2514477b77_z.jpg", title: "The Final Throw", caption: "A contestant from TerRon 2023 displays her disc golf skills in the final stretch of the tournament." },
    { src: "https://live.staticflickr.com/65535/54744574009_8244a563d8_z.jpg", title: "TerRon Open", caption: "Competitors prepare for their round at the TerRon Open, set against the scenic fairways of Lake Fenwick Park." },
    { src: "https://live.staticflickr.com/65535/54746751058_7c00077966_z.jpg", title: "TerRon Open", caption: "Focused play and friendly competition highlight the spirit of the TerRon Open." },
    { src: "https://live.staticflickr.com/65535/54746747278_b400a23063_z.jpg", title: "TerRon Open", caption: "Players make their way to the next tee at the TerRon Open." },
    { src: "https://live.staticflickr.com/65535/54707981879_03f07197fb_z.jpg", title: "TerRon Open", caption: "Two disc golfers share a light moment during play at the TerRon Open" },
    { src: "https://live.staticflickr.com/65535/54676446026_a93c90012b_z.jpg", title: "2025 Junior", caption: "Junior players show teamwork, focus, and enthusiasm as they take on the course at the TerRon Open." },
    { src: "https://live.staticflickr.com/65535/54746751433_5c5858f70e_z.jpg", title: "2025 AM Pre-Event", caption: "Amateur competitors warm up and prepare for an exciting day of disc golf at the TerRon Open Pre-Event." },
    { src: "https://live.staticflickr.com/65535/54744573709_25e6b7ed4f_z.jpg", title: "TerRon Open", caption: "Athletes demonstrate precision and control on the course during the TerRon Open." },
    { src: "https://live.staticflickr.com/65535/54744564173_d1b5b0c9ec_z.jpg", title: "2025 Am Pre Event", caption: "Disc golfers walking toward the next hole at Lake Fenwick Park." },
    { src: "https://live.staticflickr.com/65535/54744574044_ccd6a04982.jpg", title: "2025 Am Pre Event", caption: "Players take in the course scenery and prepare for their next round at the 2025 Am Pre-Event." },
    { src: "https://live.staticflickr.com/65535/54707972548_1b4761e348.jpg", title: "TerRon Open", caption: "Action from the fairways — competitors give their all at the TerRon Open." },
    { src: "https://live.staticflickr.com/65535/54676686104_ce7c216208.jpg", title: "2025 Juniors", caption: "The junior team represents the next generation of disc golfers — full of skill, energy, and passion for the sport." }
];
var imgEl = document.getElementById("slide_pic");
var titleEl = document.getElementById("slide_title");
var captionEl = document.getElementById("slide_caption");
var prevBtn = document.querySelector("#slide .nav_prev");
var nextBtn = document.querySelector("#slide .nav_next");
var currentIndex = 0;


//function that shows one slide on the page.
function showSlide(index) {
    var s = slides[index];
    imgEl.src = s.src;
    imgEl.alt = s.title || "Event photo";
    titleEl.textContent = s.title || "";
    captionEl.textContent = s.caption || "";
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
showSlide(currentIndex);