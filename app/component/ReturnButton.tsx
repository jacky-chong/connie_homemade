import { RollbackOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const ReturnButton = () => {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push("/home")}
      className="text-gray-500 hover:text-gray-700 flex items-center p-0 focus:outline-none focus:ring-2 focus:ring-gray-300 float-right"
    >
      <RollbackOutlined /> &nbsp; Back
    </a>
  );
};
