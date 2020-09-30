import React from "react";

import { Favorite } from ".";

export default {
  title: "Components/Favorite",
  component: Favorite,
};

export const Default = () => <Favorite />;

export const AsFavorite = () => <Favorite mark />;
