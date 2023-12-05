import React, { FC } from "react";

export const Titel: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="text-[#161616] text-4xl font-bold">{children}</h1>;
};
