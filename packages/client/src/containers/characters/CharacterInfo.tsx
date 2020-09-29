// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import get from "lodash/fp/get";
// @graphql
import {
  GetCharacter,
  GetCharacterVariables,
} from "../../@types/graphql/GetCharacter";
import { GET_CHARACTER } from "../../graphql/character";
// @components
import { Navbar, NavbarItem } from "../../components/Navbar";
import { Loader } from "../../components/Loader";
import { Wrapper, Picture } from "./styles";

const CharacterInfo = ({ id }: { id: string }) => {
  let { url } = useRouteMatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { loading, error, data } = useQuery<
    GetCharacter,
    GetCharacterVariables
  >(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const thumbnail = get("character.thumbnail", data);
  const name = get("character.name", data);
  const description = get("character.description", data);

  return (
    <Wrapper>
      <Picture>
        <img src={thumbnail} alt={name} />
      </Picture>
      <div>
        <div>
          <h2>
            #{id} - {name}
          </h2>
          <p>{description}</p>
        </div>
        <Navbar>
          <NavbarItem active={[url, `${url}/comics`].includes(pathname)}>
            <Link to={`${url}/comics`}>Comics</Link>
          </NavbarItem>
          <NavbarItem active={pathname === `${url}/stories`}>
            <Link to={`${url}/stories`}>Stories</Link>
          </NavbarItem>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default CharacterInfo;
