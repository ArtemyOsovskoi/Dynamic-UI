let getImages = document.getElementById("images");
console.log(getImages);
console.log(getImages.childNodes);

export function previous() {
  let previousButton = document.getElementById("previousButton");
  /* Нужно взять изображения (слайды, див - один слайд)
        И проходится по ним циклом(?) который будет итерировать
        Нажатие кнопки проходит по массиву слайдов
        Находит текущий слайд, определяет какой идет за ним или до него
        И выводит на место текущего нужный слайд
        Т.е. меняет див, манипулируя DOMом.
    */

  previousButton.addEventListener("click", () => {
   /*  let targetNode = getImages[1].previousSibling;
    targetNode.style.position = 'absolute'; */
    
  });

}

export function next() {
    let nextButton = document.getElementById("nextButton");

    nextButton.addEventListener("click", () => {
    /*     for (let index = 0; index <= 9; index++) {
            const targetNode = getImages.childNodes[index];
            console.log(targetNode);
            let nextNode = targetNode.nextSibling;
            console.log(nextNode);
            //console.log(nextNode);
            nextNode.style.position = 'absolute';  
        } */

            //getImages.style.position = 'absolute';
            /* getImages.style.left = '100px';
            getImages.style.top = '200px'; */
        
        //let targetNode = getImages.childNodes[0];
        
        /* secondChild.style.left = '100px';
        secondChild.style.top = '100px'; */

    });
}

        //и так это работает частично, я могу указывать номер нода
        //и он встает на нужное место в центр
        //теперь нужно понять как динамично выбирать следующий нод и ставить
        //как абсолют позишн именно его - следующий нод (а не вручную цифру писать)
        //или все через display лучше? а не позишн

/* 
по сути мне надо менять позиции 4х дивов
как слайды они идут от одного к другому т.е. нужно тригерить характеристику
которая отвечает за позиционирование дива в маленьком рамочном диве

*/