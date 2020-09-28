import React from "react";

import { Select } from ".";

export default {
  title: "Components/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <option></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
);
