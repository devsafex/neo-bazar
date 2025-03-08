import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function AiSpeedDial() {
  //   const labelProps = {
  //     variant: "small",
  //     className:
  //       "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  //   };

  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-[#00C982]">
              <IoChatbubbleEllipsesOutline className="h-7 w-7 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <p className="font-semibold p-2 text-sm">
                Did not find solutions?
                <br />
                Click to instant chat!
              </p>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
