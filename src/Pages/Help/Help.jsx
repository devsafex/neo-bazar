import { useEffect, useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { Button } from "./../../Shaired/Button";
import { AiChat } from "./AiChat";
import FaqSwiper from "./FaqSwiper";
import ProblemCategoryCard from "./ProblemCategoryCard";
import SectionTitle from "./SectionTitle";

export default function Help() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <section className="w-11/12 mx-auto py-7 md:pt-8">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Heading Text */}
        <div className="flex items-center gap-1.5">
          <MdOutlineReportGmailerrorred className="text-red-500 text-5xl" />
          <div>
            <h2 className="text-black font-bold text-lg">You got a problem?</h2>
            <p className="text-gray-500">
              No worry, we will help to solve the problems.
            </p>
          </div>
        </div>
        {/* Search Box */}
        <div className="flex items-center gap-2">
          <div className="border border-gray-300 rounded px-2 py-1.5">
            <label className="input flex items-center gap-1.5">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="outline-none"
              />
            </label>
          </div>
          {/* <button className="rounded px-2 py-1.5 bg-[#00C982] text-white font-semibold">
            Search
          </button> */}
          <Button fullWidth size="sm" className="bg-[#00C982] rounded">
            <span>Search</span>
          </Button>
        </div>
      </div>
      {/* Popular Questions */}
      <div className="py-8 md:py-10 lg:py-3">
        <SectionTitle
          title={"Popular Questions"}
          subTitle={"Find your solve here, may be it already exists!"}
        />
        <div className="pt-4">
          {/* FAQ Swiper */}
          <FaqSwiper />
        </div>
      </div>
      {/* Problem Category */}
      <div className="pt-6 md:pt-4">
        <SectionTitle title={"Problem Category"} />
        {/* Categories */}
        <div className="flex items-center justify-center gap-4 overflow-x-scroll pb-2 lg:pt-4 lg:overflow-x-auto">
          {category.map((item) => (
            <ProblemCategoryCard
              key={item.id}
              image={item.img}
              category={item.name}
            />
          ))}
        </div>
      </div>
      {/* AiChat Icon */}
      <div className="pt-12 relative">
        <AiChat />
      </div>
    </section>
  );
}
