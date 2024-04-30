/*
 * @Description: 侧栏导航
 * @Author: jiangwh
 * @Date: 2024-04-29 17:10:18
 * @LastEditors: jiangwh
 * @LastEditTime: 2024-04-30 15:50:35
 */
"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex- flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
