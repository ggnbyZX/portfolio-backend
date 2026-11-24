const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userData = require('./data/userData');
const projectsData = require('./data/projectsData');
const skillsData = require('./data/skillsData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "კეთილი იყოს თქვენი მობრძანება პორტფოლიოს Express.js API-ზე!",
    status: "active",
    author: userData.fullName,
    endpoints: {
      user: {
        method: "GET",
        path: "/api/user",
        description: "აბრუნებს ინფორმაციას მომხმარებლის/დეველოპერის შესახებ"
      },
      projects: {
        method: "GET",
        path: "/api/projects",
        description: "აბრუნებს პროექტების მასივს (მხარდაჭერილია ?category= და ?search= ფილტრები)"
      },
      skills: {
        method: "GET",
        path: "/api/skills",
        description: "აბრუნებს ტექნიკური და პიროვნული უნარების ჩამონათვალს"
      },
      services: {
        method: "GET",
        path: "/api/services",
        description: "აბრუნებს შეთავაზებული სერვისების სიას"
      }
    }
  });
});

app.get('/api/user', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: userData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "მონაცემების მიღება ვერ მოხერხდა",
      error: error.message
    });
  }
});

app.get('/user', (req, res) => {
  res.redirect('/api/user');
});

app.get('/api/projects', (req, res) => {
  try {
    let result = [...projectsData];
    const { category, search, featured } = req.query;

    if (category) {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (featured !== undefined) {
      const isFeatured = featured === 'true';
      result = result.filter(p => p.featured === isFeatured);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    res.status(200).json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "პროექტების წამოღება ვერ მოხერხდა",
      error: error.message
    });
  }
});

app.get('/projects', (req, res) => {
  res.redirect('/api/projects');
});

app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: `პროექტი ID-ით ${req.params.id} ვერ მოიძებნა`
    });
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

app.get('/api/skills', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        technicalSkills: skillsData.technicalSkills,
        softSkills: skillsData.softSkills
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "უნარების წამოღება ვერ მოხერხდა",
      error: error.message
    });
  }
});

app.get('/skills', (req, res) => {
  res.redirect('/api/skills');
});

app.get('/api/services', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: skillsData.services.length,
      data: skillsData.services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "სერვისების წამოღება ვერ მოხერხდა",
      error: error.message
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `მოთხოვნილი მისამართი (${req.originalUrl}) ვერ მოიძებნა`,
    availableEndpoints: ["/", "/api/user", "/api/projects", "/api/skills", "/api/services"]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Express სერვერი წარმატებით გაეშვა მისამართზე: http://localhost:${PORT}`);
  console.log(`📡 GET ენდფოინთები:`);
  console.log(`   - მომხმარებელი: http://localhost:${PORT}/api/user`);
  console.log(`   - პროექტები:    http://localhost:${PORT}/api/projects`);
  console.log(`   - უნარები:       http://localhost:${PORT}/api/skills`);
  console.log(`   - სერვისები:     http://localhost:${PORT}/api/services`);
});
