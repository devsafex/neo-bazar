import { IoIosSend } from "react-icons/io";

export function SendMessageInput() {
  return (
    <div className="flex gap-2 items-center w-3/4 md:w-2/3 lg:w-1/2 fixed bottom-0 left-16 md:left-44 lg:left-1/4 pb-2">
      <div className="w-full">
        <input
          type="text"
          name="message"
          className="border border-gray-300 rounded-full w-full py-1 px-4 bg-white shadow-md"
          placeholder="Aa"
        />
      </div>
      <IoIosSend className="text-3xl text-[#00C982] cursor-pointer" />
    </div>
  );
}
