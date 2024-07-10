import React from "react";

type LightColor = "red" | "yellow" | "green";

interface ColorsProps {
  color: LightColor;
}

const Colors: React.FC<ColorsProps> = ({ color }) => {
  return (
    <div
      className={`h-12 w-12 rounded-full ${
        color === "red" ? "mt-8 bg-red-900" : ""
      } ${color === "yellow" ? "mt-20 bg-yellow-400" : ""} ${
        color === "green" ? "mt-32 bg-green-800" : ""
      }`}
    ></div>
  );
};

export default Colors;
