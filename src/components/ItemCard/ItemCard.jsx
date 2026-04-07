import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked =
    isLoggedIn &&
    item.likes &&
    item.likes.some((id) => {
      const likeId = typeof id === "object" ? id._id : id;
      return likeId === currentUser._id;
    });

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>

        {isLoggedIn && (
          <button
            type="button"
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            onClick={handleLike}
          >
            {" "}
          </button>
        )}
      </div>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
