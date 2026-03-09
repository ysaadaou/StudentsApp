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
        <a href="mailto:${student.email}">Send email </a>
        <a href="tel:${student.telephone}">Phone</a>
        </div>

        <button class="editIcon" onclick="edit()">
        <svg   xmlns="http://www.w3.org/2000/svg" width="30" height="30"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
</svg>
        </button>

    `;

  displayStudents.appendChild(box);
});

function edit() {}
