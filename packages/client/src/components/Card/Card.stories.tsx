import React from "react";

import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => (
  <Card
    thumbnail="http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg"
    name="Ancient One (Ultimate)"
    id={1}
    to={`/characters/${1}`}
  />
);

export const WithDescription = () => (
  <Card
    thumbnail="http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg"
    name="Ancient One (Ultimate)"
    id={1}
    to={`/characters/${1}`}
    body={<p>Zuras was once the leader of the Eternals.</p>}
  />
);

export const WithBadge = () => (
  <Card
    thumbnail="http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg"
    name="Ancient One (Ultimate)"
    id={1}
    to={`/characters/${1}`}
    body={<p>Zuras was once the leader of the Eternals.</p>}
    badge="Comic"
  />
);
