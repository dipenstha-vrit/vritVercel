"use client";
import { AllBreadCrumbs } from "@/components/molecules/breadCrumbs/allBreadCrumbs/AllBreadCrumbs";
import PreferPositionCard from "@/components/molecules/card/preferpositioncard";
import InfiniteImageLR from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageLR";
import InfiniteImageRL from "@/components/molecules/infiniteMove/InfiniteImage/InfiniteImageRL";
import BTS from "@/components/organism/Career/BTS/BTS";
import BuildCareer from "@/components/organism/Career/BuildCareer/BuildCareer";
import FutureShape from "@/components/organism/Career/FutureShape/FutureShape";
import HiringTeam from "@/components/organism/Career/HiringTeam/HiringTeam";
import ElevateBusiness from "@/components/organism/Landing/ElevateBusiness/ElevateBusiness";
import Wrapper from "../Wrapper/Wrapper";


const ManageCareer = () => {
  return (
    <>
      <AllBreadCrumbs />
      <Wrapper>
        <FutureShape />
      </Wrapper>
      <div className="pattern1 h-[150px] md:h-[225px]"></div>
      <BuildCareer />
      <PreferPositionCard
        title="Didn't find your prefer position?"
        description="Follow us in our social media to stay updated."
        btnName="Send us your CV"
      />
      <Wrapper>
        <HiringTeam />
      </Wrapper>
      <div className="pattern1 h-[150px]"></div>
      <BTS />
      <div className="w-full overflow-x-hidden space-y-4">
        <InfiniteImageLR />
        <InfiniteImageRL />
      </div>
      <ElevateBusiness />
    </>
  );
};

export default ManageCareer;
