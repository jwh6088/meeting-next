/*
 * @Description: 首页 layout
 * @Author: jiangwh
 * @Date: 2024-04-29 16:36:51
 * @LastEditors: jiangwh
 * @LastEditTime: 2024-04-29 17:47:26
 */
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full"> {children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
