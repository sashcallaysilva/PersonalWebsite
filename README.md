# Repo Structure
```bash
my-portfolio/
│
├── client/                     # React + Vite frontend (Vercel)
│   ├── public/
│   │   ├── favicon/            # website logo
│   │   ├── assets/            # images, icons
│   │   │   ├── logos/
│   ├── src/
│   │   ├── assets/            # images, icons
│   │   ├── components/        # reusable UI components
│   │   ├── data/
│   │   ├── pages/             # route-level pages
│   │   │   ├── About.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   ├── ExperiencePage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── BlogPost.jsx
│   │   ├── services/          # API calls (VERY important)
│   │   │   └── api.js
│   │   ├── routes/             # custom React hooks (optional)
│   │   ├── styles/             # helper functions
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx        
│   │
│   ├── .env                   # VITE_API_URL
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Express backend (AWS EC2)
│   ├── src/
│   │   ├── config/            # DB connection, env config
│   │   │   └── db.js
│   │   │
│   │   ├── models/            # Mongoose schemas
│   │   │   ├── Blog.js
│   │   │   └── Comment.js
│   │   │
│   │   ├── controllers/       # business logic
│   │   │   └── blogController.js
│   │   │
│   │   ├── routes/            # API routes
│   │   │   └── blogRoutes.js
│   │   │
│   │   ├── middleware/        # optional (logging, errors)
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── utils/             # helpers (slugify, etc.)
│   │   │   └── slugify.js
│   │   │
│   │   └── server.js          # entry point
│   │
│   ├── .env                   # MONGO_URI, PORT
│   ├── package.json
│   └── ecosystem.config.js    # PM2 config (optional)
│
├── shared/                    # OPTIONAL (nice touch)
│   ├── constants/             # shared values (routes, etc.)
│   └── types/                 # if you later add TypeScript
│
├── README.md
├── .gitignore
└── package.json               # optional root scripts
```