// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const downloadBtn = document.getElementById("download-btn");

document.querySelectorAll(".chart-item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  lightboxImg.src = "";
});

// Download image
downloadBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent lightbox from closing
  const link = document.createElement("a");
  link.href = lightboxImg.src;
  link.download = lightboxImg.src.split("/").pop(); // filename from path
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Filter logic
document.querySelectorAll(".filter-bar button").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Highlight selected button
    document.querySelectorAll(".filter-bar button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    document.querySelectorAll(".chart-item").forEach((item) => {
      item.style.display = category === "all" || item.classList.contains(category)
        ? "block" : "none";
    });
  });
});

// Escape key closes lightbox