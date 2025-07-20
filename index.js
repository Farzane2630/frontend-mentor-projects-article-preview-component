let shareBtns = document.querySelectorAll(".icon-wrapper");
let socialLinks = document.querySelector(".share-section");
let authorSection = document.querySelector(".author-section ");
let tooltip = document.querySelector(".tooltip");
let tooltipTale = document.querySelector(".tooltip-tale");

for (let btn of shareBtns) {
  btn.addEventListener("click", () => {
    // Mobile devices
    socialLinks.classList.toggle("hide");
    authorSection.classList.toggle("hide");

    // Desktop Devices
    if (window.innerWidth >= 640) {
      socialLinks.classList.add("hide");
      authorSection.classList.remove("hide");

      tooltip.classList.toggle("hide");
      tooltipTale.classList.toggle("hide");
    }
  });
}
