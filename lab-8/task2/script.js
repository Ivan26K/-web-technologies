function createSlider(config = {}) {
    const {
        images = [],
        duration = 500,
        autoplay = false,
        showArrows = true,
        showDots = true,
    } = config;

    const slider = document.getElementById("slider");
    slider.innerHTML = '';

    const track = document.createElement("div");
    track.className = "slider-track";

    images.forEach(src => {
        const slide = document.createElement("div");
        slide.className = "slide";
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "100%";
        slide.appendChild(img);
        track.appendChild(slide);
    });

    slider.appendChild(track);

    let index = 0;
    let interval;

    function updateSlider() {
        track.style.transitionDuration = duration + 'ms';
        track.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    }

    function startAutoplay() {
        if (autoplay) {
            interval = setInterval(nextSlide, duration + 1000);
        }
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    if (showArrows) {
        const arrows = document.createElement("div");
        arrows.className = "slider-arrows";
        arrows.innerHTML = `
      <button class="prev">&#8592;</button>
      <button class="next">&#8594;</button>
    `;
        slider.appendChild(arrows);
        arrows.querySelector(".prev").onclick = prevSlide;
        arrows.querySelector(".next").onclick = nextSlide;
    }

    let dots;
    if (showDots) {
        dots = document.createElement("div");
        dots.className = "slider-dots";
        images.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.onclick = () => {
                index = i;
                updateSlider();
            };
            dots.appendChild(dot);
        });
        slider.appendChild(dots);
    }




    function updateDots() {
        if (!dots) return;
        dots.querySelectorAll("span").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);

    updateSlider();
    startAutoplay();
}

// Ініціалізація
createSlider({
    images: [
        "https://picsum.photos/id/1015/800/400",
        "https://picsum.photos/id/1016/800/400",
        "https://picsum.photos/id/1018/800/400",
    ],
    duration: 600,
    autoplay: true,
    showArrows: true,
    showDots: true,
});
