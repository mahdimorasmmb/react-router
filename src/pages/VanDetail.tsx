import BackPage from "@/components/BackPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TVan } from "@/type/van";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState<TVan>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/vans/${params.id}`);
      const data = await res.json();
      setVan(data.vans);
    };

    getData();
  }, [params.id]);
  return (
    <section className="flex flex-col px-5 py-14 bg-[#FFF7ED] ">
      {van ? (
        <>
          <div className="flex justify-start">
            {" "}
            <BackPage>Back to all vans</BackPage>
          </div>
          <div>
            <img src={van?.imageUrl} />
            <div>
              <Badge variant={van?.type as never}>{van?.type}</Badge>
            </div>
            <h1>{van?.name}</h1>
            <p>${van?.price}/day</p>
            <p>{van?.description}</p>
            <Button>Rent this van</Button>
          </div>
        </>
      ) : (
        <h2>loding.........</h2>
      )}
    </section>
  );
};

export default VanDetail;
