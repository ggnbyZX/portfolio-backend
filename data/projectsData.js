const projectsData = [
  {
    id: 1,
    title: "პერსონალური პორტფოლიო ვებსაიტი",
    description: "სემანტიკური HTML5-ით, Tailwind CSS-ითა და რესპონსიული დიზაინით აგებული მრავალგვერდიანი პორტფოლიო.",
    category: "frontend",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Font Awesome"],
    featured: true,
    githubUrl: "https://github.com/ggnbyZX/Portfoil",
    liveDemoUrl: "https://ggnbyzx.github.io/Portfoil/",
    createdAt: "2026-11-13"
  },
  {
    id: 2,
    title: "თანამშრომლების მართვა & REST API",
    description: "JSONPlaceholder API ინტეგრაცია: GET /users, POST /users, GET /users/{id}/todos და DELETE ოპერაციები რეალურ დროში ძებნით.",
    category: "webapp",
    technologies: ["JavaScript", "Fetch API", "REST API", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/ggnbyZX/Portfoil",
    liveDemoUrl: "https://ggnbyzx.github.io/Portfoil/team.html",
    createdAt: "2026-11-18"
  },
  {
    id: 3,
    title: "React & TypeScript პორტფოლიო",
    description: "პორტფოლიოს მოდულარული კომპონენტური არქიტექტურა React 18-ით, TypeScript-ითა და Vite-ით.",
    category: "react",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/ggnbyZX/Portfoil",
    liveDemoUrl: null,
    createdAt: "2026-11-12"
  },
  {
    id: 4,
    title: "Express.js REST API Backend",
    description: "Node.js და Express.js სერვერი პორტფოლიოს მონაცემების მისაწოდებლად სამი GET მეთოდითა და CORS მხარდაჭერით.",
    category: "backend",
    technologies: ["Node.js", "Express.js", "REST API", "CORS"],
    featured: true,
    githubUrl: "https://github.com/ggnbyZX/portfolio-backend",
    liveDemoUrl: null,
    createdAt: "2026-11-24"
  }
];

module.exports = projectsData;
