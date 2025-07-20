const shareBtns = document.querySelectorAll(".icon-wrapper");
const socialLinks = document.querySelector(".share-section");
const authorSection = document.querySelector(".author-section ");
const tooltip = document.querySelector(".tooltip");

for (let btn of shareBtns) {
  
  btn.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 640;
    if(isMobile){
      // tooltip.classList.toggle("visually-hidden");
      socialLinks.classList.toggle("visually-hidden");
      authorSection.classList.toggle("visually-hidden");
    }else {
      socialLinks.classList.toggle("visually-hidden");
    }
  //  best practice for screen readers
    btn.setAttribute("aria-expanded",btn.getAttribute("aria-expanded") === "true" ? "false" : "true");
  });
}
