// @vendors
import React from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
// @components
import StoryInfo from "./StoryInfo";
import Characters from "./Characters";
import Comics from "./Comics";

const Detail = () => {
  const { id } = useParams();
  let { path } = useRouteMatch();

  return (
    <div>
      <StoryInfo id={id} />
      <div className="collections">
        <Switch>
          <Route exact path={path} component={Characters} />
          <Route path={`${path}/characters`} component={Characters} />
          <Route path={`${path}/comics`} component={Comics} />
        </Switch>
      </div>
    </div>
  );
};

export default Detail;
