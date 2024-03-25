"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import Drawer from "./Drawer";

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  {
    name: "Про нас",
    href: "#about",
  },
  {
    name: "Як приєднатися",
    href: "#howToJoin",
  },
  {
    name: "Статистика",
    href: "#statistic",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 w-full px-6 flex justify-between gap-20 pt-[1.5vw] pb-[2.75vw] md:py-[1.5vw] backdrop-blur-sm bg-bci-purple bg-opacity-50 fixed items-center align-middle"
    >
      <div
        onClick={() => {
          handleScrollClick("#top");
        }}
        className="logo cursor-pointer relative z-20 flex align-middle gap-3 md:top-0 top-[0.8vw]"
      >
        <Image
          src="/BCILogo.svg"
          alt="logo"
          height={150}
          width={100}
          draggable="false"
          className="xl:w-48 w-24 mr-40"
        />
      </div>
      <div className=" hidden xl:flex xl:justify-between w-full mr-32 text-white leading-none">
        {navigation.map((nav_item) => (
          <span
            onClick={() => {
              handleScrollClick(nav_item.href);
            }}
            key={nav_item.name}
            className={`font-montserrat font-semibold h-full text-2xl cursor-pointer hover:scale-105 transition-all duration-500`}
          >
            {nav_item.name}
          </span>
        ))}
      </div>
      <Dialog.Root>
        <div className="flex xl:hidden relative top-1">
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="-m-2.5 relative z-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
        </div>
        <Drawer
          setMobileMenuOpen={setMobileMenuOpen}
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
        />
      </Dialog.Root>
    </motion.header>
  );
}
