/*
 * @Description: navbar
 * @Author: jiangwh
 * @Date: 2024-04-29 17:09:51
 * @LastEditors: jiangwh
 * @LastEditTime: 2024-04-30 14:52:13
 */
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          视频会议
        </p>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
