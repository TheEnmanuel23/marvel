// @vendors
import React, { useState } from "react";
// @components
import CharacterList from "./List";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { FormGroup } from "../../components/FormGroup";

function Character() {
  const [filters, setFilters] = useState({});
  const [name, setName] = useState("");
  const [comicIds, setComicIds] = useState("");
  const [storiesIds, setStoryIds] = useState("");

  const handleComicsIds = (tags: { value: string }[]) => {
    const ids = tags.map(({ value }: { value: string }) => value);
    setComicIds(ids.join(","));
  };

  const handleStoryIds = (tags: { value: string }[]) => {
    const ids = tags.map(({ value }: { value: string }) => value);
    setStoryIds(ids.join(","));
  };

  const onFilter = () => {
    let filterBy: { [x: string]: any } = {};
    if (name) {
      filterBy.nameStartsWith = name;
    }
    if (comicIds) {
      filterBy.comics = comicIds;
    }
    if (storiesIds) {
      filterBy.stories = storiesIds;
    }

    setFilters(filterBy);
  };

  return (
    <div>
      <div>
        <h3>Filter by</h3>
        <FormGroup>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Character name"
          />
          <Tag handleChange={handleComicsIds} placeholder="Enter Comic Ids" />
          <Tag handleChange={handleStoryIds} placeholder="Enter Story Ids" />
        </FormGroup>
        <Button onClick={onFilter}>Filter</Button>
      </div>
      <CharacterList filters={filters} />
    </div>
  );
}

export default Character;
