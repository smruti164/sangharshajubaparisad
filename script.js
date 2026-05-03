function toggleMembers() {
  document.getElementById("memberBox").classList.toggle("show");
}

fetch("members.json")
.then(r => r.json())
.then(data => {
  const list = document.getElementById("memberList");
  data.forEach(m => {
    let li = document.createElement("li");
    li.textContent = m;
    list.appendChild(li);
  });
});

fetch("advisory.json")
.then(r => r.json())
.then(data => {
  const box = document.getElementById("advisoryList");
  data.forEach(m => {
    let div = document.createElement("div");
    div.className = "advisory-card";
    div.innerHTML = `<h3>${m}</h3><p>Advisory Member</p>`;
    box.appendChild(div);
  });
});

fetch("events.json")
.then(r => r.json())
.then(data => {
  const box = document.getElementById("eventList");
  data.forEach(e => {
    let div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `<h3>${e.title}</h3><span>${e.date}</span><p>${e.description}</p>`;
    box.appendChild(div);
  });
});

fetch("gallery.json")
.then(r => r.json())
.then(data => {
  const box = document.getElementById("galleryGrid");
  data.forEach(img => {
    let i = document.createElement("img");
    i.src = img;
    i.onclick = () => openLightbox(img);
    box.appendChild(i);
  });
});

function openLightbox(src){
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}
