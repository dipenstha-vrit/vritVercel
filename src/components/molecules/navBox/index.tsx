import Text from "@/components/ui/text";
import { navList1, navList2 } from "@/constant/navList";
import { socialLinks } from "@/constant/socialList";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuAnimation from "../menuList/menuAnimation";
import MenuAnimationSm from "../menuList/menuAnimationSm";
import SocialLinks from "../socialList/socialList";

type NavBoxProps = {
  handleMenu: () => void;
};

const NavBox = ({ handleMenu }: NavBoxProps) => {
  return (
    <motion.div
      variants={{
        inital: {
          y: "-100%",
          transition: {
            duration: 0.7,
          },
        },
        enter: {
          y: "0%",
          transition: {
            duration: 0.7,
          },
        },
        exit: {
          y: "-100%",
          transition: {
            duration: 0.7,
          },
        },
      }}
      exit="exit"
      initial="inital"
      animate="enter"
      className="fixed top-0 left-0 bottom-0 w-dvw h-dvh bg-[#0c0c0c] text-white z-20 px-5 md:px-0"
    >
      <div className="flex justify-between items-center w-full h-[90%]  lg:px-14 ">
        <div className="flex w-full flex-wrap">
          <div className="md:w-[40%] w-[50%]  flex flex-col gap-5 headText ">
            {navList1?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                onClick={handleMenu}
                className=""
              >
                <MenuAnimation menuItem={item?.name} />
              </Link>
            ))}
          </div>
          <div className="md:w-[20%] w-[50%]  flex flex-col md:gap-2 headText ps-12 sm:ps-16 md:ps-0 ">
            <span className="font-semibold ps-[5px]  md:ps-10 opacity-80">
              Resources
            </span>
            <div className="flex flex-col gap-4">
              {navList2?.map((item, index) => (
                <Link key={index} href={item?.path} onClick={handleMenu}>
                  <MenuAnimationSm menuItem={item?.name} />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[40%] hidden  md:flex flex-col space-y-6 px-24 xl:px-32 justify-between whitespace-nowrap">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2  w-full">
                <span className="font-semibold text-lg opacity-80">
                  Find us at
                </span>
                <div className="flex flex-col ">
                  <span className="text text-sm ">Sankhamul, Baneshwor</span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
              <div className="flex flex-col gap-2  w-full ">
                <span className="font-semibold text-lg opacity-80">
                  Get in touch
                </span>
                <div className="flex flex-col">
                  <span className="text text-sm">+977 986-1601-174</span>
                  <span>info@vrittechnologies.com</span>
                </div>
              </div>
            </div>
            <div>
              <Text className="font-semibold">Connect with us</Text>
              <div className=" flex">
                <SocialLinks
                  links={socialLinks}
                  padding={"none"}
                  spacing={"small"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* foot  */}
      <div className=" flex flex-col md:flex-row justify-between h-[10%] md:ps-24 md:pe-52 text-gray-500">
        <div className="">
          <Text>Copyright © 2024 @Vrit Tech . Kathmandu, Nepal</Text>
        </div>
        <div className="flex gap-2 whitespace-nowrap">
          <span>Privacy Policy</span>.<span>Terms and Condition</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBox;
