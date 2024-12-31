"use client";
import { ModalCarouselImage } from "@/app/component/ModalCarouselImage";
import {
  fetchAvailablePhotos,
  findAvailablePhotos,
} from "@/app/home/utils/photoUtils";
import { Avatar, Button, Divider, List, Segmented, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { setTitle } from "./helper/setTitle";
import { specialDishData } from "./specialDish/specialDishData";
import { porkData } from "./specialDish/porkData";
import { chickenData } from "./specialDish/chickenData";
import { DoubleLeftOutlined, RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { setDescription } from "./helper/setDescription";
import { DishType } from "./type/DishType";
import SegmentedControl from "./component.tsx/SegmentedControl";
import DishItem from "../component/DishItem";
import DishCategory from "./component.tsx/DishCategory";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<DishType[]>([
    ...specialDishData,
    ...porkData,
    ...chickenData,
  ]);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchAvailablePhotos();
      setAllPhotos(photos);
      setLoading(false);
    };
    getPhotos();
  }, []);

  const showPhotos = (code: string) => {
    const availablePhotos = findAvailablePhotos(code, allPhotos);
    if (availablePhotos.length > 0) {
      setImageList(availablePhotos);
      setOpenModal(true);
    }
  };

  const handleSegmentChange = (value: string) => {
    switch (value) {
      case "special":
        setData(specialDishData);
        break;
      case "pork":
        setData(porkData);
        break;
      case "chicken":
        setData(chickenData);
        break;
      default:
        setData([...specialDishData, ...porkData, ...chickenData]);
        break;
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

      <div className="p-4">
        <h1>Connie Homemade</h1>
        <h3 className="text-gray-500">真材实料，高品质且用心煮❤️</h3>
        <div className="pt-4 ">
          <SegmentedControl onChange={handleSegmentChange} />
        </div>
        <Divider className="!m-0"></Divider>

        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((dishCategory, index) => (
            <DishCategory
              key={index}
              dishCategory={dishCategory}
              allPhotos={allPhotos}
              showPhotos={showPhotos}
            />
          ))}
      </div>
    </>
  );
};

export default Page;
