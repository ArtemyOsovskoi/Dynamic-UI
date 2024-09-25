let getImage = document.getElementById("images");
let getImageNodes = getImage.childNodes;

let firstImage = document.getElementById("cont_one");
let secondImage = document.getElementById("cont_two");
let thirdImage = document.getElementById("cont_three");
let fourthImage = document.getElementById("cont_four");
firstImage.style.order = "1";
secondImage.style.order = "2";
thirdImage.style.order = "3";
fourthImage.style.order = "4";

console.log(getImage);
console.log(getImage.childNodes);

export function previous() {
  let previousButton = document.getElementById("previousButton");

  previousButton.addEventListener("click", () => {
    if (firstImage.style.order == "1") {
      fourthImage.style.order = '1';
      firstImage.style.order = "4";
    } else if (secondImage.style.order == "1") {
      secondImage.style.order = "2";
      firstImage.style.order = "1";
    } else if (thirdImage.style.order == "1") {
      thirdImage.style.order = "3";
      secondImage.style.order = '1';
    } else if (fourthImage.style.order == "1") {
      thirdImage.style.order = '1';
      fourthImage.style.order = '4';
    }
  });
}

export function next() {
  let nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", () => {
    if (firstImage.style.order == "1") {
      firstImage.style.order = "2";
      secondImage.style.order = "1";
    } else if (secondImage.style.order == "1") {
      secondImage.style.order = "2";
      thirdImage.style.order = "1";
      firstImage.style.order = "3";
    } else if (thirdImage.style.order == "1") {
      thirdImage.style.order = "2";
      fourthImage.style.order = "1";
      secondImage.style.order = "4";
      firstImage.style.order = "3";
    } else if (fourthImage.style.order == "1") {
      firstImage.style.order = "1";
      secondImage.style.order = "2";
      thirdImage.style.order = "3";
      fourthImage.style.order = "4";
    }
  });
}
