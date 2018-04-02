    var link = document.querySelector(".connection-button");
  
    var popup = document.querySelector(".modal-connection");
    var overlay = document.querySelector(".modal-overlay");
    var close = popup.querySelector(".modal-close");
  
    var form = popup.querySelector(".connection-form");
    var login = popup.querySelector("[name=modal-connection-name]");
    var email = popup.querySelector("[name=modal-connection-email]");
  
    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("login");
  } catch (err) {
      isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show-overlay")
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
  });
  
    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show-overlay");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-show-overlay");
      }
    }
  });