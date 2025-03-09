/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";
export default function ReusableAvatar({ image }) {
  return (
    <div>
      <Avatar
        src={image}
        alt="avatar"
        variant="rounded"
        className="bg-green-100 border border-green-300 rounded-full w-8 h-8 object-cover"
      />
    </div>
  );
}
