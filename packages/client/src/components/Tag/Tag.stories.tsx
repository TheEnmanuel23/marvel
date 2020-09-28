import React from "react";
import { action } from "@storybook/addon-actions";

import { Tag } from ".";

export default {
  title: "Components/Tag",
  component: Tag,
};

export const Default = () => <Tag handleChange={action("handleChange")} />;
