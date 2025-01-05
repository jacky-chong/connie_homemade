export type DishType = {
  type: string;
  name: string;
  data: DishTypeData[];
};

export type DishTypeData = {
  code: string;
  title: string;
  description?: string;
  details?: {
    quantity?: string;
    price?: number;
  }[];
};

export type DishItemProps = {
  dish: DishTypeData;
  allPhotos: string[];
  showPhotos: (code: string) => void;
};
