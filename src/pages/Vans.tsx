import { Filter } from "@/components/vans/Filter";
import { VansList } from "@/components/vans/RenderVanList";
import { TVan } from "@/type/van";
import {  useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState<TVan[]>([]);
  const [vansFilter, setVansFilter] = useState<TVan[]>([]);

  const getData = async () => {
    const res = await fetch("/api/vans");
    const data = await res.json();
    setVans(data.vans);
    setVansFilter(data.vans);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (value: string) => {
    if (value === "clear") {
      setVansFilter(vans)
      return null
    }
    const newList = vans.filter((item) => item.type === value);
    setVansFilter(newList);
  };

  return (
    <section className="flex flex-col px-5 py-14 bg-[#FFF7ED] gap-5">
      <h1 className="text-[#161616] text-4xl font-bold">
        Explore our van options
      </h1>
      <Filter handleFilter={handleFilter} />
      <VansList data={vansFilter} />
    </section>
  );
};

export default Vans;
