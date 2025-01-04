import ContactForm from "@/components/molecules/form/ContactForm/ContactForm";
import Text from "@/components/ui/text";
import FlexorBox from "../flexorBox/flexorBox";


const firstContent = () => {
  return (
    <div className="xl:px-8 space-y-6 w-full h-full text-center lg:text-start">
      <Text className="text-3xl md:text-4xl font-extrabold py-1">
        Let’s build together
      </Text>
      <Text className="text-gray-700">
        Vrit Tech is ready to help businesses grow and create amazing things.
      </Text>
      <div className=" rounded-xl w-full h-[350px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s"
          alt="Vrit Build Together Image"
        />
      </div>
      {/* find us  */}
      <div>
        <Text className="font-semibold text-xl">Find us at</Text>
        <Text className="text-gray-600">
          Siddhartha margha, Kathmandu 44600
        </Text>
      </div>

      {/* get in touch  */}
      <div>
        <Text className="font-semibold text-xl">Get in touch</Text>
        <Text className="text-gray-600">
          Call us: <span className="font-semibold">+977 986-1601-174</span>
        </Text>
        <Text className="text-gray-600">
          Mail us:{" "}
          <span className="font-semibold">info@vrittechologies.com</span>
        </Text>
      </div>

      {/* connect with us  */}
      <div>
        <Text className="font-semibold text-xl">Connect with us</Text>
      </div>
    </div>
  );
};

const secondContent = () => {
  return (
    <div className=" space-y-6 w-full h-full text-center lg:text-start">
      <Text className=" w-full text-xl font-semibold p-1">
        Please complete the enclosed form.
      </Text>
      <Text className="text-gray-700">
        We’ll get back to you soon to chat about possible collaborations. You
        can expect to hear from us in about two business days.
      </Text>
      <div className="flex flex-col gap-4">
        <ContactForm />
      </div>
    </div>
  );
};

const BuildTogether = () => {
  return (
    <div className="py-14">
      <FlexorBox firstBox={firstContent()} secondBox={secondContent()} />
    </div>
  );
};

export default BuildTogether;
