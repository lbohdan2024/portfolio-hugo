// tab script
(function () {
  "use strict";
  // Get the modal
  var modal = document.getElementById("dialog");

  // Get the button that opens the modal
  var btn = document.getElementById("toggle-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  let modalParent = document.querySelector(".dialog");
  let modalContent = document.querySelector(".dialog-content");
  
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.classList.remove("-right-[101vw]");
    modal.classList.add("right-0");
    modalContent.classList.remove("-right-full");
    modalContent.classList.add("right-0");
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.classList.add("-right-[101vw]");
    modal.classList.remove("right-0");
    modalContent.classList.add("-right-full");
    modalContent.classList.remove("right-0");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.add("-right-[101vw]");
      modal.classList.remove("right-0");
      modalContent.classList.add("-right-full");
      modalContent.classList.remove("right-0");
    }
  };
})();
