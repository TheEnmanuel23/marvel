// @vendors
import React, { useState } from "react";
// @components
import { Select } from "../../components/Select";
import Characters from "./Characters";
import Comics from "./Comics";
import Stories from "./Stories";

enum FAVORITE_FILTERS {
  CHARACTER = "CHARACTER",
  COMIC = "COMIC",
  STORY = "STORY",
}

function Favorites() {
  const [filter, setFilter] = useState(FAVORITE_FILTERS.CHARACTER);

  return (
    <div>
      <div>
        <h3>Filter By</h3>
        <Select onChange={(e) => setFilter(e.target.value as FAVORITE_FILTERS)}>
          <option value={FAVORITE_FILTERS.CHARACTER}>Characters</option>
          <option value={FAVORITE_FILTERS.COMIC}>Comics</option>
          <option value={FAVORITE_FILTERS.STORY}>Stories</option>
        </Select>
      </div>
      {filter === FAVORITE_FILTERS.CHARACTER && <Characters />}
      {filter === FAVORITE_FILTERS.COMIC && <Comics />}
      {filter === FAVORITE_FILTERS.STORY && <Stories />}
    </div>
  );
}

export default Favorites;
