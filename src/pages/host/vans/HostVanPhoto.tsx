import { useOutletContext } from "react-router-dom";
import { TVan } from "@/type/van";

const HostVanPhoto = () => {
  const { currentvan:{imageUrl} } = useOutletContext<{ currentvan: TVan }>();
  return (
    <div className="p-6">
      <img src={imageUrl} className="h-28 w-28" />
    </div>
  );
};

export default HostVanPhoto;
