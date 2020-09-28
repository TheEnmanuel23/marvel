// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import InfiniteScroll from "react-infinite-scroll-component";
// @components
import { HeroCard } from "../../components/HeroCard";
import { Grid } from "../../components/Grid";
import { Loader } from "../../components/Loader";
// @types

import {
  GetComics,
  GetComicsVariables,
  GetComics_comics_results,
} from "../../@types/graphql/GetComics";
// @graphql
import { LIMIT } from "../../utilities/constants";
import { GET_COMICS } from "../../graphql/comic";

function Comics() {
  const { loading, error, data, fetchMore } = useQuery<
    GetComics,
    GetComicsVariables
  >(GET_COMICS, {
    variables: {
      pagination: {
        limit: LIMIT,
      },
    },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const comics = get("comics.results", data);

  const loadMore = () => {
    fetchMore({
      variables: {
        pagination: {
          offset: comics.length,
          limit: LIMIT,
        },
      },
      updateQuery: (prev: GetComics, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const prevComics = get("comics.results", prev) || [];
        const newComics = get("comics.results", fetchMoreResult) || [];

        const data = {
          comics: {
            ...fetchMoreResult.comics,
            results: [...prevComics, ...newComics],
          },
        } as any;

        return data;
      },
    });
  };

  return (
    <Grid>
      <InfiniteScroll
        dataLength={comics.length}
        next={loadMore}
        hasMore={true}
        loader={<p>Loading more...</p>}
      >
        {comics.map((comic: GetComics_comics_results) => (
          <HeroCard
            key={comic.id}
            thumbnail={comic.thumbnail || ""}
            name={comic.title}
            id={comic.id}
          />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default Comics;
