/*
 * @Description: 会议室
 * @Author: jiangwh
 * @Date: 2024-04-29 16:01:53
 * @LastEditors: jiangwh
 * @LastEditTime: 2024-04-29 16:06:15
 */
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Metting: React.FC<Props> = ({ params }) => {
  return <div>Metting Room: # {params.id}</div>;
};

export default Metting;
