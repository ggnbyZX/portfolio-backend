# Express.js Portfolio Backend API

პორტფოლიოს ბექენდ სერვერი შექმნილია **Node.js**-ისა და **Express.js**-ის გამოყენებით.  
სერვერი აბრუნებს მონაცემებს JSON ფორმატში და აღჭურვილია CORS მხარდაჭერით, რაც საშუალებას აძლევს ნებისმიერ ფრონტენდ აპლიკაციას (React, HTML/JS) შეუფერხებლად მიიღოს ინფორმაცია.

---

## 🚀 ტექნოლოგიური სტეკი

*   **Node.js** — სერვერული JavaScript გარემო
*   **Express.js (v5)** — ვებ ფრეიმვორკი REST API-სთვის
*   **CORS** — Cross-Origin Resource Sharing მხარდაჭერა
*   **Dotenv** — გარემოს ცვლადების (Environment Variables) მართვა
*   **Nodemon** — დეველოპმენტ რეჟიმში სერვერის ავტომატური გადატვირთვა

---

## 📦 ინსტალაცია და გაშვება

### 1. დამოკიდებულებების (Dependencies) ინსტალაცია:
```bash
npm install
```

### 2. სერვერის გაშვება:

*   **სტანდარტული გაშვება:**
    ```bash
    npm start
    ```
*   **დეველოპმენტ რეჟიმში (ავტომატური გადატვირთვით):**
    ```bash
    npm run dev
    ```

სერვერი გაეშვება მისამართზე: **`http://localhost:5000`**

---

## 📡 REST API ენდფოინთები (GET მეთოდები)

### 1. ინფორმაცია მომხმარებლის/დეველოპერის შესახებ
*   **მეთოდი:** `GET`
*   **მისამართი:** `/api/user` (ან `/user`)
*   **აღწერა:** აბრუნებს დეველოპერის პერსონალურ ინფორმაციას, ბიოგრაფიას, საკონტაქტო რეკვიზიტებსა და სოციალურ ბმულებს.
*   **პასუხის ნიმუში (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "საბა",
    "fullName": "საბა ამირანაშვილი",
    "role": "Junior Web Developer & Frontend Enthusiast",
    "bio": "მოგესალმებით! მე ვარ საბა — ტექნოლოგიებითა და ვებ-დეველოპმენტით გატაცებული დეველოპერი...",
    "location": "თბილისი, საქართველო",
    "email": "saba.amiranashvilite05@geolab.edu.ge",
    "phone": "+995 555 12 34 56",
    "status": "ღია ვარ სტაჟირებისა და ახალი გამოწვევებისთვის",
    "socialLinks": {
      "github": "https://github.com/ggnbyZX",
      "portfolio": "https://ggnbyzx.github.io/Portfoil/",
      "linkedin": "https://linkedin.com",
      "dribbble": "https://dribbble.com"
    }
  }
}
```

---

### 2. პროექტების მასივი
*   **მეთოდი:** `GET`
*   **მისამართი:** `/api/projects` (ან `/projects`)
*   **აღწერა:** აბრუნებს შესრულებული პროექტების სრულ ჩამონათვალს. მხარდაჭერილია ფილტრაცია კატეგორიით (`?category=frontend`) ან ძიება (`?search=api`).
*   **პასუხის ნიმუში (200 OK):**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "title": "პერსონალური პორტფოლიო ვებსაიტი",
      "description": "სემანტიკური HTML5-ით, Tailwind CSS-ითა და რესპონსიული დიზაინით აგებული მრავალგვერდიანი პორტფოლიო.",
      "category": "frontend",
      "technologies": ["HTML5", "Tailwind CSS", "JavaScript", "Font Awesome"],
      "githubUrl": "https://github.com/ggnbyZX/Portfoil",
      "liveDemoUrl": "https://ggnbyzx.github.io/Portfoil/"
    },
    {
      "id": 2,
      "title": "თანამშრომლების მართვა & REST API",
      "description": "JSONPlaceholder API ინტეგრაცია: GET, POST, DELETE ოპერაციები რეალურ დროში ძებნით.",
      "category": "webapp",
      "technologies": ["JavaScript", "Fetch API", "REST API", "Tailwind CSS"],
      "githubUrl": "https://github.com/ggnbyZX/Portfoil",
      "liveDemoUrl": "https://ggnbyzx.github.io/Portfoil/team.html"
    }
  ]
}
```

---

### 3. უნარები და კომპეტენციები (მესამე მეთოდი)
*   **მეთოდი:** `GET`
*   **მისამართი:** `/api/skills` (ან `/skills`)
*   **აღწერა:** აბრუნებს ტექნიკური უნარების დონეებსა და პიროვნულ კომპეტენციებს (Soft Skills).
*   **პასუხის ნიმუში (200 OK):**
```json
{
  "success": true,
  "data": {
    "technicalSkills": [
      { "name": "HTML5 & Semantic Markup", "level": "Advanced", "percentage": 95 },
      { "name": "CSS3 & Modern Layouts", "level": "Advanced", "percentage": 90 },
      { "name": "Tailwind CSS", "level": "Advanced", "percentage": 92 },
      { "name": "JavaScript (ES6+)", "level": "Intermediate", "percentage": 80 },
      { "name": "React 18 & Components", "level": "Intermediate", "percentage": 75 },
      { "name": "Node.js & Express.js", "level": "Beginner-Intermediate", "percentage": 70 }
    ],
    "softSkills": [
      { "title": "პრობლემის გადაჭრა", "description": "კოდის ეტაპობრივი დებაგინგი და ოპტიმალური გადაწყვეტის პოვნა" },
      { "title": "გუნდური მუშაობა", "description": "კომუნიკაბელურობა და კოლეგებთან ეფექტური თანამშრომლობა" }
    ]
  }
}
```

---

### 4. დამატებითი ენდფოინთები:
*   `GET /api/services` — შეთავაზებული სერვისების სია (Frontend, რესპონსიული დიზაინი, REST API)
*   `GET /api/projects/:id` — კონკრეტული პროექტის დეტალები ID-ის მიხედვით (მაგ. `/api/projects/1`)
*   `GET /` — API-ს მთავარი მისასალმებელი გვერდი ენდფოინთების დოკუმენტაციით

---

## 🛠️ პროექტის სტრუქტურა

```text
portfolio-backend/
├── data/
│   ├── userData.js        # მომხმარებლის პროფილის მონაცემები
│   ├── projectsData.js    # პროექტების მასივი
│   └── skillsData.js      # უნარებისა და სერვისების მონაცემები
├── .env.example           # გარემოს ცვლადების ნიმუში
├── .gitignore             # Git-ის მიერ იგნორირებული ფაილები (node_modules)
├── package.json           # პროექტის კონფიგურაცია და სკრიპტები
├── README.md              # დოკუმენტაცია
└── server.js              # Express სერვერის მთავარი ფაილი
```
