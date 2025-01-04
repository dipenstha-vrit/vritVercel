import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import React from "react";

const JobContent = () => {
  return (
    <div className="w-full xl:px-[17rem] flex flex-col gap-4">
      <div className="flex flex-col gap-4 pb-16">
        <div>
          <h2>
            <Text className="font-semibold text-sm">Key Responsibilities:</Text>
          </h2>
          <Text className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed
            facere autem velit saepe at officia odit cupiditate, aliquid eveniet
            fugiat provident a quas, temporibus quia alias quibusdam omnis
            maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi non aliquam temporibus fugiat, totam laboriosam ducimus facere
            quibusdam laudantium voluptatum, corporis quae reprehenderit magni
            explicabo expedita sunt exercitationem? Ipsum, reprehenderit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            excepturi eos ipsa dolore beatae quia? Magnam, debitis. Eos sint
            dicta culpa laboriosam architecto, nemo minus, quam dolores tenetur
            labore possimus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta quo tenetur, iure omnis numquam dolorem. Ipsum ipsam
            eveniet optio voluptatibus aperiam sed praesentium placeat numquam,
            quaerat eaque eligendi eius officiis?
          </Text>
        </div>
        {/* requirements */}
        <div>
          <h2>
            <Text className="font-semibold text-sm">Requirements:</Text>
          </h2>
          <div className="text-sm text-gray-700 py-4">
            <ul className="list-disc space-y-2 ps-6">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        {/* Benefits */}
        <div>
          <h2>
            <Text className="font-semibold text-sm">Benefits:</Text>
          </h2>
          <div className="text-sm text-gray-700 py-4">
            <ul className="list-disc space-y-2 ps-6">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <Button className="w-fit">Apply Now</Button>
      </div>

      {/* join us  */}
      <div className="py-20 xl:w-[64%] flex xl:block flex-col items-center text-center xl:text-start">
        <h1>
          <Text className="headText text-3xl md:text-4xl font-semibold">
            Join us to build better user experience
          </Text>
        </h1>
        <Text className="py-8 text-gray-700">
          Why Settle for Ordinary When You Can Have Extraordinary? Dive Into a
          Career That Feels Like Play and Enjoy Every Moment of the Ride!
        </Text>
        <Button className="w-fit">See all open position</Button>
      </div>
    </div>
  );
};

export default JobContent;
