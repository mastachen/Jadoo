document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");

  // burger menu for smaller screens
  if (burgerIcon && menu) {
    burgerIcon.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // show sticky header when scrolling down
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});
