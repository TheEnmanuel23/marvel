import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = `
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Loader = ({ loading }: { loading: boolean }) => {
  return <PulseLoader css={override} color={"black"} loading={loading} />;
};
