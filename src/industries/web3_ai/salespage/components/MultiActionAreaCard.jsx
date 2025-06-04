import * as React from "react";
import Collabrate from "./flexcomponents/Collaborate";
import Discover from "./flexcomponents/Discover";
import Influence from "./flexcomponents/Influence";

export default function MultiActionAreaCard() {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
      <Collabrate />
      <Discover />
      <Influence />
    </div>
  );
}
