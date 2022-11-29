import React from "react";
import LegendCard from "./LegendCard";

function LegendList({ legends }) {
  const renderLegends = legends.map((legend) => (
    <LegendCard key={legend.id} legend={legend} />
  ));
  return <ul className="cards">{renderLegends}</ul>;
}

export default LegendList;