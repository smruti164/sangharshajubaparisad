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
