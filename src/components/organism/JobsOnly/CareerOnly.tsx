import PositionCard from "@/components/molecules/card/PositionCard";
import Text from "@/components/ui/text";
import { positionList } from "@/constant/positionList";
import FlexorBox from "../flexorBox/flexorBox";


// Group positions by category (e.g., "Engineer")
const groupPositionsByCategory = () => {
  return positionList.reduce((groups, position) => {
    const category = position.group || "Others"; // Use "Others" if no category is provided
    if (!groups[category]) groups[category] = [];
    groups[category].push(position);
    return groups;
  }, {} as Record<string, typeof positionList>);
};

const CareerOnly = () => {
  const groupedPositions = groupPositionsByCategory();

  return (
    <div className="py-[25px] md:py-[50px] border space-y-12">
      {Object.entries(groupedPositions).map(([category, positions]) => (
        <FlexorBox
          key={category}
          firstBox={
            <div className="md:w-[50%] space-y-8 w-full h-full text-start">
              <Text className="headText w-full text-3xl">{category}</Text>
            </div>
          }
          secondBox={
            <div className="md:w-[80%] space-y-16">
              <div className="flex flex-col gap-4">
                {positions.map((position, index) => (
                  <PositionCard
                    key={index}
                    title={position.title}
                    experience={position.exp}
                    vacancy={position.vacancy}
                  />
                ))}
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
};

export default CareerOnly;
