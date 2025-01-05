"use client";
import { ModalCarouselImage } from "@/app/component/ModalCarouselImage";
import {
  fetchAvailablePhotos,
  findAvailablePhotos,
} from "@/app/home/utils/photoUtils";
import { Card, Divider } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import DishCategory from "./component.tsx/DishCategoryDetails";
import SegmentedControl from "./component.tsx/SegmentedControl";
import { chickenData } from "./menu/chickenData";
import { porkData } from "./menu/porkData";
import { specialDishData } from "./menu/specialDishData";
import { DishType } from "./type/DishType";
import Image from "next/image";
import { WhatsAppOutlined } from "@ant-design/icons";
import DishCategoryListing from "./component.tsx/DishCategoryListing";
import DishCategoryDetails from "./component.tsx/DishCategoryDetails";
import { Header } from "./component.tsx/Header";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<DishType[]>([]);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isListing, setIsListing] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchAvailablePhotos();
      setAllPhotos(photos);
      setLoading(false);
    };
    getPhotos();
    setData([...specialDishData, ...porkData, ...chickenData]);
  }, []);

  // Initialize refs for each category
  useEffect(() => {
    data.forEach((category) => {
      categoryRefs.current[category.type];
    });
  }, [data]);

  const showPhotos = (code: string) => {
    const availablePhotos = findAvailablePhotos(code, allPhotos);
    if (availablePhotos.length > 0) {
      setImageList(availablePhotos);
      setOpenModal(true);
    }
  };

  const handleSegmentChange = (value: string) => {
    if (value === "all") {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to the selected category
      const refElement = categoryRefs.current[value];
      if (refElement) {
        refElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setImageList([]);
  };

  console.log(isListing);

  return (
    <>
      <ModalCarouselImage
        imageList={imageList}
        openModal={openModal}
        handleClose={handleClose}
      />
      <Header
        isListing={isListing}
        onChange={handleSegmentChange}
        setIsListing={setIsListing}
      />

      <main className="pt-40 p-4">
        {isListing &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((dishCategory, index) => (
            <DishCategoryDetails
              key={index}
              dishCategory={dishCategory}
              allPhotos={allPhotos}
              showPhotos={showPhotos}
              ref={(el) => {
                categoryRefs.current[dishCategory.type] = el;
              }}
            />
          ))}

        {!isListing &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((dishCategory, index) => (
            <DishCategoryListing
              key={index}
              dishCategory={dishCategory}
              allPhotos={allPhotos}
              showPhotos={showPhotos}
              ref={(el) => {
                categoryRefs.current[dishCategory.type] = el;
              }}
            />
          ))}
      </main>
    </>
  );
};

export default Page;
