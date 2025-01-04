import EmailPrefForm from "@/components/molecules/form/ContactForm/EmailPrefForm";
import PageContainer from "@/components/template/PageContainer/PageContainer";
import Wrapper from "@/components/template/Wrapper/Wrapper";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";


const EmailPreference = () => {
  return (
    <div>
      <PageContainer>
        <Wrapper>
          <div className="flex flex-col">
            <Text className="headText text-2xl font-black">Welcome User,</Text>
            <Text className="text-xl">Update your email preference here.</Text>
            <Text className="text-gray-700">
              Please, select your favorite category from the following tags and
              stay up-to date from the latest news, blogs and case studies{" "}
            </Text>
          </div>
          <div className="border-b py-16">
            <EmailPrefForm />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <Text className="text-xl">
                Do you want to unsubscribe our newsletter?
              </Text>
              <Text className="text-gray-700">
                Felt sorry to see you go, however if you want to join again, You
                may simply go to vrittechnologies.com and subscribe again
              </Text>
            </div>
            <Button variant={"outline"} type="button" className="w-fit mb-6">
              Unsubscribe
            </Button>
          </div>
        </Wrapper>
      </PageContainer>
    </div>
  );
};

export default EmailPreference;
