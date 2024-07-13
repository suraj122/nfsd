import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Accordion item #1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda mollitia saepe at quasi tenetur doloremque dolor, fugit numquam quis nesciunt, sint quaerat dolorum quae exercitationem officia. Odit architecto eum impedit!",
  },
  {
    title: "Accordion item #2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda mollitia saepe at quasi tenetur doloremque dolor, fugit numquam quis nesciunt, sint quaerat dolorum quae exercitationem officia. Odit architecto eum impedit!",
  },
  {
    title: "Accordion item #3",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda mollitia saepe at quasi tenetur doloremque dolor, fugit numquam quis nesciunt, sint quaerat dolorum quae exercitationem officia. Odit architecto eum impedit!",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="max-w-2xl mx-auto">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          setIsopen={() => {
            openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
