// components/SegmentedControl.tsx

import React from "react";
import { Segmented } from "antd";

type SegmentedControlProps = {
  onChange: (value: string) => void;
};

const SegmentedControl = ({ onChange }: SegmentedControlProps) => {
  const SegmentedOptions = [
    { value: "all", label: "全部" },
    { value: "special", label: "特色菜" },
    { value: "pork", label: "猪肉" },
    { value: "chicken", label: "鸡肉/鸭肉" },
  ];
  return (
    <Segmented
      options={SegmentedOptions}
      onChange={onChange}
      className="mb-4"
    />
  );
};

export default SegmentedControl;
