// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import get from "lodash/fp/get";
// @graphql
import { GET_COMIC } from "../../graphql/comic";
import { GetComic, GetComicVariables } from "../../@types/graphql/GetComic";
// @components
import { Navbar, NavbarItem } from "../../components/Navbar";
import { Loader } from "../../components/Loader";
import { Wrapper, Picture } from "./styles";

const ComicInfo = ({ id }: { id: string }) => {
  let { url } = useRouteMatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { loading, error, data } = useQuery<GetComic, GetComicVariables>(
    GET_COMIC,
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

  const thumbnail = get("comic.thumbnail", data);
  const title = get("comic.title", data);
  const issueNumber = get("comic.issueNumber", data);
  const format = get("comic.format", data);

  return (
    <Wrapper>
      <Picture>
        <img src={thumbnail} alt={title} />
      </Picture>
      <div>
        <div>
          <h2>
            #{id} - {title}
          </h2>
          <p>
            #{issueNumber} - {format}
          </p>
        </div>
        <Navbar>
          <NavbarItem active={[url, `${url}/characters`].includes(pathname)}>
            <Link to={`${url}/characters`}>Characters</Link>
          </NavbarItem>
          <NavbarItem active={pathname === `${url}/stories`}>
            <Link to={`${url}/stories`}>Stories</Link>
          </NavbarItem>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default ComicInfo;
