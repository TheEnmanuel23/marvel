// @vendors
import React from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
// @components
import CharacterInfo from "./CharacterInfo";
import Comics from "./Comics";
import Stories from "./Stories";

const Detail = () => {
  const { id } = useParams();
  let { path } = useRouteMatch();

  return (
    <div>
      <CharacterInfo id={id} />
      <div className="collections">
        <Switch>
          <Route exact path={path} component={Comics} />
          <Route path={`${path}/comics`} component={Comics} />
          <Route path={`${path}/stories`} component={Stories} />
        </Switch>
      </div>
    </div>
  );
};

export default Detail;
