function PopupWithForm({ isOpen, onClose, title, name, submit }) {
  return (
    <div className={`popup popup_theme_name ${isOpen ? `popup_opened` : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" noValidate="">
          <input
            id="input-name"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span id="input-name-error" className="popup__error" />
          <input
            id="input-job"
            className="popup__input popup__input_type_job"
            type="text"
            name="job"
            placeholder="О себе"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span id="input-job-error" className="popup__error" />
          <button type="submit" className="popup__submit">
            {submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
