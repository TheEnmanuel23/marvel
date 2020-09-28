import React, { Suspense } from "react";
import { Loader } from "../components/Loader";

export const loadModule = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<Loader loading />}>
      <Component />
    </Suspense>
  );
};
