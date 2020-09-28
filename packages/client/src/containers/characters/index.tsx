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
  GetCharacters,
  GetCharactersVariables,
  GetCharacters_characters_results,
} from "../../@types/graphql/GetCharacters";
// @graphql
import { GET_CHARACTERS } from "../../graphql/character";
import { LIMIT } from "../../utilities/constants";

function Character() {
  const { loading, error, data, fetchMore } = useQuery<
    GetCharacters,
    GetCharactersVariables
  >(GET_CHARACTERS, {
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

  return (
    <Grid>
      <InfiniteScroll
        dataLength={characters.length}
        next={loadMore}
        hasMore={true}
        loader={<p>Loading more...</p>}
      >
        {characters.map((hero: GetCharacters_characters_results) => (
          <HeroCard
            key={hero.id}
            thumbnail={hero.thumbnail || ""}
            name={hero.name}
            id={hero.id}
          />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default Character;
