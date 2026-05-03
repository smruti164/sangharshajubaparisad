function toggleMembers() {
  document.getElementById("memberBox").classList.toggle("show");
}

fetch("members.json")
  .then(response => response.json())
  .then(members => {
    const memberList = document.getElementById("memberList");

    members.forEach(member => {
      const li = document.createElement("li");
      li.textContent = member;
      memberList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error loading members:", error);
  });

fetch("advisory.json")
  .then(response => response.json())
  .then(advisoryMembers => {
    const advisoryList = document.getElementById("advisoryList");

    advisoryMembers.forEach(member => {
      const div = document.createElement("div");
      div.className = "advisory-card";

      div.innerHTML = `
        <h3>${member}</h3>
        <p>Advisory Member</p>
      `;

      advisoryList.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error loading advisory committee:", error);
  });

fetch("gallery.json")
  .then(response => response.json())
  .then(images => {
    const galleryGrid = document.getElementById("galleryGrid");

    images.forEach(imagePath => {
      const img = document.createElement("img");
      img.src = imagePath;
      img.alt = "Social Work Photo";
      img.onclick = function () {
        openLightbox(imagePath);
      };

      galleryGrid.appendChild(img);
    });
  })
  .catch(error => {
    console.error("Error loading gallery:", error);
  });

function openLightbox(imagePath) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  lightboxImg.src = imagePath;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
