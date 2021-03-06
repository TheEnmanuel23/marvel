import React from "react";

import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => <Input />;
export const Placeholder = () => (
  <Input placeholder="Enter filter and press enter" />
);
