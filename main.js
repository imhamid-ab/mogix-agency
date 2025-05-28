const hamberger = document.querySelector(".hamberger");
const menu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".mobile-menu a");
const triggers = document.querySelectorAll(".mav-info-fild");
const details = document.querySelectorAll(".mav-info-fild-detail");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

hamberger.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("menu-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    header.classList.remove("menu-open");
  });
});

document.querySelectorAll(".footer_price-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});
triggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    triggers.forEach((t, i) => {
      if (i !== index) {
        t.classList.remove("open");
        details[i].classList.remove("open");
      }
    });

    trigger.classList.toggle("open");
    details[index].classList.toggle("open");
  });
});
//
