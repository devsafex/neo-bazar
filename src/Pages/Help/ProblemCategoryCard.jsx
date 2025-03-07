/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";
export default function ProblemCategoryCard({ image, category }) {
  return (
    <div className="hover:transform hover:translate-y-2 hover:transition duration-500 ease-in-out">
      <div className="flex flex-col items-center gap-3">
        <Avatar
          src={image}
          alt="avatar"
          variant="rounded"
          className="bg-green-100 border border-green-300 rounded"
        />
        <h2 className="text-sm font-bold text-black">{category}</h2>
      </div>
    </div>
  );
}
