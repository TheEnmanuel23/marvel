import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Switch, Route } from "react-router-dom";
import { HELLO } from "./graphql/query";

function Home() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return <div className="App">{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <Switch>
      <Route path="/detail" component={() => <p>Detalle</p>} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
