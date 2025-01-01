import Provider from "@/components/Provider";
import StyledComponentsRegistry from "@/lib/antd/AntdRegistry";
import theme from "@/themes/theme-config";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connie Homemade",
  description: "Connie Homemade",
  icons: {
    icon: "/favicon.ico", // Favicon
  },
  // Setting the author information
  authors: [
    {
      name: "Jacky Chong", // Replace with the actual author's name
      url: "https://connie-homemade.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FFFFFF]`}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <Provider>
              {children}
              <Analytics />
            </Provider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
