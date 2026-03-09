const students = [
  {
    id: "F132156",
    cin: "EE458721",
    nom: "El Amrani",
    prenom: "Youssef",
    telephone: "0661234567",
    email: "youssef.elamrani@gmail.com",
    pic: "pics/youssef.jpeg",
  },
  {
    id: "F132157",
    cin: "EB784512",
    nom: "Bennani",
    prenom: "Salma",
    telephone: "0672345678",
    email: "salma.bennani@gmail.com",
    pic: "pics/salma.jpeg",
  },
  {
    id: "F132158",
    cin: "ED963214",
    nom: "Alaoui",
    prenom: "Hamza",
    telephone: "0653456789",
    email: "hamza.alaoui@gmail.com",
    pic: "pics/hamza.jpeg",
  },
  {
    id: "F132159",
    cin: "EC741258",
    nom: "Tazi",
    prenom: "Imane",
    telephone: "0614567890",
    email: "imane.tazi@gmail.com",
    pic: "pics/imane.jpeg",
  },
  {
    id: "F132160",
    cin: "EF852369",
    nom: "Chakiri",
    prenom: "Omar",
    telephone: "0625678901",
    email: "omar.chakiri@gmail.com",
    pic: "pics/omar.jpeg",
  },
];

const displayStudents = document.getElementById("displayStudents");

students.forEach((student) => {
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
        <img class="pic" src=${student.pic} alt="student picture" />
        <h2>${student.nom} ${student.prenom} </h2>
        <div class="contactInfo">
        <a href="mailto:${student.email}>Send email </a>
        </div>
    `;

  displayStudents.appendChild(box);
});
