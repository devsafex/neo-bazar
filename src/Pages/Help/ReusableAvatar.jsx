/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";

export default function ReusableAvatar({ image }) {
  return (
    <Avatar
      src={image}
      alt="avatar"
      className="w-8 h-8 object-cover border border-gray-300"
    />
  );
}
