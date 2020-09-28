import React, { Suspense } from "react";
import { Loader } from "../components/Loader";

export const CharacterLazy = React.lazy(() =>
  import("../containers/character")
);

export const Character = () => (
  <Suspense fallback={<Loader loading />}>
    <CharacterLazy />
  </Suspense>
);
