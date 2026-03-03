// src/data/projectsData.js
export const projectsData = [
  {
    title: "City Identification via Celestial Image Classification",
    title_es: "Identificación de Ciudades mediante Clasificación Celestial",
    role: "Co-author",
    role_es: "Coautor",
    date: "03/2025 — 05/2025",
    technologies: ["Python", "PyTorch", "ResNet18", "NumPy", "Matplotlib"],
    description: [
      "Co-developed and fine-tuned a ResNet18 CNN to classify geographic location from stereographic star-field projections, achieving 95.25% precision and 100% Top-3 accuracy across 20 U.S. cities.",
      "Engineered two synthetic datasets, totaling over 2700 images, using custom Python pipelines for sky rendering and augmentation with simulated cloud cover, blur, and light pollution.",
      "Implemented preprocessing, normalization, and transfer learning for high-dimensional celestial data, evaluated performance using confusion matrices, F1-scores, and precision-recall metrics.",
      "Demonstrated proof-of-concept for AI-based celestial navigation in a five-page report, highlighting machine learning’s potential in spatial reasoning and visual inference."
    ],
    description_es: [
      "Co-desarrolló y afinó una CNN ResNet18 para clasificar la ubicación geográfica a partir de proyecciones estereográficas del campo estelar, logrando un 95.25% de precisión y 100% de exactitud Top-3 en 20 ciudades de EE.UU.",
      "Diseñó dos conjuntos de datos sintéticos, con más de 2700 imágenes, usando pipelines personalizados en Python para renderizado del cielo y aumentación con nubes simuladas, desenfoque y contaminación lumínica.",
      "Implementó preprocesamiento, normalización y transferencia de aprendizaje para datos celestiales de alta dimensión, evaluando desempeño con matrices de confusión, F1-score y métricas de precisión-recall.",
      "Demostró un proof-of-concept para navegación celestial basada en IA en un informe de cinco páginas, destacando el potencial del aprendizaje automático en razonamiento espacial e inferencia visual."
    ],
    image: "project-1.gif",
    github: "https://github.com/sashcallaysilva/StereographicProjections"
  },
  {
    title: "Predicting Professor Ratings Using Regression Models",
    title_es: "Predicción de Calificaciones de Profesores usando Modelos de Regresión",
    role: "Author",
    role_es: "Autor",
    date: "02/2025 — 04/2025",
    technologies: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib"],
    description: [
      "Developed predictive models to estimate University of Maryland professor ratings from over 37,000 PlanetTerp platform reviews...",
      "Engineered professor-level features using sentiment analysis (VADER), one-hot keyword encoding, and PCA to reduce dimensionality.",
      "Trained and validated multiple regression models with 10-fold cross-validation, achieving best Mean R² of 0.785 and RMSE 0.452.",
      "Identified sentiment intensity and frequent use of 'great' as strong predictors of high professor ratings."
    ],
    description_es: [
      "Desarrolló modelos predictivos para estimar calificaciones de profesores de la Universidad de Maryland a partir de más de 37,000 reseñas en la plataforma PlanetTerp...",
      "Diseñó features a nivel profesor usando análisis de sentimiento (VADER), codificación one-hot de palabras clave y PCA para reducir dimensionalidad.",
      "Entrenó y validó múltiples modelos de regresión con cross-validation de 10 pliegues, logrando R² promedio de 0.785 y RMSE 0.452.",
      "Identificó intensidad de sentimiento y uso frecuente de 'great' como predictores fuertes de altas calificaciones de profesores."
    ],
    image: "project-2.png",
    github: "https://github.com/sashcallaysilva/ProfessorRatingsPrediction"
  },
  {
    title: "Tabletop Companion App",
    title_es: "Aplicación Complementaria para Juegos de Mesa",
    role: "Co-developer",
    role_es: "Co-desarrollador",
    date: "02/2025 — 05/2025",
    technologies: ["Flutter", "Dart", "Android Studio", "Redis"],
    description: [
      "Developed the Rules/Stats page for a mobile companion app for tabletop RPGs...",
      "Implemented local database support using sqflite to store character stats, default/custom character info, and ensure persistent state.",
      "Collaborated on multi-tab functionality and shared game state via Redis.",
      "Enhanced user experience with ergonomic UI design, interactive tiles, and summary popups.",
      "Tested and debugged app functionality using Android Studio emulators."
    ],
    description_es: [
      "Desarrolló la página de Reglas/Estadísticas para una aplicación complementaria de RPG de mesa...",
      "Implementó soporte de base de datos local usando sqflite para guardar estadísticas de personajes, información por defecto/personalizada y asegurar persistencia del estado.",
      "Colaboró en funcionalidad multi-pestaña y compartición del estado del juego vía Redis.",
      "Mejoró la experiencia del usuario con diseño UI ergonómico, tiles interactivos y popups resumen.",
      "Probó y depuró la funcionalidad de la app usando emuladores de Android Studio."
    ],
    image: "project-3.jpg",
    github: "https://github.com/sashcallaysilva/TabletopCompanionApp"
  }
];