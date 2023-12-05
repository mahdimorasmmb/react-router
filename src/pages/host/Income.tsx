import Chart from "@/components/Chart";
import { Titel } from "@/components/ui/Titel";
import { Button } from "@/components/ui/button";

const Card = () => {
  return (
    <div className="bg-white flex justify-between py-9 px-7 rounded">
      <p className="text-[#161616] text-4xl font-semibold">$720</p>
      <p className="text-[4D4D4D] text-xl font-medium">1/12/22</p>
    </div>
  );
};

const Income = () => {
  return (
    <div className="flex flex-col py-9 px-6 bg-[#FFF7ED] gap-11">
      <Titel>Income</Titel>
      <p className="text-base font-medium text-[#4D4D4D]">
        Last <span className="font-bold underline">30 days</span>
      </p>
      <p className="text-[#161616] font-semibold text-5xl">$2,260</p>
      <Chart />
      <div className="flex justify-between">
        <p className="text-[#161616] text-2xl font-bold">Your listed vans</p>
        <Button className="" variant={"ghost"}>
          View all
        </Button>
      </div>
      <div className="flex flex-col gap-7">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Income;
