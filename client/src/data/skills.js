// src/data/skills.js
export const skillCategories = [
  {
    category: "Programming Languages",
    category_es: "Lenguajes de Programación",
    items: [
      { 
        name: "Python", 
        icon: "Python.png", 
        level: 90, 
        years: 3, 
        projects: ["Image Classification Proj.", "Rating Predictions Proj."],
        projects_es: ["Proyecto de Clasificación de Imágenes", "Proyecto de Predicción de Calificaciones"]
      },
      { 
        name: "JavaScript", 
        icon: "JavaScript.png", 
        level: 80, 
        years: 3
      },
      { name: "Java", icon: "Java.png", level: 75, years: 3 },
      { 
        name: "SQL", 
        icon: "SQL.png", 
        level: 80, 
        years: 3
      },
      { name: "C", icon: "C.png", level: 70, years: 2 },
      { 
        name: "HTML", 
        icon: "HTML.png", 
        level: 90, 
        years: 4
      },
      { 
        name: "CSS", 
        icon: "CSS.png", 
        level: 90, 
        years: 4
      },
      { 
        name: "Dart", 
        icon: "Dart.png", 
        level: 65, 
        years: 1, 
        projects: ["Tabletop Companion App"],
        projects_es: ["App Compañera de Juegos de Mesa"]
      }
    ]
  },
  {
    category: "Frameworks",
    category_es: "Frameworks",
    items: [
      { name: "React", icon: "React.png", level: 80, years: 1 },
      { name: "Node.js", icon: "NodeJS.png", level: 70, years: 1 },
      { name: "Express.js", icon: "ExpressJS.png", level: 70, years: 1 },
      { 
        name: "Firebase", 
        icon: "Firebase.png", 
        level: 65, 
        years: 2, 
        projects: ["Internship Experience"],
        projects_es: ["Experiencia de Prácticas"]
      },
      { 
        name: "Flutter", 
        icon: "Flutter.png", 
        level: 75, 
        years: 1, 
        projects: ["Tabletop Companion App"],
        projects_es: ["App Compañera de Juegos de Mesa"]
      },
      { name: "FFMPEG", icon: "FFMPEG.png", level: 70, years: 1, projects: ["Internship Experience"], projects_es: ["Experiencia de Prácticas"] }
    ]
  },
  {
    category: "Developer Tools",
    category_es: "Herramientas de Desarrollo",
    items: [
      { name: "PostgreSQL", icon: "PostgreSQL.png", level: 80, years: 2},
      { name: "MongoDB", icon: "MongoDB.png", level: 70, years: 1 },
      { name: "Git", icon: "Git.png", level: 80, years: 4, projects: ["Internship Experience"], projects_es: ["Experiencia de Prácticas"] },
      { name: "VSCode", icon: "VSCode.png", level: 90, years: 4, projects: ["Internship Experience"], projects_es: ["Experiencia de Prácticas"] },
      { name: "Jira", icon: "Jira.png", level: 65, years: 1, projects: ["Internship Experience"], projects_es: ["Experiencia de Prácticas"] },
      { name: "Figma", icon: "Figma.png", level: 55, years: 1, projects: ["Internship Experience"], projects_es: ["Experiencia de Prácticas"] }
    ]
  },
  {
    category: "Certifications",
    category_es: "Certificaciones",
    items: [
      { name: "AWS Cloud Practitioner", icon: "AWSCloudPractitioner.png", level: 100, years: 1 }
    ]
  }
];