import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type AccordionProps = {
  id: string;
  title: string;
  description: string;
};

const Accordioner = ({ id, title, description }: AccordionProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={id}>
        <AccordionTrigger className="text-xl font-semibold">{title}</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordioner;
