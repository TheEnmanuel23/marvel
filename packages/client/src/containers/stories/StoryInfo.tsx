// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import get from "lodash/fp/get";
// @graphql
import { GET_STORY } from "../../graphql/story";
import { GetStory, GetStoryVariables } from "../../@types/graphql/GetStory";
// @components
import { Navbar, NavbarItem } from "../../components/Navbar";
import { Loader } from "../../components/Loader";
import { Wrapper } from "./styles";

const StoryInfo = ({ id }: { id: string }) => {
  let { url } = useRouteMatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { loading, error, data } = useQuery<GetStory, GetStoryVariables>(
    GET_STORY,
    {
      variables: { id },
    }
  );

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const title = get("story.title", data);
  const description = get("story.description", data);

  return (
    <Wrapper>
      <div>
        <div>
          <h2>
            #{id} - {title}
          </h2>
          <p>{description}</p>
        </div>
        <Navbar>
          <NavbarItem active={[url, `${url}/characters`].includes(pathname)}>
            <Link to={`${url}/characters`}>Characters</Link>
          </NavbarItem>
          <NavbarItem active={pathname === `${url}/stories`}>
            <Link to={`${url}/comics`}>Comics</Link>
          </NavbarItem>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default StoryInfo;
