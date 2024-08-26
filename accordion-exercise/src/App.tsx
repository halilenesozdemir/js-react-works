import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

interface AccordionProps {
  data: {
    title: string;
    text: string;
  }[];
}

interface AccordionItemProps {
  title: string;
  num: number;
  handleToggle: (num: number) => void;
  children: React.ReactNode;
  isOpen: boolean;
}

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }: AccordionProps) {
  const [selectedAcc, setSelectedAcc] = useState<number | null>(null);

  function handleToggle(num: number) {
    const isAccOpen = selectedAcc === num;
    setSelectedAcc(isAccOpen ? null : num);
  }
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          key={el.title}
          isOpen={selectedAcc === i}
          handleToggle={handleToggle}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  handleToggle,
  children,
  isOpen,
}: AccordionItemProps) {
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
