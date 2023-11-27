import { Button } from "@/components/ui/button";
import srcImage from "@assets/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <img src={srcImage} className="w-full h-[233px] object-cover" />
      <div className="bg-[#FFF7ED]">
        <div className="px-7 py-11 flex flex-col gap-8">
          <h1 className="font-bold text-4xl text-[#161616]">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-base font-medium text-[#161616]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <span className="block mt-2">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </span>
          </p>
          <div className="bg-[#FFCC8D] p-9  rounded text-[#161616]">
            <h3 className="text-2xl font-bold">
              Your destination is waiting. Your van is ready.
            </h3>
            <Link to={"/vans"}>
              <Button className="bg-[#161616] mt-6 font-bold text-sm">
                Explore our vans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
