const lunchOptions = Object.freeze([
  {
    name: "Margherita Pizza",
    image: "assets/food-icons/pizza.svg",
    alt: "A freshly baked margherita pizza",
  },
  {
    name: "Salmon Sushi",
    image: "assets/food-icons/sushi.svg",
    alt: "A plate of salmon sushi rolls",
  },
  {
    name: "Garden Burger",
    image: "assets/food-icons/burger.svg",
    alt: "A garden burger with fresh vegetables",
  },
  {
    name: "Rainbow Grain Bowl",
    image: "assets/food-icons/grain-bowl.svg",
    alt: "A colorful grain bowl with vegetables",
  },
  {
    name: "Street Tacos",
    image: "assets/food-icons/tacos.svg",
    alt: "Three street tacos with colorful toppings",
  },
  {
    name: "Creamy Tomato Pasta",
    image: "assets/food-icons/pasta.svg",
    alt: "A bowl of creamy tomato pasta",
  },
]);

const lunchImage = document.querySelector("#lunch-image");
const lunchName = document.querySelector("#lunch-name");
const generateButton = document.querySelector("#generate-button");

let currentIndex = -1;

function getRandomLunchIndex() {
  return Math.floor(Math.random() * lunchOptions.length);
}

function createFallbackImage(label) {
  const safeLabel = label.replace(/[&<>'"]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">
      <rect width="640" height="480" fill="#f4ead8"/>
      <circle cx="320" cy="220" r="130" fill="#ffffff" stroke="#e6653d" stroke-width="12"/>
      <circle cx="275" cy="205" r="12" fill="#9db79f"/>
      <circle cx="365" cy="205" r="12" fill="#9db79f"/>
      <path d="M265 260c35 34 75 34 110 0" fill="none" stroke="#e6653d" stroke-width="12" stroke-linecap="round"/>
      <text x="320" y="405" text-anchor="middle" fill="#26332b" font-family="Arial, sans-serif" font-size="28">${safeLabel}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showRandomLunch() {
  const nextIndex = getRandomLunchIndex();
  const lunch = lunchOptions[nextIndex];

  currentIndex = nextIndex;
  lunchImage.classList.remove("is-changing");
  // Reading offsetWidth restarts the short reveal animation on repeated clicks.
  void lunchImage.offsetWidth;

  lunchImage.src = lunch.image;
  lunchImage.alt = lunch.alt;
  lunchImage.dataset.lunchIndex = String(nextIndex);
  lunchImage.classList.add("is-changing");
  lunchName.textContent = lunch.name;
  lunchName.dataset.lunchIndex = String(nextIndex);
}

lunchImage.addEventListener("error", () => {
  const lunch = lunchOptions[currentIndex];
  lunchImage.src = createFallbackImage(lunch?.name ?? "Lunch idea");
});

generateButton.addEventListener("click", showRandomLunch);

showRandomLunch();
