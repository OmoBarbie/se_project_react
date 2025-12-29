import { data } from "../utils/constants.js";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  let animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  animal = animal.image
    ? animal
    : data.find((item) => {
        return item.name == "default";
      });

  return <img className="image--size" src={animal.image} alt={animal.name} />;
}

export default Animal;
