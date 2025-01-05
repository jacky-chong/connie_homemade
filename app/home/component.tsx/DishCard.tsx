import { setDescription } from "../helper/setDescription";
import { setTitle } from "../helper/setTitle";
import { DishItemProps } from "../type/DishType";
import { findAvailablePhotos } from "../utils/photoUtils";

export const DishCard = ({ dish, allPhotos, showPhotos }: DishItemProps) => {
  const availablePhotos = findAvailablePhotos(dish.code, allPhotos);
  const primaryPhoto =
    availablePhotos.length > 0
      ? `/photos/${availablePhotos[0]}`
      : "/images/default.jpg"; // Fallback to default

  return (
    <div>
      <img
        src={primaryPhoto}
        alt={dish.code}
        className="rounded-lg "
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
        }}
        onClick={() => showPhotos(dish.code)}
      />
      <p className="pt-2">{setTitle(dish.code, dish.title)}</p>
      <p>{setDescription(dish.description, dish?.details)}</p>
    </div>
  );
};
