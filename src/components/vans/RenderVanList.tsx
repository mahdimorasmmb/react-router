import { TVan } from "@/type/van";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

const VanCard: FC<TVan> = ({ id, imageUrl, name, price, type }) => {
  return (
    <Link to={`/vans/${id}`}>
      <div>
        <img src={imageUrl} className="w-[330px] h-[330px]" />
        <div className="flex justify-between mt-2">
          <p className="text-xl font-semibold ">{name}</p>{" "}
          <p className="flex flex-col">
            <span className="text-xl font-semibold  ">{price}</span>
            <span className="leading-3 font-medium text-sm">/day</span>
          </p>
        </div>
        <Badge
          className=" font-medium text-base py-2 px-5 rounded-lg capitalize"
          variant={type as never}
        >
          {type}
        </Badge>
      </div>
    </Link>
  );
};

const VansList: FC<{ data: TVan[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {data.map((van) => (
        <VanCard {...van} key={van.id} />
      ))}
    </div>
  );
};

export { VansList };
