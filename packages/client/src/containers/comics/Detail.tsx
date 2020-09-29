// @vendors
import React from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
// @components
import ComicInfo from "./ComicInfo";
import Characters from "./Characters";
import Stories from "./Stories";

const Detail = () => {
  const { id } = useParams();
  let { path } = useRouteMatch();

  return (
    <div>
      <ComicInfo id={id} />
      <div className="collections">
        <Switch>
          <Route exact path={path} component={Characters} />
          <Route path={`${path}/characters`} component={Characters} />
          <Route path={`${path}/stories`} component={Stories} />
        </Switch>
      </div>
    </div>
  );
};

export default Detail;
