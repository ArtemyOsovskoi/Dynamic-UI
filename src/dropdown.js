export function dropAlert() {
  let dropButton = document.getElementById("dropdownButton");
  let menuContent = document.getElementById("menuContent");

  dropButton.addEventListener("click", () => {
    menuContent.style.visibility =
      menuContent.style.visibility == "hidden" ? "visible" : "hidden";
  });
}
