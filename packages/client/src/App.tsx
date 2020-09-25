import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { HELLO } from "./graphql/query";

function App() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    console.log("error: ", error);
    return <p>Error</p>;
  }

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
