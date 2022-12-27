import { FC, PropsWithChildren } from "react";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "10px",
      }}
    >
        {children}
    </div>
  );
};
