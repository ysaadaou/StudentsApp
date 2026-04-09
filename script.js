let students = [];
let preponse = fetch("http://localhost:3200/students");
let pdata = preponse.then((res) => {
  return res.json();
});
pdata.then((stds) => {
  students = stds;
  render();
});

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
    editBtn.innerHTML =
      '<svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#000000"></path> </g></svg>';
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", () => edit(student));
    box.appendChild(editBtn);

    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML =
      '<svg wdith="50" height="50" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1,20a1,1,0,0,0,1,1h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5Zm12.707,9.707L20.414,17l2.293,2.293a1,1,0,1,1-1.414,1.414L19,18.414l-2.293,2.293a1,1,0,0,1-1.414-1.414L17.586,17l-2.293-2.293a1,1,0,0,1,1.414-1.414L19,15.586l2.293-2.293a1,1,0,0,1,1.414,1.414Z"></path></g></svg>';
    deleteBtn.classList.add("deletBtn");
    deleteBtn.addEventListener("click", () => deleteStudent(student));
    box.appendChild(deleteBtn);

    displayStudents.appendChild(box);
  });

  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <button class="addBtn" onclick="addStudent()">

    <svg
      viewBox="0 0 24 24"
      width="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
          fill="black"
        ></path>
      </g>
    </svg>
    </button>
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
