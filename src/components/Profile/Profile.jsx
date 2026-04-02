import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  handleEditProfileClick,
  onSignOut,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <section className="profile">
      <SideBar
        handleEditProfileClick={handleEditProfileClick}
        onSignOut={onSignOut}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}

export default Profile;
