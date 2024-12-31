// components/DishItem.tsx

import { Avatar, List } from "antd";
import { setDescription } from "../home/helper/setDescription";
import { setTitle } from "../home/helper/setTitle";
import { DishTypeData } from "../home/type/DishType";
import { findAvailablePhotos } from "../home/utils/photoUtils";

type DishItemProps = {
  dish: DishTypeData;
  allPhotos: string[];
  showPhotos: (code: string) => void;
};

const DishItem = ({ dish, allPhotos, showPhotos }: DishItemProps) => {
  const availablePhotos = findAvailablePhotos(dish.code, allPhotos);
  const primaryPhoto =
    availablePhotos.length > 0
      ? `/photos/${availablePhotos[0]}`
      : "/images/default.jpg"; // Fallback to default

  return (
    <List.Item
      onClick={() => showPhotos(dish.code)}
      className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
    >
      <List.Item.Meta
        avatar={
          <Avatar
            src={primaryPhoto} // Absolute path from public/
            shape="square"
            size={80} // Adjust size as needed
            className="rounded-md" // Tailwind CSS for rounded corners
            alt={`Image of ${dish.title}`} // Accessibility
          />
        }
        title={setTitle(dish.code, dish.title)}
        description={setDescription(dish.description, dish?.details)}
      />
    </List.Item>
  );
};

export default DishItem;
