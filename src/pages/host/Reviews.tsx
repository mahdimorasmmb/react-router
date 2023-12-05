import { Titel } from "@/components/ui/Titel";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Progress } from "@/components/ui/progress";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";

export type CommentType = {
  id: string;
  stars: number;
  user: string;
  crateedAt: string;
  content: string;
};

const StarPoint = () => {
  return (
    <div className="flex items-center gap-3 ">
      <p className="text-[#4D4D4D] font-medium text-base">5 stars</p>{" "}
      <Progress className="w-9/12 h-2" value={33} />
      <p className="text-[#4D4D4D] font-medium text-base">100%</p>{" "}
    </div>
  );
};
const Comments = () => {
  const data: { count: number; comments: CommentType[] } = {
    count: 2,
    comments: [
      {
        content:
          "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        crateedAt: "December 1, 2022",
        id: "1",
        stars: 5,
        user: "Elliot",
      },
      {
        content:
          "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        crateedAt: "December 1, 2022",
        id: "1",
        stars: 5,
        user: "Elliot",
      },
    ],
  };
  return (
    <div className="flex flex-col gap-5 ">
      <h2 className="text-[#161616] font-bold text-lg">
        Reviews ({data?.count})
      </h2>
      <div className="flex flex-col gap-6">
        {data.comments.map((item) => (
          <Comment key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const Comment: FC<CommentType> = ({ content, crateedAt, stars, user }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {Array.from({ length: stars }).map((item, index) => (
          <StarFilledIcon key={index} className="h-6 w-6 text-[#FF8C38] " />
        ))}
      </div>
      <h2 className="text-[#161616] font-semibold  text-base">
        {user} <span className="text-[#8C8C8C]">{crateedAt}</span>
      </h2>
      <p className="text-[#161616] font-medium text-base">{content}</p>
      <Separator className="bg-[#C7C7C7] mt-3" />
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="p-6 flex  flex-col gap-4 ">
      <div className="flex items-end">
        <Titel> Your reviews </Titel>{" "}
        <span className="text-[#4D4D4D] text-base font-medium">
          last <span className="underline font-bold  ">30 days</span>{" "}
        </span>
      </div>
      <div className="flex items-end gap-3">
        <Titel>5.0</Titel> <StarFilledIcon className="text-[#FF8C38] w-6 h-6" />
        <span className="text-[#161616] font-medium text-base">
          {" "}
          overall rating
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <StarPoint />
        <StarPoint />
        <StarPoint />
        <StarPoint />
        <StarPoint />
      </div>
      <Comments />
    </div>
  );
};

export default Reviews;
