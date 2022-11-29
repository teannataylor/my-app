import React from "react";
import LegendList from "./LegendList";
import Search from "./Search";

import { useState } from "react";

function LegendPage({legends}) {
//   const [legends, setLegends] = useState([]);
  const [query, setQuery] = useState("");

//   useEffect(fetchLegends, []);

//   function fetchLegends() {
//     fetch("http://localhost:3006/legends")
//       .then((res) => res.json())
//       .then((data) => setLegends(data));
//   }

  const displayLegends = legends.filter((legend) => {
    return legend.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main>
      <Search setQuery={setQuery} />
      <LegendList legends={displayLegends} />
    </main>
  );
}

export default LegendPage;