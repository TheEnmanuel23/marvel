import { String } from "lodash";
import { GetCharacters_characters_results } from "./graphql/GetCharacters";
import { GetComics_comics_results } from "./graphql/GetComics";

export interface Comic extends GetComics_comics_results {
  isFavorite: boolean;
}

export interface Hero extends GetCharacters_characters_results {
  isFavorite: boolean;
}
