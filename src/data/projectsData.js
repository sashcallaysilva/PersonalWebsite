// src/data/projectsData.js
export const projectsData = [
  {
    title: "City Identification via Celestial Image Classification",
    role: "Co-author",
    date: "03/2025 — 05/2025",
    technologies: ["Python", "PyTorch", "ResNet18", "NumPy", "Matplotlib"],
    description: [
      "Co-developed and fine-tuned a ResNet18 CNN to classify geographic location from stereographic star-field projections, achieving 95.25% precision and 100% Top-3 accuracy across 20 U.S. cities.",
      "Engineered two synthetic datasets, totaling over 2700 images, using custom Python pipelines for sky rendering and augmentation with simulated cloud cover, blur, and light pollution.",
      "Implemented preprocessing, normalization, and transfer learning for high-dimensional celestial data, evaluated performance using confusion matrices, F1-scores, and precision-recall metrics.",
      "Demonstrated proof-of-concept for AI-based celestial navigation in a five-page report, highlighting machine learning’s potential in spatial reasoning and visual inference."
    ],
    image: "project-1.gif",
    github: "https://github.com/YourUsername/CelestialImageClassification"
  },
  {
    title: "Predicting Professor Ratings Using Regression Models",
    role: "Author",
    date: "02/2025 — 04/2025",
    technologies: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib"],
    description: [
      "Developed predictive models to estimate University of Maryland professor ratings from over 37,000 PlanetTerp platform reviews, integrating text sentiment, keyword frequencies, and grading data across 4,100+ professors.",
      "Engineered professor-level features using sentiment analysis (VADER), one-hot keyword encoding, and Principal Component Analysis (PCA) to reduce dimensionality and eliminate redundancy.",
      "Trained and validated multiple regression models with 10-fold cross-validation and weighing total reviews plus longevity, achieving a best Mean R² of 0.785 and Mean RMSE of 0.452 using Ridge Regression.",
      "Identified sentiment intensity and frequent use of the keyword 'great' as strong predictors of high professor ratings (correlation ≈ +0.4)."
    ],
    image: "project-2.png",
    github: "https://github.com/YourUsername/ProfessorRatingsPrediction"
  },
  {
    title: "Tabletop Companion App",
    role: "Co-developer",
    date: "02/2025 — 05/2025",
    technologies: ["Flutter", "Dart", "Android Studio", "Redis"],
    description: [
      "Developed the Rules/Stats page for a mobile companion app for tabletop RPGs, enabling users to view, add, edit, and delete custom characters with attributes, weapons, and inventory.",
      "Implemented local database support using sqflite to store character stats, default/custom character information, and ensure persistent state across sessions.",
      "Collaborated on multi-tab functionality, including grid-based map interaction and shake-to-roll dice simulator, supporting limited multiplayer (2-4 players) with shared game state via Redis.",
      "Enhanced user experience with ergonomic UI design, scrollable stat pages, interactive character tiles, and summary popups for quick stat access.",
      "Tested and debugged app functionality using Android Studio emulators to ensure seamless navigation and performance across devices."
    ],
    image: "project-3.jpg",
    github: "https://github.com/YourUsername/TabletopCompanionApp"
  }
];
