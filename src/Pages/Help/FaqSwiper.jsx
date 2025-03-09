import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QuestionsCard from "./QuestionsCard";

export default function FaqSwiper() {
  const [startIndex, setStartIndex] = useState(0);
  const [faq, setFaq] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(4); // Default to desktop (4 cards)

  // Update number of cards per page based on screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 640) {
        setCardsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth <= 1024) {
        setCardsPerPage(2); // Tablet: 2 cards
      } else {
        setCardsPerPage(4); // Desktop: 4 cards
      }
    };

    updateCardsPerPage(); // Initial check
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
      });
  }, []);

  // Swiper Next FAQs
  const nextSlide = () => {
    if (startIndex + cardsPerPage < faq.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };
  // Swiper Previous FAQs
  const prevSlide = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-5 md:gap-8">
        {/* Previous Arrow */}
        <div className="hover:tranform hover:-translate-x-3 hover:transition duration-700 ease-in-out">
          {startIndex > 0 && (
            <button
              onClick={prevSlide}
              className="p-2 md:p-3 bg-[#00C982] text-white rounded-full"
            >
              <FaArrowLeft className="text-base md:text-xl" />
            </button>
          )}
        </div>
        {/* Display All FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {faq.slice(startIndex, startIndex + cardsPerPage).map((item) => (
            <QuestionsCard
              key={item.id}
              image={item.image}
              question={item.question}
              answer={item.answer}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 rounded-lg text-center"
            />
          ))}
        </div>
        {/* Next Arrow */}
        <div className="hover:tranform hover:translate-x-3 hover:transition duration-700 ease-in-out">
          {startIndex + cardsPerPage < faq.length && (
            <button
              onClick={nextSlide}
              className="p-2 md:p-3 bg-[#00C982] text-white rounded-full"
            >
              <FaArrowRight className="text-base md:text-xl" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
