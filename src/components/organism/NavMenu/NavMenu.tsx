"use client";
import { MenuEqualIcon, VritLogoIcon, XMenuIcon } from "@/app/images";
import NavBox from "@/components/molecules/navBox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const NavMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleMenu = () => {
    setNavOpen(!navOpen);
  };
  const pathname = usePathname();
  console.log(pathname, "pathname");
  const currentPath =
    pathname === "/"
      ? ""
      : decodeURIComponent(
          pathname?.slice(1).charAt(0).toUpperCase() + pathname?.slice(2)
        );

  const whitePath = ["/jobs/", "/faq"];
  const normalizedPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  // Check if the pathname starts with any of the whitePath items
  const isWhite = whitePath.some((path) => normalizedPathname.startsWith(path));
  const isCaseStudy = pathname === "/projectdetail";
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`z-50 fixed top-0 w-full h-min px-[20px] md:px-[40px] lg:px-[90px] py-[20px] flex-col flex md:flex-row justify-between items-end bg-transparent`}
      >
        <div
          className={`w-full flex md:flex-row md:justify-between items-center flex-wrap`}
        >
          <div className="flex items-center">
            <div className="pe-5">
              <Link
                href="/"
                onClick={() => {
                  if (navOpen) {
                    handleMenu();
                  } else {
                    pathname === "/" && scrollY.set(0);
                  }
                }}
              >
                <VritLogoIcon
                  fill={navOpen || isWhite || isCaseStudy ? "white" : "black"}
                  className="w-[100px] md:w-[134px] h-[36px]"
                />
              </Link>
            </div>
            {!navOpen && <Separator className="md:block hidden" />}
            <div className="hidden md:block">
              {pathname !== "/" && (
                <div className="ps-4 pt-1">
                  <span
                    className={`${
                      isWhite || isCaseStudy ? "text-gray-200" : "text-gray-500"
                    } `}
                  >
                    {currentPath}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              className={`${
                isWhite && !navOpen
                  ? "bg-white text-[#1253ED] duration-300 hover:bg-gray-200"
                  : ""
              } text-xs`}
            >
              Start Your Project
            </Button>
            <Button
              onClick={handleMenu}
              className={clsx("group rounded-3xl", {
                "text-white border-gray-400": isCaseStudy && !navOpen,
                "text-white md:hover:bg-[#1253ED] active:bg-transparent hover:text-white":
                  navOpen,
                "text-white border-gray-400 hover:bg-white hover:text-[#1253ED]":
                  isWhite && !navOpen,
              })}
              variant={"outline"}
            >
              {navOpen ? (
                <>
                  <XMenuIcon className="stroke-white" />
                  <span className="hidden md:block">Close</span>
                </>
              ) : (
                <>
                  <MenuEqualIcon
                    className={`${
                      isWhite && "stroke-white group-hover:stroke-[#1253ED]"
                    }
                    ${isCaseStudy && "stroke-white group-hover:stroke-white"}
                    ${
                      !isWhite &&
                      !navOpen &&
                      !isCaseStudy &&
                      "stroke-black group-hover:stroke-white"
                    }`}
                  />
                  <span className="hidden md:block">Menu</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence mode="wait">
        {navOpen && <NavBox handleMenu={handleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;
