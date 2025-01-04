import PageContainer from "@/components/template/PageContainer/PageContainer";
import Text from "@/components/ui/text";
import FlexorBox from "../flexorBox/flexorBox";


const BOAHero = () => {
  const firstContent = () => {
    return (
      <Text className="text-4xl p-1 font-bold headText">Our Latest Blogs</Text>
    );
  };
  const secondContent = () => {
    return (
      <Text className="text-gray-600 text-xl px-12">
        Dive into our insightful blogs that showcase expert tips and creative
        ideas to elevate and represent your business.
      </Text>
    );
  };
  const thirdContent = () => {
    return (
      <div>
        <Text className="text-4xl p-1 font-bold">
          The new journey of Vrit Tech
        </Text>
        <Text className="text-gray-600 text-xl pe-12">
          Experience our expert solutions tailored to enhance your business with
          top-tier design, development, and animation.
        </Text>
      </div>
    );
  };
  const fourthContent = () => {
    return (
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/04/19/13/eight-706890_1280.jpg"
          alt="image"
        />
      </div>
    );
  };
  return (
    <PageContainer>
      <div className="py-12 flex flex-col justify-center items-center">
        <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
        <div className="w-[80%] h-[1px] bg-gray-200 my-20"></div>
        <FlexorBox firstBox={thirdContent()} secondBox={fourthContent()} />
      </div>
    </PageContainer>
  );
};

export default BOAHero;
