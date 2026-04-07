const header = document.querySelector(".nav-bar-mob");
const burgerBtn = document.querySelector(".header-burger-btn");
const closeBtn = document.querySelector(".header-close-btn");
const headerCloseMobile = document.querySelector(".header-list-row");
const headerShadov = document.querySelector(".header-shadov");

const toggleMenu = async () => {
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  await new Promise((resolve) => requestAnimationFrame(resolve));
  headerShadov.classList.toggle("is-open");
  header.classList.toggle("is-open");
  burgerBtn.classList.toggle("hidann-button");
  closeBtn.classList.toggle("hidann-button");
};

const toggleMenuFromShadov = async (e) => {
  document.body.style.overflow = "";
  e.preventDefault();
  await new Promise((resolve) => requestAnimationFrame(resolve));
  headerShadov.classList.toggle("is-open");
  header.classList.toggle("is-open");
  burgerBtn.classList.toggle("hidann-button");
  closeBtn.classList.toggle("hidann-button");
};

burgerBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
headerShadov.addEventListener("click", toggleMenuFromShadov);
for (const item of headerCloseMobile.children) {
  const link = item.querySelector("a");
  if (link) link.addEventListener("click", toggleMenu);
}
