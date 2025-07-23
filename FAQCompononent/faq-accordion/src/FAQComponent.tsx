import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export interface FAQProps {
   item: {
      question: string;
      answer: string;
   },
   index: number
}

const FAQComponent = ({ item, index }: FAQProps) => {
   const [isShow, setIsShow] = useState<boolean>(false);
   const handleClick = () => {
      setIsShow(show => !show);
   }
   useEffect(() => {
      if (index === 0) setIsShow(true);
   }, []);

   return (
      <div className="faq-container "
         onClick={handleClick}>
         <div className="faq-question " >
            <h2 className="faq-quest">{item.question}</h2>
            <button className="faq-btn">{isShow ? <FaChevronDown /> : <FaChevronUp />}</button>
         </div>
         {isShow && (<hr className="my-3 border-t border-gray-300 transition-opacity duration-200" />)}
         {/* ${isShow ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-y-95"} */}
         <div className={`faq-answer `}>
            {isShow && <p className="text-base text-gray-800">{item.answer}</p>
            }
         </div>
      </div>
   )
}

export default FAQComponent;