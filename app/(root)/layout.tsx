/*
 * @Description: root layout
 * @Author: jiangwh
 * @Date: 2024-04-29 15:26:45
 * @LastEditors: jiangwh
 * @LastEditTime: 2024-04-29 16:58:13
 */
import React from "react";

type Props = {
  children: React.ReactNode;
};
const RootLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default RootLayout;
