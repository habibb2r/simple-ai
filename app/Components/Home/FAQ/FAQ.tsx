import { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";

type TAcocrdionItemProps = {
  title: string;    
    content: string;
    index: number;
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void; 
};

const AccordionItem: React.FC<TAcocrdionItemProps> = ({ title, content, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  const handleToggle = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-200 mx-[15%] py-3">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={handleToggle}
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
       {
         isOpen ? <FiMinusCircle className="text-[#7F56D9] text-2xl" /> : <GoPlusCircle className="text-[#7F56D9] text-2xl" />
       }


      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 text-sm transition duration-300">
          {content}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    {
      title: "What social media platforms do you support?",
      content: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn."
    },
    {
      title: "How does the AI generate captions and hashtags?",
      content: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn."
    },
    {
      title: "What are the requirements for connecting my accounts?",
      content: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn."
    },
    {
      title: "Is my data secure on your platform?",
      content: "Absolutely. Tailwind works beautifully with React, providing full control over components."
    },
    {
      title: "Can I edit the AI-generated captions and hashtags?",
      content: "Yes, Tailwind integrates perfectly with Vite via PostCSS and a simple config."
    }
  ];

  return (
    <div className="mx-[20%] py-[3%] mt-10 border border-gray-300 rounded-md shadow-sm bg-[#FFFFFA]">
        <div className="text-center py-[5%]">
            <h1 className="text-3xl font-bold mb-2">Frequently asked questions</h1>
            <p className="text-gray-400">Everything you need to know about the product and billing.</p>
        </div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default FAQ;
