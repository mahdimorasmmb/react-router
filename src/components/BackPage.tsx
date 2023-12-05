import React, { FC } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

type Props = {
  children: React.ReactNode;
};

const BackPage: FC<Props> = ({ children }) => {
  const router = useNavigate()

  // const handleRouter = () => {
  //     router.ba
  // }
  return (
    <Button onClick={() => router(-1)} className="gap-2" variant={"ghost"} >
      <ArrowLeftIcon className="h-5 w-5 " /> {children}
    </Button>
  );
};

export default BackPage;
