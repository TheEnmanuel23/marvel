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
import {
  GetCharacters,
  GetCharactersVariables,
} from "../../@types/graphql/GetCharacters";
import { CharacterFiltersInput } from "../../@types/graphql/globalTypes";
import { Hero } from "../../@types/customTypes";
// @graphql
import { GET_CHARACTERS } from "../../graphql/character";
import { LIMIT } from "../../utilities/constants";
import { HeroCard } from "../../components/HeroCard";

interface Filters {
  filters?: CharacterFiltersInput;
}

function CharacterList({ filters }: Filters) {
  const { loading, error, data, fetchMore } = useQuery<
    GetCharacters,
    GetCharactersVariables
  >(GET_CHARACTERS, {
    variables: {
      pagination: {
        limit: LIMIT,
      },
      filter: filters,
    },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const characters = get("characters.results", data);

  const loadMore = () => {
    fetchMore({
      variables: {
        pagination: {
          offset: characters.length,
          limit: LIMIT,
        },
      },
      updateQuery: (prev: GetCharacters, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const prevCharacters = get("characters.results", prev) || [];
        const newCharacters = get("characters.results", fetchMoreResult) || [];

        const data = {
          characters: {
            ...fetchMoreResult.characters,
            results: [...prevCharacters, ...newCharacters],
          },
        } as any;

        return data;
      },
    });
  };

  if (characters.length === 0) {
    return <p>No Data :(</p>;
  }

  return (
    <Grid>
      <InfiniteScroll
        dataLength={characters.length}
        next={loadMore}
        hasMore={true}
        loader={<p>Loading more...</p>}
      >
        {characters.map((hero: Hero) => (
          <HeroCard hero={hero} />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default CharacterList;
