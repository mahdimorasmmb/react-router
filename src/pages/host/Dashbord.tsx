import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import imagCard from "@assets/card.png";

const Card = () => {
  return (
    <div className="flex bg-white py-4 px-6 justify-between items-center">
      <div className="flex gap-4">
        <img className="h-16 w-6/12" src={imagCard} />
        <div className="flex flex-col">
          <p className="text-[#1616161] font-semibold text-xl">Modes</p>
          <p className="text-[#4D4D4D] font-medium text-base">price</p>
        </div>
      </div>
      <Button variant={"ghost"}>Edit</Button>
    </div>
  );
};

const Dashbord = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-[#FFEAD0] py-9 px-6 gap-8">
        <h1 className="text-[#161616] text-4xl font-bold">Welcome!</h1>
        <div className="flex justify-between">
          <p className="text-[#4D4D4D] text-base font-medium">
            Income lasr <span className="underline font-bold">30 days</span>
          </p>
          <Button className="" variant={"ghost"}>
            Details
          </Button>
        </div>
        <p className="text-[#161616] font-extrabold text-5xl">$2,260</p>
      </div>
      <div className="flex  justify-between py-11 px-6 bg-[#FFDDB2]">
        <p className="text-[#161616] text-2xl font-bold flex items-center gap-1">
          Review score <StarFilledIcon className="h-6 w-6 text-[#FF8C38]" />
          <span className=" text-[#161616] text-xl font-bold "> 5.0</span>
          <span className="text-[#4D4D4D] text-xl  font-medium">/5</span>
        </p>
        <Button variant={"ghost"}>Details</Button>
      </div>
      <div className="flex flex-col bg-[#FFF7ED] px-6 py-9">
        <div className="flex justify-between items-center">
          <p className="text-[#161616] text-2xl font-bold">Your listed vans</p>
          <Button className="" variant={"ghost"}>
            View all
          </Button>
        </div>
        <div className="flex flex-col mt-8 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
