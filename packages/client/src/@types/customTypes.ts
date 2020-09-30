import { String } from "lodash";
import { GetCharacters_characters_results } from "./graphql/GetCharacters";
import { GetComics_comics_results } from "./graphql/GetComics";
import { GetStories_stories_results } from "./graphql/GetStories";

export interface Comic extends GetComics_comics_results {
  isFavorite: boolean;
}

export interface Hero extends GetCharacters_characters_results {
  isFavorite: boolean;
}
export interface Story extends GetStories_stories_results {
  isFavorite: boolean;
}
