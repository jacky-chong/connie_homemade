"use client";
import React from "react";
import { Avatar, Divider, List, Typography } from "antd";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params: { id: id } }: PageProps) => {
  const data = [
    {
      title: "特色菜",
      imagePath: "",
    },
    {
      title: "猪肉",
      imagePath: "",
    },
    {
      title: "鸡肉/鸭肉",
      imagePath: "",
    },
  ];

  return (
    <div className="p-8">
      <h1>Connie Homemade</h1>
      <h3 className="text-gray-500">真材实料，高品质且用心煮❤️</h3>
      <Divider></Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Page;
