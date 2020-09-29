import React from "react";
import { loadModule } from "./loadModule";

export const CharactersLazy = React.lazy(() =>
  import("../containers/characters")
);

export const ComicsLazy = React.lazy(() => import("../containers/comics"));
export const StoriesLazy = React.lazy(() => import("../containers/stories"));
export const CharacterDetailLazy = React.lazy(() =>
  import("../containers/characters/Detail")
);
export const ComicDetailLazy = React.lazy(() =>
  import("../containers/comics/Detail")
);
export const StoryDetailLazy = React.lazy(() =>
  import("../containers/stories/Detail")
);

export const Characters = () => loadModule(CharactersLazy);
export const Comics = () => loadModule(ComicsLazy);
export const Stories = () => loadModule(StoriesLazy);
export const CharacterDetail = () => loadModule(CharacterDetailLazy);
export const ComicDetail = () => loadModule(ComicDetailLazy);
export const StoryDetail = () => loadModule(StoryDetailLazy);
