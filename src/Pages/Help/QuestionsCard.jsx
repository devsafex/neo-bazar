/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function QuestionsCard({ image, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Questions Card */}
      <div
        className="hover:transform hover:translate-y-2 hover:transition duration-500 ease-in-out cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="card w-72 md:w-64 bg-green-100 shadow-sm flex flex-col h-full rounded-xl">
          {/* Thumbnail */}
          <figure>
            <img
              src={image}
              alt="faq"
              className="rounded-t-xl w-full h-28 lg:h-32 object-cover"
            />
          </figure>
          {/* Questions */}
          <div className="card-body p-2">
            <h2 className="card-title font-bold flex-grow">{question}</h2>
          </div>
        </div>
      </div>
      {/* Answer in Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative  border border-gray-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <RxCross2 className="text-lg" />
            </button>

            <h2 className="text-xl font-semibold mb-4">{question}</h2>
            <p className="text-gray-600">{answer}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#00C982] text-white rounded-lg hover:bg-red-600"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
