"use client";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import Image from "next/image";
import SegmentedControl, { SegmentedControlProps } from "./SegmentedControl";

export const Header = ({
  isListing,
  onChange,
  setIsListing,
}: SegmentedControlProps) => (
  <header className="fixed top-0 left-0 right-0 bg-white z-10 ">
    <div className="p-4 flex  items-center">
      <Image
        src="/favicon.ico"
        height={92}
        width={92}
        alt="Connie Homemade logo"
        className="flex-shrink-0"
      />
      <div className="ml-4">
        <h1 className="text-2xl font-bold">Connie Homemade</h1>
        <h3 className="text-gray-500">真材实料，高品质且用心煮❤️</h3>

        <h3 className="text-gray-500 text-xs flex items-center mt-1">
          {/* Optional Icon */}
          <a
            href="https://wa.me/60123781262" // Replace with your full international number
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-600"
            aria-label="WhatsApp to order"
          >
            <WhatsAppOutlined /> 有兴趣者可以点击我下单哦！
          </a>
        </h3>
      </div>
    </div>
    <div className="px-4 ">
      <SegmentedControl
        onChange={onChange}
        isListing={isListing}
        setIsListing={setIsListing}
      />
    </div>
    <Divider className="!m-0"></Divider>
  </header>
);
