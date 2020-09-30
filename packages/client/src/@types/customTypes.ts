import { String } from "lodash";
import { GetComics_comics_results } from "./graphql/GetComics";

export interface Comic extends GetComics_comics_results {
  isFavorite: boolean;
  type: string;
}
