import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React, { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <Header alt="лого Mesto" />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        submit="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title="Новое место"
        name="addbutton"
        submit="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              id="input-title"
              className="popup__input popup__input_type_title"
              type="text"
              name="title"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span id="input-title-error" className="popup__error" />
            <input
              id="input-link"
              className="popup__input popup__input_type_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span id="input-link-error" className="popup__error" />
          </>
        }
      />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        submit="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              id="input-link-avatar"
              className="popup__input popup__input_type_link-avatar"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span id="input-link-avatar-error" className="popup__error" />
          </>
        }
      />
      <PopupWithForm
        title="Вы уверены, что хотите удалить карточку?"
        name="delete"
        submit="Да"
      />

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <Footer title="©2023 Mesto Russia" />
    </div>
  );
}

export default App;
