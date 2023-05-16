function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <div className="card">
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleClick}
        />
        <button type="button" className="card__delete" />
        <div className="card__item">
          <h2 className="card__paragraph">{card.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like" />
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
