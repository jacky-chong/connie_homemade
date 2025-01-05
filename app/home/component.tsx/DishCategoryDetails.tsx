// components/DishCategory.tsx

import React, { forwardRef } from "react";
import { List } from "antd";
import { DishType } from "../type/DishType";
import DishListing from "@/app/home/component.tsx/DishListing";

type DishCategoryProps = {
  dishCategory: DishType;
  allPhotos: string[];
  showPhotos: (code: string) => void;
};

const DishCategoryDetails = forwardRef<HTMLDivElement, DishCategoryProps>(
  ({ dishCategory, allPhotos, showPhotos }, ref) => {
    return (
      <div ref={ref} className="mt-4 scroll-mt-44">
        <p className="text-xl font-semibold">
          {dishCategory.name}{" "}
          <span className="text-gray-500">({dishCategory.data.length})</span>
        </p>

        <List
          itemLayout="horizontal"
          dataSource={dishCategory.data}
          renderItem={(item) => (
            <DishListing
              dish={item}
              allPhotos={allPhotos}
              showPhotos={showPhotos}
            />
          )}
        />
      </div>
    );
  }
);

DishCategoryDetails.displayName = "DishCategoryDetails";
export default DishCategoryDetails;
