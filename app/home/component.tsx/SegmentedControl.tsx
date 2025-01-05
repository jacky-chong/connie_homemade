// components/SegmentedControl.tsx

import React from "react";
import { Button, Segmented } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

export type SegmentedControlProps = {
  isListing: boolean;
  onChange: (value: string) => void;
  setIsListing: (value: boolean) => void;
};

const SegmentedControl = ({
  isListing,
  onChange,
  setIsListing,
}: SegmentedControlProps) => {
  const SegmentedOptions = [
    { value: "all", label: "全部" },
    { value: "special", label: "特色菜" },
    { value: "pork", label: "猪肉" },
    { value: "chicken", label: "鸡肉/鸭肉" },
  ];

  return (
    <div className="flex justify-between ">
      <Segmented
        options={SegmentedOptions}
        onChange={onChange}
        className="mb-4 !rounded-b-none"
      />
      <Button
        className={` !rounded-b-none rounded-t-sm !border-none !m-0 !p-1  ${
          isListing && "!bg-gray-100"
        }`}
        onClick={() => setIsListing(!isListing)}
      >
        <UnorderedListOutlined className={`!m-0 !p-1 !text-black `} />
      </Button>
    </div>
  );
};

export default SegmentedControl;
