import { TVan } from "@/type/van";
import { useOutletContext } from "react-router-dom";



const HostVanPricing = () => {
  const { currentvan } = useOutletContext<{ currentvan: TVan }>();
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium text-[#161616]">
        ${currentvan?.price}
        <span className="text-[#4D4D4D] text-base font-medium">/day</span>
      </h2>
    </div>
  );
};

export default HostVanPricing;
