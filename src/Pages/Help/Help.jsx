import FaqSwiper from "./FaqSwiper";

export default function Help() {
  return (
    <section className="w-11/12 mx-auto py-12">
      {/* Section Heading */}
      <div className="flex justify-between items-center">
        {/* Heading Text */}
        <div>
          <h2 className="text-black font-bold text-xl">You got a problem?</h2>
          <p className="text-gray-500">
            No worry, we will help to solve the problems.
          </p>
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
          <button className="rounded px-2 py-1.5 bg-[#00C982] text-white font-semibold">
            Search
          </button>
        </div>
      </div>
      {/* Popular Questions */}
      <div className="py-8">
        <FaqSwiper />
      </div>
    </section>
  );
}
