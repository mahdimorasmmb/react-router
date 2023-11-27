import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-max   ">
      <div className="liner  absolute w-full h-full  -z-10 " />
      <div className="flex flex-col px-8 py-20 gap-8 ">
        <h1 className="text-[#fff] font-extrabold text-4xl ">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-[#fff] font-medium text-base">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to={"/vans"}>
          <Button className="mt-6 h-14 w-full  md:w-max text-[#fff] font-bold text-base">
            Find your van
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
