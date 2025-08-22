const saveBtn = document.getElementById("saveBtn");
const entriesDiv = document.getElementById("entries");

function loadEntries() {
  entriesDiv.innerHTML = "";
  const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.forEach((entry, index) => {
    const card = document.createElement("div");
    card.className = "entry-card";
    card.innerHTML = `
      <h3>${entry.title} ${entry.mood}</h3>
      <p>${entry.content}</p>
      <small>${entry.date}</small>
      <br>
      <button onclick="deleteEntry(${index})">❌ Delete</button>
    `;
    entriesDiv.appendChild(card);
  });
}

function saveEntry() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const mood = document.getElementById("mood").value;
  
  if (title && content) {
    const newEntry = {
      title,
      content,
      mood,
      date: new Date().toLocaleString()
    };
    
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    loadEntries();
  } else {
    alert("Please write something before saving!");
  }
}

function deleteEntry(index) {
  const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.splice(index, 1);
  localStorage.setItem("journalEntries", JSON.stringify(entries));
  loadEntries();
}

saveBtn.addEventListener("click", saveEntry);
window.onload = loadEntries;
