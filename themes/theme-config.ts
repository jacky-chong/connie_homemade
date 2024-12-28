import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#FFFFFF",
    colorSuccess: "#28a745",
    colorError: "#dc3545",
    colorWarning: "#ffc107",
    colorTextBase: "#000000",
    colorTextSecondary: "#000000",
    colorBgBase: "#FFFFFF",
  },
  components: {
    Menu: {
      colorText: "#FFFFFF", // Menu text blue
      colorLinkActive: "#FFFFFF", // Active link blue
    },
    Modal: { wireframe: true },
  },
};

export default theme;
