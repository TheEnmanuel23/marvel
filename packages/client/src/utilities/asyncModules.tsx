import React, { Suspense } from "react";
import { Loader } from "../components/Loader";

export const CharactersLazy = React.lazy(() =>
  import("../containers/characters")
);
export const ComicsLazy = React.lazy(() => import("../containers/comics"));

const loadModule = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<Loader loading />}>
      <Component />
    </Suspense>
  );
};

export const Characters = () => loadModule(CharactersLazy);

export const Comics = () => loadModule(ComicsLazy);
