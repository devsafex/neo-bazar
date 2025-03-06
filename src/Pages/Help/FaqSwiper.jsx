import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QuestionsCard from "./QuestionsCard";

export default function FaqSwiper() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const [faq, setFaq] = useState([]);
  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
      });
  }, []);
  console.log(faq);

  const nextSlide = () => {
    if (startIndex + cardsPerPage < faq.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <>
      <div className="flex item-center">
        {startIndex > 0 && (
          <button
            onClick={prevSlide}
            className="p-2 bg-[#00C982] text-white rounded-full"
          >
            <FaArrowLeft />
          </button>
        )}
        <div className="flex gap-8">
          {faq.slice(startIndex, startIndex + cardsPerPage).map((item) => (
            <QuestionsCard
              key={item.id}
              image={item.image}
              question={item.question}
            />
          ))}
        </div>
        <div>
          {startIndex + cardsPerPage < faq.length && (
            <button
              onClick={nextSlide}
              className="p-2 bg-[#00C982] text-white rounded-full"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
