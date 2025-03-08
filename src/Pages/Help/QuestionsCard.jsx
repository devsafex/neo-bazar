/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";

export default function QuestionsCard({ image, question, answer }) {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  return (
    <>
      <div
        className="hover:transform hover:translate-y-2 hover:transition duration-500 ease-in-out cursor-pointer"
        onClick={() => handleOpen("xs")}
      >
        <div className="card w-72 md:w-64 bg-green-100 shadow-sm flex flex-col h-full rounded-xl">
          <figure>
            <img
              src={image}
              alt="faq"
              className="rounded-t-xl w-full h-28 lg:h-32 object-cover"
            />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title font-bold flex-grow">{question}</h2>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Dialog open={size === "xs"} size={size || "xs"} handler={handleOpen}>
        <DialogHeader>{question}</DialogHeader>
        <DialogBody>{answer}</DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Got it</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
