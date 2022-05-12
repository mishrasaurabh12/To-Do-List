console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addText.value

    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
});
// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    console.log(notesObj);
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
      <div class="card new1" style="width: 18rem;">
      <div class="card-body">
          <span class="card-title">Note ${index + 1}:<span class="card-title">${element.title}</span>
          </span>
          <p class="card-text"> ${element.text}</p>
          <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</a>
      </div>
  </div>`;
    });
    let notesElm = document.getElementById("notes");
    console.log(html);
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
// FUNCTION TO DELET NOTE
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}

