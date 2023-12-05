import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FC } from "react";

const typeVans = ["simple", "luxury", "rugged"];

interface Props {
    handleFilter: (vlaue:string) => void 
}

const Filter:FC<Props> = ({handleFilter}) => {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-5">
        {typeVans.map((item) => (
          <li key={item}>
            <Button
            onClick={() => {
                handleFilter(item)
            }}
              variant={item as never}
              className={cn(
                // ` hover:${listColor[item]}`,
                "bg-[#FFEAD0] text-[#4D4D4D] font-medium text-base w-28 capitalize"
              )}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => handleFilter('clear')} className="text-[#4D4D4D] font-medium text-base" variant={"link"}>
        Clear filters
      </Button>
    </div>
  );
};

export {Filter}