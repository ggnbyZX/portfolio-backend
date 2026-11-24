const skillsData = {
  technicalSkills: [
    { name: "HTML5 & Semantic Markup", level: "Advanced", percentage: 95 },
    { name: "CSS3 & Modern Layouts (Flexbox, Grid)", level: "Advanced", percentage: 90 },
    { name: "Tailwind CSS", level: "Advanced", percentage: 92 },
    { name: "JavaScript (ES6+)", level: "Intermediate", percentage: 80 },
    { name: "React 18 & Components", level: "Intermediate", percentage: 75 },
    { name: "Node.js & Express.js", level: "Beginner-Intermediate", percentage: 70 },
    { name: "REST APIs & Fetch", level: "Intermediate", percentage: 85 },
    { name: "Git & GitHub", level: "Intermediate", percentage: 80 }
  ],
  softSkills: [
    { title: "პრობლემის გადაჭრა", description: "კოდის ეტაპობრივი დებაგინგი და ოპტიმალური გადაწყვეტის პოვნა" },
    { title: "გუნდური მუშაობა", description: "კომუნიკაბელურობა და კოლეგებთან ეფექტური თანამშრომლობა" },
    { title: "უწყვეტი სწავლა", description: "ახალი ტექნოლოგიებისა და საუკეთესო პრაქტიკების მუდმივი ათვისება" },
    { title: "პასუხისმგებლობა", description: "დედლაინების დაცვა და ხარისხიანი Clean Code-ის შექმნა" }
  ],
  services: [
    {
      id: "service-1",
      title: "Frontend დეველოპმენტი",
      description: "თანამედროვე, სუფთა და სწრაფი მომხმარებლის ინტერფეისების აგება HTML5, CSS3, Tailwind CSS და React-ის გამოყენებით."
    },
    {
      id: "service-2",
      title: "რესპონსიული ვებ-დიზაინი",
      description: "საიტის სრული ადაპტაცია ნებისმიერ ეკრანზე: მობილური, პლანშეტი, ლეპტოპი და დესკტოპი."
    },
    {
      id: "service-3",
      title: "REST API ინტეგრაცია & Backend",
      description: "სერვერული ლოგიკის აგება Express.js-ით, გარე API-ების მიერთება და მონაცემთა დამუშავება."
    }
  ]
};

module.exports = skillsData;
