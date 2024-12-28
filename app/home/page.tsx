"use client";
import React from "react";
import { Avatar, Button, Divider, List, Typography } from "antd";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const data = [
    {
      title: "特色菜",
      path: "special",
      imagePath: "",
    },
    {
      title: "猪肉",
      path: "pork",
      imagePath: "",
    },
    {
      title: "鸡肉/鸭肉",
      path: "chicken",
      imagePath: "",
    },
  ];

  const handleItemClick = (path: string) => {
    router.push(`/menu/${path}`);
  };

  return (
    <div className="p-8">
      <h1>Connie Homemade</h1>
      <h3 className="text-gray-500">真材实料，高品质且用心煮❤️</h3>
      <Divider></Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleItemClick(item.path)}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={item.title}
              //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      <Divider></Divider>
    </div>
  );
};

export default Page;
