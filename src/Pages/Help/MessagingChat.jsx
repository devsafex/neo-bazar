import ReusableAvatar from "./ReusableAvatar";
export default function MessagingChat() {
  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-start gap-2 pb-2">
        <ReusableAvatar image={"https://i.ibb.co.com/MGp4MPs/nick.png"} />
        <p className="max-w-2/3 bg-gray-200 py-1 px-2 rounded text-xs md:text-sm ">
          I have bought a toy was broken. What to do?
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 pb-2 pr-2">
        <p className="max-w-2/3 bg-green-100 py-1 px-2 rounded text-xs md:text-sm ">
          We are ashamed for this mistake. Mention your order ID please.
        </p>
        <ReusableAvatar image={"https://i.imgur.com/pZLDPsa.png"} />
      </div>
      <div className="flex items-center justify-start gap-2 pb-2">
        <ReusableAvatar image={"https://i.ibb.co.com/MGp4MPs/nick.png"} />
        <p className="max-w-2/3 bg-gray-200 py-1 px-2 rounded text-xs md:text-sm ">
          Order ID -{" "}
          <span className="text-blue-600 underline cursor-pointer">
            #b73vh0964hdk2025
          </span>
          . Do you want anything more?
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 pb-2 pr-2">
        <p className="max-w-2/3 bg-green-100 py-1 px-2 rounded text-xs md:text-sm ">
          Please wait a few minute, Thank you. We are concern about your
          problems. stay connected please.
        </p>
        <ReusableAvatar image={"https://i.imgur.com/pZLDPsa.png"} />
      </div>
      <div className="flex items-center justify-end gap-2 pb-2 pr-2">
        <p className="max-w-2/3 bg-green-100 py-1 px-2 rounded text-xs md:text-sm ">
          You are right! This product has been broken during shipping. Do you
          want to get refund or buy anything else?
        </p>
        <ReusableAvatar image={"https://i.imgur.com/pZLDPsa.png"} />
      </div>
      <div className="flex items-center justify-start gap-2 pb-2">
        <ReusableAvatar image={"https://i.ibb.co.com/MGp4MPs/nick.png"} />
        <p className="max-w-2/3 bg-gray-200 py-1 px-2 rounded text-xs md:text-sm ">
          I want refund. How much time will you take to refund?
        </p>
      </div>
      <div className="flex items-center justify-start gap-2 pb-2">
        <ReusableAvatar image={"https://i.ibb.co.com/MGp4MPs/nick.png"} />
        <p className="max-w-2/3 bg-gray-200 py-1 px-2 rounded text-xs md:text-sm ">
          Account Details -{" "}
          <span className="text-blue-600 underline cursor-pointer">
            1011 4242 4759 947
          </span>
          . Uttara Bank, Mirpur-10 Branch
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 pb-2 pr-2">
        <p className="max-w-2/3 bg-green-100 py-1 px-2 rounded text-xs md:text-sm ">
          We have successfully refund your payment. For further any info, ask
          me.
        </p>
        <ReusableAvatar image={"https://i.imgur.com/pZLDPsa.png"} />
      </div>
    </div>
  );
}
