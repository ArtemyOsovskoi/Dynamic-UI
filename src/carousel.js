let getImage = document.getElementById("images");
//let getImageNodes = getImage.childNodes;

let firstImage = document.getElementById("cont_one");
let secondImage = document.getElementById("cont_two");
let thirdImage = document.getElementById("cont_three");
let fourthImage = document.getElementById("cont_four");
firstImage.style.order = "1";
secondImage.style.order = "2";
thirdImage.style.order = "3";
fourthImage.style.order = "4";

let firstBullet = document.getElementById("bullet_one");
let secondBullet = document.getElementById("bullet_two");
let thirdBullet = document.getElementById("bullet_three");
let fourthBullet = document.getElementById("bullet_four");

console.log(getImage);
console.log(getImage.childNodes);

export function previous() {
  let previousButton = document.getElementById("previousButton");

  previousButton.addEventListener("click", () => {
    if (firstImage.style.order == "1") {
      fourthImage.style.order = "1";
      firstImage.style.order = "4";
    } else if (secondImage.style.order == "1") {
      secondImage.style.order = "2";
      firstImage.style.order = "1";
    } else if (thirdImage.style.order == "1") {
      thirdImage.style.order = "3";
      secondImage.style.order = "1";
    } else if (fourthImage.style.order == "1") {
      thirdImage.style.order = "1";
      fourthImage.style.order = "4";
    }
  });
}

export function next() {
  let nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", () => {
    if (firstImage.style.order == "1") {
      firstImage.style.order = "2";
      secondImage.style.order = "1";

      firstBullet.style.backgroundColor = "darkgrey";
      secondBullet.style.backgroundColor = "black";
      thirdBullet.style.backgroundColor = "darkgrey";
      fourthBullet.style.backgroundColor = "darkgrey";
    } else if (secondImage.style.order == "1") {
      secondImage.style.order = "2";
      thirdImage.style.order = "1";
      firstImage.style.order = "3";

      secondBullet.style.backgroundColor = "darkgrey";
      firstBullet.style.backgroundColor = "darkgrey";
      thirdBullet.style.backgroundColor = "black";
      fourthBullet.style.backgroundColor = "darkgrey";
    } else if (thirdImage.style.order == "1") {
      thirdImage.style.order = "2";
      fourthImage.style.order = "1";
      secondImage.style.order = "4";
      firstImage.style.order = "3";

      thirdBullet.style.backgroundColor = "darkgrey";
      secondBullet.style.backgroundColor = "darkgrey";
      firstBullet.style.backgroundColor = "darkgrey";
      fourthBullet.style.backgroundColor = "black";
    } else if (fourthImage.style.order == "1") {
      firstImage.style.order = "1";
      secondImage.style.order = "2";
      thirdImage.style.order = "3";
      fourthImage.style.order = "4";

      fourthBullet.style.backgroundColor = "darkgrey";
      secondBullet.style.backgroundColor = "darkgrey";
      thirdBullet.style.backgroundColor = "darkgrey";
      firstBullet.style.backgroundColor = "black";
    }
  });
}

export function bullets() {
  firstBullet.addEventListener("click", () => {
    firstImage.style.order = "1";
    secondImage.style.order = "2";
    thirdImage.style.order = "3";
    fourthImage.style.order = "4";

    firstBullet.style.backgroundColor = "black";
    secondBullet.style.backgroundColor = "darkgrey";
    thirdBullet.style.backgroundColor = "darkgrey";
    fourthBullet.style.backgroundColor = "darkgrey";
  });

  secondBullet.addEventListener("click", () => {
    secondImage.style.order = "1";
    firstImage.style.order = "2";
    thirdImage.style.order = "3";
    fourthImage.style.order = "4";

    secondBullet.style.backgroundColor = "black";
    firstBullet.style.backgroundColor = "darkgrey";
    thirdBullet.style.backgroundColor = "darkgrey";
    fourthBullet.style.backgroundColor = "darkgrey";
  });

  thirdBullet.addEventListener("click", () => {
    thirdImage.style.order = "1";
    secondImage.style.order = "2";
    firstImage.style.order = "3";
    fourthImage.style.order = "4";

    thirdBullet.style.backgroundColor = "black";
    secondBullet.style.backgroundColor = "darkgrey";
    firstBullet.style.backgroundColor = "darkgrey";
    fourthBullet.style.backgroundColor = "darkgrey";
  });

  fourthBullet.addEventListener("click", () => {
    fourthImage.style.order = "1";
    secondImage.style.order = "2";
    thirdImage.style.order = "3";
    firstImage.style.order = "4";

    fourthBullet.style.backgroundColor = "black";
    secondBullet.style.backgroundColor = "darkgrey";
    thirdBullet.style.backgroundColor = "darkgrey";
    firstBullet.style.backgroundColor = "darkgrey";
  });
}

export function autoSlider() {
  if (firstImage.style.order == "1") {
    firstImage.style.order = "2";
    secondImage.style.order = "1";

    firstBullet.style.backgroundColor = "darkgrey";
    secondBullet.style.backgroundColor = "black";
    thirdBullet.style.backgroundColor = "darkgrey";
    fourthBullet.style.backgroundColor = "darkgrey";
  } else if (secondImage.style.order == "1") {
    secondImage.style.order = "2";
    thirdImage.style.order = "1";
    firstImage.style.order = "3";

    secondBullet.style.backgroundColor = "darkgrey";
    firstBullet.style.backgroundColor = "darkgrey";
    thirdBullet.style.backgroundColor = "black";
    fourthBullet.style.backgroundColor = "darkgrey";
  } else if (thirdImage.style.order == "1") {
    thirdImage.style.order = "2";
    fourthImage.style.order = "1";
    secondImage.style.order = "4";
    firstImage.style.order = "3";

    thirdBullet.style.backgroundColor = "darkgrey";
    secondBullet.style.backgroundColor = "darkgrey";
    firstBullet.style.backgroundColor = "darkgrey";
    fourthBullet.style.backgroundColor = "black";
  } else if (fourthImage.style.order == "1") {
    firstImage.style.order = "1";
    secondImage.style.order = "2";
    thirdImage.style.order = "3";
    fourthImage.style.order = "4";

    fourthBullet.style.backgroundColor = "darkgrey";
    secondBullet.style.backgroundColor = "darkgrey";
    thirdBullet.style.backgroundColor = "darkgrey";
    firstBullet.style.backgroundColor = "black";
  };
};
