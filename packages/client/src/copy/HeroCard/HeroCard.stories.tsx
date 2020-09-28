import React from "react";

import { HeroCard } from ".";

export default {
  title: "Components/HeroCard",
  component: HeroCard,
  decorators: [
    (Story: any) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <HeroCard
    thumbnail="http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg"
    name="Ancient One (Ultimate)"
    id={1}
    description="Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!"
  />
);
