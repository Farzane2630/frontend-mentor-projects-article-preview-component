let shareBtns = document.querySelectorAll(".icon-wrapper");
let socialLinks = document.querySelector(".share-section");
let authorSection = document.querySelector(".author-section ");

for (let btn of shareBtns) {
  btn.addEventListener("click", () => {
    socialLinks.classList.toggle("hide");
    authorSection.classList.toggle("hide");
  });
}
