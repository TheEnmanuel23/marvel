// @vendors
import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
// @components
import { Layout } from "./components/Layout";
import { Navbar, NavbarItem } from "./components/Navbar";
import Favorites from "./containers/favorites";
import {
  CharacterDetail,
  Characters,
  ComicDetail,
  Comics,
  Stories,
  StoryDetail,
} from "./utilities/asyncModules";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Layout>
      <Navbar>
        <NavbarItem active={pathname === "/"}>
          <Link to="/">Characters</Link>
        </NavbarItem>
        <NavbarItem active={pathname === "/comics"}>
          <Link to="/comics">Comics</Link>
        </NavbarItem>
        <NavbarItem active={pathname === "/stories"}>
          <Link to="/stories">Stories</Link>
        </NavbarItem>
        <NavbarItem active={pathname === "/favorites"}>
          <Link to="/favorites">Favorites</Link>
        </NavbarItem>
      </Navbar>
      <Switch>
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/comics/:id" component={ComicDetail} />
        <Route path="/stories/:id" component={StoryDetail} />
        <Route path="/stories" component={Stories} />
        <Route path="/comics" component={Comics} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/" component={Characters} />
      </Switch>
    </Layout>
  );
}

export default App;
