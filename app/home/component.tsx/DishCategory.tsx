// components/DishCategory.tsx

import React from "react";
import { List } from "antd";
import { DishType } from "../type/DishType";
import DishItem from "@/app/component/DishItem";

type DishCategoryProps = {
  dishCategory: DishType;
  allPhotos: string[];
  showPhotos: (code: string) => void;
};

const DishCategory = ({
  dishCategory,
  allPhotos,
  showPhotos,
}: DishCategoryProps) => {
  return (
    <div className="mt-4">
      <p className="text-xl font-semibold">
        {dishCategory.name}{" "}
        <span className="text-gray-500">({dishCategory.data.length})</span>
      </p>

      <List
        itemLayout="horizontal"
        dataSource={dishCategory.data}
        renderItem={(item) => (
          <DishItem dish={item} allPhotos={allPhotos} showPhotos={showPhotos} />
        )}
      />
    </div>
  );
};

export default DishCategory;
