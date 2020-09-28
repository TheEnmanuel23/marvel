import React from "react";

import { HeroCard } from ".";

export default {
  title: "Components/HeroCard",
  component: HeroCard,
};

export const Default = () => (
  <HeroCard
    thumbnail="http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg"
    name="Ancient One (Ultimate)"
    id={1}
  />
);
