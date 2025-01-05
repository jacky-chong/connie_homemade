"use client";
import { ModalCarouselImage } from "@/app/component/ModalCarouselImage";
import {
  fetchAvailablePhotos,
  findAvailablePhotos,
} from "@/app/home/utils/photoUtils";
import { Avatar, Button, Divider, List, Select } from "antd";
import { useEffect, useState } from "react";
import { setDescription } from "../../home/helper/setDescription";
import { setTitle } from "../../home/helper/setTitle";
import { specialDishData } from "../../home/menu/specialDishData";
import { porkData } from "../../home/menu/porkData";
import { chickenData } from "../../home/menu/chickenData";
import { DoubleLeftOutlined, RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export type DishType = {
  type: string;
  data: {
    code: string;
    title: string;
    description?: string;
    details?: {
      quantity?: string;
      price?: number;
    }[];
  }[];
};

const Page = ({ params: { id: id } }: PageProps) => {};

export default Page;
