import { Button } from "@/components/ui/button";
import { UsersRound, Laugh, FileCheck } from "lucide-react";

export default function IntroSection() {
  return (
    <section className=" lg:w-[70%] w-full mx-auto text-center">
      <div className=" flex flex-col gap-7 justify-center items-center h-screen ">
        <div className=" text-6xl font-medium  pacifico-regular">
          Meet our beautiful team
        </div>
        <div className=" text-md text-gray-600  ">
          Our philosophy is simple; hire great people and give them the resource
          and support to do their best work
        </div>
        <div>
          <Button variant="outline">Get in Touch</Button>
        </div>
        <div>
          <ul className=" text-xs lg:text-sm flex items-center gap-3 lg:gap-10 ">
            <li className=" flex items-center gap-1 ">
              <Laugh size={16} />
              <div>15+ Happy Client</div>
            </li>
            <li className=" flex items-center gap-1 ">
              <FileCheck size={16} />
              <div>15 Projects</div>
            </li>{" "}
            <li className=" flex items-center gap-1 ">
              <UsersRound size={16} />
              <div>20 Team Member</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
