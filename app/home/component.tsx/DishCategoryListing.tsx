import { Card, Col, Row } from "antd";
import { forwardRef } from "react";
import { DishType } from "../type/DishType";
import { DishCard } from "./DishCard";

type DishCategoryProps = {
  dishCategory: DishType;
  allPhotos: string[];
  showPhotos: (code: string) => void;
};

const DishCategoryListing = forwardRef<HTMLDivElement, DishCategoryProps>(
  ({ dishCategory, allPhotos, showPhotos }, ref) => {
    const dishData = dishCategory.data;

    return (
      <div ref={ref} className="mt-4 scroll-mt-44">
        <p className="text-xl font-semibold">
          {dishCategory.name}{" "}
          <span className="text-gray-500">({dishCategory.data.length})</span>
        </p>

        <Card styles={{ body: { padding: 0 } }} className="border-none mt-2">
          <Row gutter={[16, 16]}>
            {dishData.map((item) => (
              <Col
                xs={12}
                sm={8}
                md={6}
                lg={4}
                key={item.code}
                className="!p-1"
              >
                <DishCard
                  dish={item}
                  allPhotos={allPhotos}
                  showPhotos={showPhotos}
                />
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    );
  }
);

DishCategoryListing.displayName = "DishCategoryListing";
export default DishCategoryListing;
