"use client";
import { ModalCarouselImage } from "@/app/component/ModalCarouselImage";
import {
  fetchAvailablePhotos,
  findAvailablePhotos,
} from "@/app/home/utils/photoUtils";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import DishCategory from "./component.tsx/DishCategory";
import SegmentedControl from "./component.tsx/SegmentedControl";
import { chickenData } from "./specialDish/chickenData";
import { porkData } from "./specialDish/porkData";
import { specialDishData } from "./specialDish/specialDishData";
import { DishType } from "./type/DishType";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<DishType[]>([]);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
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

  return (
    <>
      <ModalCarouselImage
        imageList={imageList}
        openModal={openModal}
        handleClose={handleClose}
      />
      <header className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="p-4">
          <h1>Connie Homemade</h1>
          <h3 className="text-gray-500">真材实料，高品质且用心煮❤️</h3>
          <div className="pt-4 ">
            <SegmentedControl onChange={handleSegmentChange} />
          </div>
          <Divider className="!m-0"></Divider>
        </div>
      </header>

      <main className="pt-32 p-4">
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((dishCategory, index) => (
            <DishCategory
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
