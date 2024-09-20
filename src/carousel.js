let getImages = document.getElementById("images");
console.log(getImages);
console.log(getImages.childNodes);

export function previous() {
  let previousButton = document.getElementById("previousButton");


  previousButton.addEventListener("click", () => {
    let targetNode = getImages.childNodes[1];
    targetNode.style.position = 'absolute';
    targetNode.style.left = '0';
    targetNode.style.top = '0';
    
  });

}

export function next() {
    let nextButton = document.getElementById("nextButton");

    nextButton.addEventListener("click", () => {
      
        
        let targetNode = getImages.childNodes[3];
        targetNode.style.position = 'absolute';
        targetNode.style.left = '0';
        targetNode.style.top = '0';

    });
}