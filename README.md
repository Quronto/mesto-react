# Проект: Место

Тут представлен проект "Mesto". В нём можно делиться своими фото пейзажей, а также, понравившиеся фотки можно
 отметить лайком. Я использовал несколько интересных технологий, вот некторые из них с примерами: 
1. Тег @media мы использовали для реализации одинаковых свойств с разными значениями для разных разрешений экрана:
``` css
@media screen and (max-width: 320px) {
  .elements {
    grid-template-rows: repeat(auto-fit, 361px);
  }
}
```
2. Использовали calc() для упрощения адаптивной вёрстки:
``` css
max-width: calc(100% - 296px);
```
3. А также использовали grid для создании сетки:
``` css
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(284px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(213px, 1fr));
  gap: 16px;
}
  ```

  4. Также подключили и использовали JavaScript, для реализации попапа и его функций:
  ``` js
  const editButton = document.querySelector(".profile__edit-button_type_edit");

  const popup = document.querySelector(".popup");

  const closeButton = popup.querySelector(".popup__close");


  function toggleOpenClosePopup(){
    popup.classList.toggle("popup_opened");
  };

  editButton.addEventListener("click", toggleOpenClosePopup);
  closeButton.addEventListener("click", toggleOpenClosePopup);
  ```

  Ссылка на проект: https://quronto.github.io/mesto/