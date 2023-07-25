const SCROLL_STEP = 5; // Ajustez la distance de défilement ici (en pixels)
const MAX_HEIGHT = 50; // Hauteur maximale du contenu
const MIN_HEIGHT = 950; // Hauteur minimale du contenu

let isScrollEnabled = false;
let animationFrameId;

function enableScroll() {
  isScrollEnabled = true;
}

function disableScroll() {
  isScrollEnabled = false;
}

function updateScrollPosition(deltaY) {
  if (!isScrollEnabled) return;

  const scrollContainer = document.querySelector(".scroll-container");
  const scrollContent = document.querySelector(".scroll-content");
  let currentPosition = parseFloat(getComputedStyle(scrollContent).transform.split(',')[5]) || 0;
  const newPosition = currentPosition - deltaY;

  // Vérifier les limites
  if (newPosition > MIN_HEIGHT - scrollContainer.offsetHeight && newPosition < MAX_HEIGHT) {
    scrollContent.style.transform = `translateY(${newPosition}px)`;
  }
}

function animateScroll() {
  if (isScrollEnabled) {
    updateScrollPosition(SCROLL_STEP);
    animationFrameId = requestAnimationFrame(animateScroll);
  }
}

document.addEventListener("wheel", (event) => {
  event.preventDefault();
  cancelAnimationFrame(animationFrameId);
  updateScrollPosition(event.deltaY);
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const key = event.key;

  if (key === "ArrowUp" || key === "ArrowDown") {
    const deltaY = key === "ArrowUp" ? SCROLL_STEP : -SCROLL_STEP;
    cancelAnimationFrame(animationFrameId);
    updateScrollPosition(deltaY);
  }
});

document.addEventListener("mouseenter", () => {
  animateScroll();
});

document.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationFrameId);
});
