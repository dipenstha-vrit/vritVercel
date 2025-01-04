import { VritFooterIcon, VritLogoIcon } from "@/app/images";
import SocialLinks from "@/components/molecules/socialList/socialList";
import { Separator } from "@/components/ui/separator";
import Text from "@/components/ui/text";
import { footList1, navList2, serviceList1 } from "@/constant/navList";
import { socialLinks } from "@/constant/socialList";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#02174d] pt-12 md:pt-20 h-full flex flex-col gap-8 lg:gap-24 items-center px-5 md:px-20 lg:px-40">
        <div className="w-full h-full flex justify-between space-y-4 flex-wrap">
          {/* left side  */}
          <div className="flex flex-col gap-8  lg:w-[30%] text-white">
            <div className="flex flex-col gap-4">
              <div className="">
                <VritLogoIcon fill="white" />
              </div>
              <div>
                <span className="text-gray-400 text-sm hidden md:block">
                  We’re your tech partner dedicated to transforming your unique
                  vision into reality. With tailored solutions and support, we
                  help you achieve your ambitious goals and drive your success.
                </span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              <ul>
                <li>Call us: +977 986-160-1174</li>
                <li>Sankhamul, Baneshwor</li>
                <li>info@vrittechnologies.com</li>
              </ul>
            </div>
            <div>
              <Text className="font-semibold px-0">Social Media</Text>
              <div className="flex gap-0 items-start justify-start">
                <SocialLinks
                  links={socialLinks}
                  padding={"none"}
                  spacing={"small"}
                />
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="flex lg:justify-end text-white lg:w-[70%] space-x-8 xl:gap-24 ">
            <div className="flex flex-col gap-4 w-fit">
              <span className="font-semibold">Company</span>
              <div className="flex flex-col gap-2">
                {footList1?.map((item, index) => (
                  <Link key={index} href={item?.path}>
                    <span className="text-sm text-gray-400">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-fit">
              <span className="font-semibold">Resources</span>
              <div className="flex flex-col gap-2">
                {navList2?.map((item, index) => (
                  <Link key={index} href={item?.path}>
                    <span className="text-sm text-gray-400">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-fit">
              <span className="font-semibold">Services</span>
              <div className="flex flex-col gap-2">
                {serviceList1?.map((item, index) => (
                  <Link key={index} href={item?.path}>
                    <span className="text-sm text-gray-400">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between gap-4 flex-wrap text-gray-400 text-sm">
          <span>Copyright ©2024 Vrit Technologies. All rights reserved.</span>
          <div className="flex gap-2">
            <span>PrivacyPolicy</span>
            <Separator className="bg-gray-500" />
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="mt-4">
          <VritFooterIcon className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default Footer;
