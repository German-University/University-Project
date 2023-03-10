window.onload = function () {
  let link = document.querySelector(".welcome-link");
  let popup = document.querySelector(".modal1");
  let exit = document.querySelector(".close");
  let login = popup.querySelector(".first-input");
  let form = popup.querySelector("form");
  let password = popup.querySelector(".second-input");
  let link_map = document.querySelector(".open-map");
  let open_map = document.querySelector(".map");
  let close_map = document.querySelector(".close-map");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-start");
    popup.classList.add("show-window");
    login.focus();
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !password.value) {
      popup.classList.remove("modal-start");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  exit.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show-window");
    popup.classList.remove("modal-error");
  });

  link_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    open_map.classList.add("show-window");
  });

  close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    open_map.classList.remove("show-window");
  });
};