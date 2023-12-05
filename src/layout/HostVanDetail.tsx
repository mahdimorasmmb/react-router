import { Badge } from "@/components/ui/badge";
import NavbarDashboard, { ListType } from "@/layout/NavbarDashboard";
import { get } from "@/lib/fetch";
import { TVan } from "@/type/van";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const price = 40;
const HostVanDetail = () => {
  const [data, setCurrentvan] = useState<TVan>();
  const { id } = useParams();

  const getrData = async () => {
    const data = await get<{ vans: TVan[] }>(`/api/host/vans/${id}`);
    setCurrentvan(data.vans[0]);
  };

  useEffect(() => {
    getrData();
    console.log(data);
  }, [id]);

  const listnav: ListType[] = [
    {
      label: "Details",
      path: `/host/vans/${id}`,
      end: true,
    },
    {
      label: "Pricing",
      path: `/host/vans/${id}/pricing`,
    },
    {
      label: "Photos",
      path: `/host/vans/${id}/photos`,
    },
  ];
  return (
    <div className="flex flex-col items-start bg-[#FFF7ED]">
      <Link className="flex items-center " relative="path" to="..">
        <ArrowLeftIcon className="h-5 w-5 " /> Back to all vans
      </Link>
      <div className="flex flex-col w-full  px-6 mt-10 ">
        <div className="bg-white flex flex-col p-6">
          <div className="flex gap-5 items-center">
            <img src={data?.imageUrl} className="w-40 h-40" />
            <div className="flex flex-col gap-4 ">
              <Badge className="py-1 px-2 rounded w-max" variant={data?.type}>
                {data?.type}
              </Badge>
              <h2 className="text-[#161616] text-2xl font-bold">
                {data?.name}
              </h2>
              <p className="flex items-center">
                <span className="text-xl font-semibold  ">{data?.price}</span>
                <span className="leading-3 font-medium  text-sm">/day</span>
              </p>
            </div>
          </div>
          <div className="py-8">
            <NavbarDashboard bg="bg-white" listNav={listnav} />
            <Outlet context={{ currentvan: data }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostVanDetail;
