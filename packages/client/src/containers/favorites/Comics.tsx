// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
// @graphql
import { GET_FAVORITE_COMICS } from "../../graphql/favorite";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
// @types
import { ComicCard } from "../../components/ComicCard";
import { Comic } from "../../@types/customTypes";

const Comics = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE_COMICS);

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const comics = get("favoriteComics", data);

  return (
    <Grid>
      {comics.map((comic: Comic) => (
        <ComicCard comic={comic} />
      ))}
    </Grid>
  );
};

export default Comics;
