// @vendors
import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
// @components
import { Layout } from "./components/Layout";
import { Navbar, NavbarItem } from "./components/Navbar";
import { Characters, Comics, Stories } from "./utilities/asyncModules";

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
      </Navbar>
      <Switch>
        <Route path="/stories" component={Stories} />
        <Route path="/comics" component={Comics} />
        <Route path="/" component={Characters} />
      </Switch>
    </Layout>
  );
}

export default App;
