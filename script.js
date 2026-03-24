let students = [
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

function render() {
  displayStudents.innerHTML = "";
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
    `;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", () => edit(student));
    box.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("deletBtn");
    deleteBtn.addEventListener("click", () => deleteStudent(student));
    box.appendChild(deleteBtn);

    displayStudents.appendChild(box);
  });

  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <button class="addBtn" onclick="addStudent()">Add</button>
  `;
  displayStudents.appendChild(box);
}

render();

function deleteStudent(student) {
  students = students.filter((std) => {
    return std.id != student.id;
  });
  render();
}

function edit(student) {
  general(student);
}

function addStudent() {
  general();
}

function general(student) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.id = "overlay";
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close");
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", handleClose);
  popup.innerHTML = `
  <form id="studentForm"  class="studentInfo">

  <label>
    Id: <input type="text" name="id" value=${student != undefined ? student.id : ""} >
  </label>
  <label>
    Nom: <input type="text" name="nom" value=${student != undefined ? student.nom : ""} >
  </label>
  <label>
Prenom: <input type="text" name="prenom" value=${student != undefined ? student.prenom : ""}>
  </label>
    <div>email: <input type="text" name="email" value=${student != undefined ? student.email : ""}></div>
    <label>telephone: <input type="text" name="telephone" value=${student != undefined ? student.telephone : ""}></label>

    </form>

  `;
  let saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", (e) => {
    save(e, student);
  });
  popup.appendChild(closeBtn);
  popup.appendChild(saveBtn);
  overlay.appendChild(popup);
  document.body.append(overlay);
}

function handleClose(e) {
  e.target.parentElement.parentElement.remove();
}

function save(e, student) {
  let form = e.target.parentElement.querySelector("#studentForm");

  if (student != undefined) {
    for (let i = 0; i < form.length; i++) {
      let key = form[i].name;
      let value = form[i].value;
      student[key] = value;
    }
  } else {
    let newStudent = {};
    for (let i = 0; i < form.length; i++) {
      let key = form[i].name;
      let value = form[i].value;
      newStudent[key] = value;
    }
    newStudent.pic = "pics/defaultProfilePic.png";
    students.push(newStudent);
  }

  render();
  document.getElementById("overlay").remove();
}
