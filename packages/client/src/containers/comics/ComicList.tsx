// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import InfiniteScroll from "react-infinite-scroll-component";
// @components
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Loader } from "../../components/Loader";
// @types
import { GetComics, GetComicsVariables } from "../../@types/graphql/GetComics";
import { Comic } from "../../@types/customTypes";
// @graphql
import { LIMIT } from "../../utilities/constants";
import { GET_COMICS } from "../../graphql/comic";
import {
  ComicFiltersInput,
  ComicSort,
} from "../../@types/graphql/globalTypes.d";
import { ComicCard } from "../../components/ComicCard";

interface Filters {
  filters?: ComicFiltersInput;
}

function ComicList({ filters }: Filters) {
  const { loading, error, data, fetchMore } = useQuery<
    GetComics,
    GetComicsVariables
  >(GET_COMICS, {
    variables: {
      pagination: {
        limit: LIMIT,
      },
      filter: filters,
      orderBy: ComicSort.ISSUE_NUMBER,
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
        orderBy: ComicSort.ISSUE_NUMBER,
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

  if (comics.length === 0) {
    return <p>No Data :(</p>;
  }

  return (
    <Grid>
      <InfiniteScroll
        dataLength={comics.length}
        next={loadMore}
        hasMore={true}
        loader={<p>Loading more...</p>}
      >
        {comics.map((comic: Comic) => (
          <ComicCard comic={comic} />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default ComicList;
