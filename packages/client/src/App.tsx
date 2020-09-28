import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navbar, NavbarItem } from "./components/Navbar";

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
        <Route path="/comics" component={() => <p>Detalle</p>} />
        <Route path="/" component={() => <p>home</p>} />
      </Switch>
    </Layout>
  );
}

export default App;
