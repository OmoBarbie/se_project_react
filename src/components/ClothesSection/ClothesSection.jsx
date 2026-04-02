import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddClick,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter((item) => {
    const ownerId =
      typeof item.owner === "object" ? item.owner?._id : item.owner;

    return ownerId === currentUser._id;
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__title">Your items</p>
        <button
          type="button"
          className="clothes-section__add-btn"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__items">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
