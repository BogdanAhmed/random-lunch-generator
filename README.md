# 🍽️ Random Lunch Menu Generator

Tired of deciding what to eat for lunch? This small web app makes the choice for you by pairing one randomly selected lunch name with its matching illustration. It is a dependency-free Week 1 homework project built with HTML, CSS, and JavaScript.

## ✨ Features

- **Randomized selection:** Each result is selected with JavaScript's `Math.random()`.
- **Correct visual pairing:** Every lunch name and image live together in the same data object.
- **Reliable local images:** Nine custom SVG illustrations are included in the repository, with an in-app fallback if an asset cannot load.
- **Thoughtful reveal:** Each new pick shows a short `Thinking…` pause with a spinning wheel of dots.
- **Generate again:** The button can be clicked as often as needed, and the same lunch will not appear twice in a row.
- **Responsive and accessible:** The layout works on desktop and mobile, with semantic markup, useful alternative text, keyboard focus styles, and reduced-motion support.

## 🚀 Live Demo

The application is published with GitHub Pages:

👉 **[Open the Random Lunch Generator](https://bogdanahmed.github.io/random-lunch-generator/)** 👈

## 🛠️ How It Works

The core logic is simple:

1. `script.js` stores nine lunch objects. Each object contains a name, local image path, and alternative text.
2. A random lunch is shown immediately when the page loads.
3. When the user selects **Pick another lunch**, the result enters an accessible busy state and displays `Thinking…` with a dot spinner for 800 milliseconds.
4. `Math.random()` creates a random value, which is converted into a valid array index with `Math.floor()` while avoiding an immediate repeat.
5. The name, image source, alternative text, and matching index are updated together in the page.
6. If a local image cannot load, the error handler displays a generated SVG fallback instead of a broken image.

## 📁 Project Structure

```text
random-lunch-generator/
├── index.html                # Semantic page structure
├── style.css                 # Responsive layout and visual design
├── script.js                 # Lunch data and random selection logic
├── assets/
│   └── food-icons/           # Nine bundled SVG lunch illustrations
└── README.md                 # Project documentation
```

## 🧩 Installation & Local Development

No packages or build tools are required.

1. Download or clone the project files.
2. Navigate to the project directory:

   ```bash
   cd random-lunch-generator
   ```

3. Open `index.html` directly in a modern web browser.

You can also serve the folder locally with any static file server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 🎯 How to Use

1. Open the application.
2. A random lunch idea appears immediately.
3. Select **Pick another lunch** and wait briefly while the next idea is chosen.
4. Repeat until something sounds delicious.

## 🤝 Contributing

Suggestions and improvements are welcome. To add a lunch option, place its image in `assets/food-icons/` and add a matching object to the `lunchOptions` array in `script.js`.

If this project is published to GitHub later, contributions can follow the usual fork, feature branch, commit, and pull request workflow.

## 📝 License

No license has been selected for this homework project. All included SVG lunch illustrations were created specifically for this project.

## 🙏 Acknowledgments

- Inspired by the eternal question: “What should I have for lunch?”
- README structure adapted from the professor's Week 1 assignment template.
