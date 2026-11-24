const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userData = require('./data/userData');
const projectsData = require('./data/projectsData');
const skillsData = require('./data/skillsData');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: "Express.js Backend API წარმატებით მუშაობს!",
        endpoints: {
            method1_user: "/user (ან /api/user) - ინფორმაცია მომხმარებლის შესახებ",
            method2_projects: "/projects (ან /api/projects) - პროექტების მასივი",
            method3_skills: "/skills (ან /api/skills) - უნარების ჩამონათვალი"
        }
    });
});

app.get(['/user', '/api/user'], (req, res) => {
    res.json(userData);
});

app.get(['/projects', '/api/projects'], (req, res) => {
    const { category, search } = req.query;
    let result = [...projectsData];

    if (category) {
        result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
        const q = search.toLowerCase();
        result = result.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }

    res.json(result);
});

app.get(['/projects/:id', '/api/projects/:id'], (req, res) => {
    const id = parseInt(req.params.id, 10);
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return res.status(404).json({ message: "პროექტი ვერ მოიძებნა" });
    }

    res.json(project);
});

app.get(['/skills', '/api/skills'], (req, res) => {
    res.json(skillsData);
});

app.use((req, res) => {
    res.status(404).json({
        error: "404 Not Found",
        message: `მისამართი ${req.originalUrl} ვერ მოიძებნა`,
        availableRoutes: ["/", "/user", "/projects", "/skills"]
    });
});

app.listen(port, () => {
    console.log(`Express სერვერი გაეშვა პორტზე ${port}`);
    console.log(`- GET /user       -> http://localhost:${port}/user`);
    console.log(`- GET /projects   -> http://localhost:${port}/projects`);
    console.log(`- GET /skills     -> http://localhost:${port}/skills`);
});
