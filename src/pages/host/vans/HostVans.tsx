import { Titel } from "@/components/ui/Titel";
import { get } from "@/lib/fetch";
import { TVan } from "@/type/van";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Card: FC<TVan> = ({ imageUrl, name, price, id }) => {
  const router = useLocation();
  return (
    <Link to={`${router.pathname}/${id}`}>
      <div className="flex bg-white py-4 px-6 justify-between items-center">
        <div className="flex gap-4">
          <img className="h-16 w-16" src={imageUrl} />
          <div className="flex flex-col">
            <p className="text-[#1616161] font-semibold text-xl">{name}</p>
            <p className="text-[#4D4D4D] font-medium text-base">{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HostVans = () => {
  const [vans, setVans] = useState<TVan[]>();

  const getData = async () => {
    const data = await get<{ vans: TVan[] }>("/api/host/vans");
    setVans(data.vans);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col  py-9 px-6">
      <Titel>Your listed vans</Titel>
      <div className="flex flex-col mt-8 gap-4">
        {vans && vans?.length > 0 ? (
          vans?.map((van) => <Card {...van} key={van.id} />)
        ) : (
          <h2>Loding.....</h2>
        )}
      </div>
    </div>
  );
};

export default HostVans;
