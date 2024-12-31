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
