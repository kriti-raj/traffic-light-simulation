import { useEffect, useState, useMemo } from "react";
import Colors from "./Colors";

type LightColor = "red" | "yellow" | "green";
type LightConfig = {
  [key in LightColor]: {
    next: LightColor;
    duration: number;
  };
};

const TrafficLight = () => {
  const lightConfig: LightConfig = useMemo(
    () => ({
      red: {
        next: "yellow",
        duration: 4000,
      },
      yellow: {
        next: "green",
        duration: 5000,
      },
      green: {
        next: "red",
        duration: 3000,
      },
    }),
    []
  );

  const [light, setLight] = useState<LightColor>("red");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLight(lightConfig[light].next);
    }, lightConfig[light].duration);

    return () => clearTimeout(timeout);
  }, [light, lightConfig]);
  return (
    <div className="m-12">
      <div className="h-56 w-24 rounded-lg bg-gray-800 text-3xl flex justify-center">
        <Colors color={light} />
      </div>
    </div>
  );
};

export default TrafficLight;
